import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:3',
  releaseNotes: {
    en_US: 'Add StartOS 0.4.0 and Start SDK 2 compatibility',
    es_ES: 'Añade compatibilidad con StartOS 0.4.0 y Start SDK 2',
    de_DE:
      'Kompatibilität mit StartOS 0.4.0 und Start SDK 2 hinzugefügt',
    pl_PL: 'Dodano zgodność ze StartOS 0.4.0 i Start SDK 2',
    fr_FR:
      'Ajout de la compatibilité avec StartOS 0.4.0 et Start SDK 2',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
