import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:5',
  releaseNotes: {
    en_US:
      'Configure AxeOS Monitor now reports whether Prometheus picked up the change, instead of reporting success when it did not. Reset Admin Password now returns the Grafana username alongside the new password. Translations added for every message the service shows.',
    es_ES:
      'Configurar Monitor de AxeOS ahora informa si Prometheus aplicó el cambio, en lugar de informar éxito cuando no fue así. Restablecer contraseña de administrador ahora devuelve el usuario de Grafana junto con la nueva contraseña. Se añadieron traducciones para todos los mensajes que muestra el servicio.',
    de_DE:
      'AxeOS Monitor konfigurieren meldet jetzt, ob Prometheus die Änderung übernommen hat, statt Erfolg zu melden, wenn dies nicht der Fall war. Administrator-Passwort zurücksetzen gibt jetzt den Grafana-Benutzernamen zusammen mit dem neuen Passwort zurück. Übersetzungen für alle Meldungen des Dienstes ergänzt.',
    pl_PL:
      'Skonfiguruj AxeOS Monitor informuje teraz, czy Prometheus przyjął zmianę, zamiast zgłaszać sukces, gdy tak nie było. Zresetuj hasło administratora zwraca teraz nazwę użytkownika Grafany razem z nowym hasłem. Dodano tłumaczenia wszystkich komunikatów wyświetlanych przez usługę.',
    fr_FR:
      'Configurer AxeOS Monitor indique désormais si Prometheus a bien pris en compte la modification, au lieu de signaler une réussite alors que ce n’était pas le cas. Réinitialiser le mot de passe administrateur renvoie maintenant le nom d’utilisateur Grafana avec le nouveau mot de passe. Traductions ajoutées pour tous les messages affichés par le service.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
