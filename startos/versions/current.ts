import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:4',
  releaseNotes: {
    en_US:
      'Updates Start SDK to 2.0.9 and deduplicates SDK copies in package dependencies.',
    es_ES:
      'Actualiza Start SDK a 2.0.9 y elimina copias duplicadas del SDK en las dependencias del paquete.',
    de_DE:
      'Aktualisiert das Start SDK auf 2.0.9 und entfernt doppelte SDK-Kopien in den Paketabhängigkeiten.',
    pl_PL:
      'Aktualizuje Start SDK do wersji 2.0.9 i usuwa zduplikowane kopie SDK z zależności pakietu.',
    fr_FR:
      'Met à jour Start SDK vers la version 2.0.9 et déduplique les copies du SDK dans les dépendances du paquet.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
