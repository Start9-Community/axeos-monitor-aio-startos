import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'

export const versionGraph = VersionGraph.of({
  current,
  other: [],
})

export const GRAFANA_VERSION = '12.4.3'
export const PROMETHEUS_VERSION = '3.11.2'
export const JSON_EXPORTER_VERSION = '0.7.0'
