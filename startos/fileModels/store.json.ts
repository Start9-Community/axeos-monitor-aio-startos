import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const StoreShape = z.object({
  // A value outside the supported set repairs to the default rather than
  // failing main — the assets are only shipped for these two.
  axeosVersion: z.union([z.literal('2.11'), z.literal('2.10')]).catch('2.11'),
})

export const store = FileHelper.json(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/store.json',
  },
  StoreShape,
)
