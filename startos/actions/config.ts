import { T } from '@start9labs/start-sdk'
import { axeosConfig } from '../fileModels/axeos.yml'
import { store } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { jsonExporterPort } from '../utils'
import {
  isPrometheusRunning,
  reloadOutcomeMessage,
  reloadPrometheus,
} from './reloadPrometheusConfig'

const { InputSpec, Value, List } = sdk

export const inputSpec = InputSpec.of({
  ip_addresses: Value.list(
    List.text(
      {
        name: i18n('Bitaxe IP Addresses'),
        description: i18n(
          'IP address of each AxeOS/Bitaxe instance to monitor.',
        ),
        minLength: 1,
      },
      {
        placeholder: '192.168.1.100',
        inputmode: 'url',
        patterns: [
          {
            regex:
              '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
            description: i18n(
              'Must be a valid IPv4 address (e.g. 192.168.1.100)',
            ),
          },
        ],
      },
    ),
  ),
  axeosVersion: Value.select({
    name: i18n('AxeOS (ESP-Miner) Version'),
    description: i18n('The version of AxeOS (ESP-Miner) you are running.'),
    default: '2.11',
    values: { '2.11': '>= 2.11.x', '2.10': '<= 2.10.x' },
  }),
  scrape_interval: Value.number({
    name: i18n('Scrape Interval'),
    description: i18n(
      'How often to scrape for metrics. Default is 15 seconds.',
    ),
    required: true,
    default: 15,
    integer: true,
    min: 1,
    units: 'seconds',
    step: 1,
  }),
})

type InputSpec = typeof inputSpec._TYPE
type PartialInputSpec = typeof inputSpec._PARTIAL

export const config = sdk.Action.withInput(
  // id
  'config',

  // metadata
  async ({ effects }) => ({
    name: i18n('Configure AxeOS Monitor'),
    description: i18n('Configure AxeOS Monitor settings'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => readSettings(),

  // the execution function
  ({ effects, input }) => writeSettings(effects, input),
)

async function readSettings(): Promise<PartialInputSpec> {
  const conf = await axeosConfig.read().once()

  return {
    ip_addresses:
      conf?.scrape_configs[0]?.static_configs[0]?.targets.map((target) =>
        target.replace('http://', '').replace('/api/system/info', ''),
      ) ?? [],
    axeosVersion: (await store.read().once())?.axeosVersion,
    scrape_interval: parseInt(
      conf?.scrape_configs[0]?.scrape_interval?.replace('s', '') ?? '15',
    ),
  }
}

async function writeSettings(
  effects: T.Effects,
  input: InputSpec,
): Promise<T.ActionResult & { version: '1' }> {
  await axeosConfig.write(effects, {
    scrape_configs: [
      {
        job_name: 'axeos',
        scrape_interval: `${input.scrape_interval}s`,
        metrics_path: '/probe',
        params: { module: ['axeos'] },
        static_configs: [
          {
            targets: input.ip_addresses.map(
              (ip) => `http://${ip}/api/system/info`,
            ),
          },
        ],
        // The scrape goes to json-exporter, which fetches the miner named by
        // __param_target: the last rule rewrites the address after the first
        // two have copied it into the query parameter and the instance label.
        relabel_configs: [
          { source_labels: ['__address__'], target_label: '__param_target' },
          {
            source_labels: ['__address__'],
            regex: 'http://([0-9]+(?:\\.[0-9]+){3})/.*',
            target_label: 'instance',
          },
          {
            target_label: '__address__',
            replacement: `127.0.0.1:${jsonExporterPort}`,
          },
        ],
      },
    ],
  })

  const versionChanged =
    (await store.read().once())?.axeosVersion !== input.axeosVersion
  // A stopped service picks everything up when it starts; a running one only
  // restarts for a version change, because main.ts watches that value.
  const running = await isPrometheusRunning(effects)

  if (versionChanged) {
    await store.merge(effects, { axeosVersion: input.axeosVersion })
  }

  return {
    version: '1',
    title: i18n('Configuration Saved'),
    message: !running
      ? i18n('Start the service to begin collecting metrics.')
      : versionChanged
        ? i18n(
            'The service is restarting to load the dashboard for the selected AxeOS version.',
          )
        : reloadOutcomeMessage(await reloadPrometheus(effects)),
    result: null,
  }
}
