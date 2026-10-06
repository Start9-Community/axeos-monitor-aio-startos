import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.looseObject({
  global: z.looseObject({
    scrape_interval: z.string(),
  }),
  scrape_config_files: z.array(z.string()).optional(),
  scrape_configs: z.array(
    z.looseObject({
      job_name: z.string(),
      metrics_path: z.string(),
      params: z.looseObject({
        module: z.array(z.string()),
      }),
      static_configs: z.array(
        z.looseObject({
          targets: z.array(z.string()),
        }),
      ),
      relabel_configs: z.array(
        z.looseObject({
          source_labels: z.array(z.string()).optional(),
          regex: z.string().optional(),
          target_label: z.string(),
          replacement: z.string().optional(),
        }),
      ),
    }),
  ),
})

export const prometheusConfig = FileHelper.yaml(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/prometheus.yml',
  },
  shape,
)

export type PrometheusConfigType = z.infer<typeof shape>
export const defaultPrometheusConfig: PrometheusConfigType = {
  global: {
    scrape_interval: '15s',
  },
  scrape_config_files: ['/etc/prometheus/scrape_configs.d/*.yml'],
  scrape_configs: [],
}
