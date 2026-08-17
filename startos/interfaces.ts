import { i18n } from './i18n'
import { sdk } from './sdk'
import { prometheusPort, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'ui')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, { protocol: 'http' })
  const uiReceipt = await uiMultiOrigin.export([
    sdk.createInterface(effects, {
      name: i18n('Grafana Dashboard'),
      id: 'ui',
      description: i18n('Grafana OSS Web Interface'),
      type: 'ui',
      schemeOverride: null,
      masked: false,
      username: null,
      path: '',
      query: {},
    }),
  ])

  const prometheusMulti = sdk.MultiHost.of(effects, 'prometheus')
  const prometheusMultiOrigin = await prometheusMulti.bindPort(prometheusPort, {
    protocol: 'http',
  })
  const prometheusReceipt = await prometheusMultiOrigin.export([
    sdk.createInterface(effects, {
      name: 'Prometheus',
      id: 'prometheus',
      description: i18n('Prometheus raw metrics browser'),
      type: 'ui',
      schemeOverride: null,
      masked: false,
      username: null,
      path: '',
      query: {},
    }),
  ])

  return [uiReceipt, prometheusReceipt]
})
