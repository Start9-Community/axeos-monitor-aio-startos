import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:6',
  releaseNotes: {
    en_US: `Configure AxeOS Monitor now reports whether Prometheus picked up the change, instead of reporting success when it did not. Reset Admin Password now returns the Grafana username alongside the new password. Translations added for every message the service shows.

- The fields in Configure AxeOS Monitor explain what to enter, and AxeOS (ESP-Miner) Version lists each option and says that changing it restarts the service.`,
    es_ES: `Configurar Monitor de AxeOS ahora informa si Prometheus aplicó el cambio, en lugar de informar éxito cuando no fue así. Restablecer contraseña de administrador ahora devuelve el usuario de Grafana junto con la nueva contraseña. Se añadieron traducciones para todos los mensajes que muestra el servicio.

- Los campos de Configurar Monitor de AxeOS explican qué introducir, y Versión de AxeOS (ESP-Miner) enumera cada opción e indica que cambiarla reinicia el servicio.`,
    de_DE: `AxeOS Monitor konfigurieren meldet jetzt, ob Prometheus die Änderung übernommen hat, statt Erfolg zu melden, wenn dies nicht der Fall war. Administrator-Passwort zurücksetzen gibt jetzt den Grafana-Benutzernamen zusammen mit dem neuen Passwort zurück. Übersetzungen für alle Meldungen des Dienstes ergänzt.

- Die Felder in AxeOS Monitor konfigurieren erklären, was einzutragen ist, und AxeOS-Version (ESP-Miner) listet jede Option auf und weist darauf hin, dass eine Änderung den Dienst neu startet.`,
    pl_PL: `Skonfiguruj AxeOS Monitor informuje teraz, czy Prometheus przyjął zmianę, zamiast zgłaszać sukces, gdy tak nie było. Zresetuj hasło administratora zwraca teraz nazwę użytkownika Grafany razem z nowym hasłem. Dodano tłumaczenia wszystkich komunikatów wyświetlanych przez usługę.

- Pola w Skonfiguruj AxeOS Monitor wyjaśniają, co wpisać, a Wersja AxeOS (ESP-Miner) wymienia każdą opcję i informuje, że jej zmiana uruchamia usługę ponownie.`,
    fr_FR: `Configurer AxeOS Monitor indique désormais si Prometheus a bien pris en compte la modification, au lieu de signaler une réussite alors que ce n’était pas le cas. Réinitialiser le mot de passe administrateur renvoie maintenant le nom d’utilisateur Grafana avec le nouveau mot de passe. Traductions ajoutées pour tous les messages affichés par le service.

- Les champs de Configurer AxeOS Monitor expliquent quoi saisir, et Version AxeOS (ESP-Miner) liste chaque option et indique que la modifier redémarre le service.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
