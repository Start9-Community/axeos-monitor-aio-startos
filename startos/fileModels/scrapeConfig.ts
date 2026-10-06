import { z } from '@start9labs/start-sdk'

export const ScrapeConfigShape = z.looseObject({
  scrape_configs: z.array(
    z.looseObject({
      job_name: z.string(),
      scrape_interval: z.string().optional(),
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

export type ScrapeConfigType = z.infer<typeof ScrapeConfigShape>
