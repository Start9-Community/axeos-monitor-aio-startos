import { T } from '@start9labs/start-sdk'
import { i18n } from '../i18n'
import { manifest } from '../manifest'
import { sdk } from '../sdk'
import { prometheusPort } from '../utils'

type ReloadOutcome = 'reloaded' | 'stopped' | 'rejected'

export const isPrometheusRunning = async (effects: T.Effects) =>
  (await sdk.getStatus(effects, { packageId: manifest.id }).once())?.health?.[
    'prometheus'
  ]?.result === 'success'

/**
 * Never throws: callers write the config file first, and failing them
 * afterwards would leave the file written while the task that prompted for it
 * stays raised.
 */
export async function reloadPrometheus(
  effects: T.Effects,
): Promise<ReloadOutcome> {
  if (!(await isPrometheusRunning(effects))) return 'stopped'

  try {
    const response = await fetch(
      `http://127.0.0.1:${prometheusPort}/-/reload`,
      { method: 'POST' },
    )
    if (response.ok) return 'reloaded'
    console.error(
      `Prometheus rejected the reload: ${response.status} ${response.statusText}`,
    )
  } catch (e) {
    console.error('Prometheus reload request failed', e)
  }
  return 'rejected'
}

export const reloadOutcomeMessage = (outcome: ReloadOutcome) =>
  outcome === 'reloaded'
    ? i18n('Prometheus reloaded its configuration.')
    : outcome === 'stopped'
      ? i18n(
          'Prometheus is not running. The new configuration will be used the next time it starts.',
        )
      : i18n(
          'Prometheus refused to reload and is still running its previous configuration. Check the service logs.',
        )

export const reloadPrometheusConfig = sdk.Action.withoutInput(
  // id
  'reload-prometheus-config',

  // metadata
  async ({ effects }) => ({
    name: i18n('Reload Prometheus Config'),
    description: i18n('Reload the Prometheus configuration.'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'hidden',
  }),

  // execution function
  async ({ effects }) => ({
    version: '1',
    title: i18n('Prometheus Configuration'),
    message: reloadOutcomeMessage(await reloadPrometheus(effects)),
    result: null,
  }),
)
