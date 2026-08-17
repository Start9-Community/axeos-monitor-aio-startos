import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'axeos-monitor-aio',
  title: 'AxeOS Monitor',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/axeos-monitor-aio-startos',
  upstreamRepo: 'https://github.com/bitaxeorg/ESP-Miner',
  marketingUrl: 'https://bitaxe.org',
  donationUrl: null,
  description: { short, long },
  volumes: ['grafana', 'prometheus'],
  images: {
    grafana: {
      source: { dockerTag: 'grafana/grafana:12.4.3' },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
    prometheus: {
      source: { dockerTag: 'prom/prometheus:v3.11.2' },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
    'json-exporter': {
      source: { dockerTag: 'prometheuscommunity/json-exporter:v0.7.0' },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  dependencies: {},
})
