import { LangDict } from './default'

export default {
  es_ES: {
    // main.ts
    1: 'Exportador JSON',
    2: 'El Exportador JSON está listo',
    3: 'El Exportador JSON no está accesible',
    4: 'Prometheus está listo',
    5: 'Prometheus no está accesible',
    6: 'Grafana está listo',
    7: 'Grafana no está accesible',

    // interfaces.ts
    100: 'Panel de Grafana',
    101: 'Interfaz web de Grafana OSS',
    102: 'Navegador de métricas en bruto de Prometheus',

    // actions/config.ts
    200: 'Direcciones IP de Bitaxe',
    201: 'Dirección IP de cada instancia AxeOS/Bitaxe a monitorear.',
    202: 'Versión de AxeOS (ESP-Miner)',
    203: 'La versión de AxeOS (ESP-Miner) que está ejecutando.',
    204: 'Intervalo de scraping',
    205: 'Frecuencia de scraping de métricas. El valor predeterminado es 15 segundos.',
    206: 'Configurar Monitor de AxeOS',
    207: 'Configurar ajustes del Monitor de AxeOS',
    208: 'Debe ser una dirección IPv4 válida (p. ej. 192.168.1.100)',
    209: 'Configuración guardada',
    210: 'El servicio se está reiniciando para cargar el panel de la versión de AxeOS seleccionada.',
    211: 'Inicie el servicio para comenzar a recopilar métricas.',

    // actions/reloadPrometheusConfig.ts
    300: 'Recargar configuración de Prometheus',
    301: 'Recargar la configuración de Prometheus.',
    302: 'Configuración de Prometheus',
    303: 'Prometheus recargó su configuración.',
    304: 'Prometheus no está en ejecución. La nueva configuración se usará la próxima vez que se inicie.',
    305: 'Prometheus rechazó la recarga y sigue ejecutando su configuración anterior. Revise los registros del servicio.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nueva contraseña de administrador',
    401: 'La nueva contraseña para el usuario administrador de Grafana. Mínimo 4 caracteres.',
    402: 'La contraseña debe tener al menos 4 caracteres',
    403: 'Restablecer contraseña de administrador',
    404: 'Restablece la contraseña del usuario administrador de Grafana. Tiene efecto inmediato.',
    405: 'Esto sobrescribirá inmediatamente la contraseña actual del administrador de Grafana.',
    406: 'La contraseña del administrador de Grafana se ha restablecido correctamente.',
    407: 'Éxito',
    408: 'Usuario',
    409: 'Contraseña',

    // init/index.ts
    500: 'Añada la dirección IP de cada Bitaxe que quiera monitorear',
    501: 'Seleccione la versión de AxeOS (ESP-Miner) que ejecutan sus mineros',
  },
  de_DE: {
    // main.ts
    1: 'JSON-Exporter',
    2: 'JSON-Exporter ist bereit',
    3: 'JSON-Exporter ist nicht erreichbar',
    4: 'Prometheus ist bereit',
    5: 'Prometheus ist nicht erreichbar',
    6: 'Grafana ist bereit',
    7: 'Grafana ist nicht erreichbar',

    // interfaces.ts
    100: 'Grafana-Dashboard',
    101: 'Grafana OSS Weboberfläche',
    102: 'Browser für Prometheus-Rohmetriken',

    // actions/config.ts
    200: 'Bitaxe-IP-Adressen',
    201: 'IP-Adresse jeder zu überwachenden AxeOS/Bitaxe-Instanz.',
    202: 'AxeOS-Version (ESP-Miner)',
    203: 'Die AxeOS-Version (ESP-Miner), die du verwendest.',
    204: 'Scrape-Intervall',
    205: 'Wie oft Metriken abgerufen werden. Standard ist 15 Sekunden.',
    206: 'AxeOS Monitor konfigurieren',
    207: 'Einstellungen von AxeOS Monitor konfigurieren',
    208: 'Muss eine gültige IPv4-Adresse sein (z. B. 192.168.1.100)',
    209: 'Konfiguration gespeichert',
    210: 'Der Dienst startet neu, um das Dashboard für die gewählte AxeOS-Version zu laden.',
    211: 'Starte den Dienst, um mit der Erfassung von Metriken zu beginnen.',

    // actions/reloadPrometheusConfig.ts
    300: 'Prometheus-Konfiguration neu laden',
    301: 'Die Prometheus-Konfiguration neu laden.',
    302: 'Prometheus-Konfiguration',
    303: 'Prometheus hat seine Konfiguration neu geladen.',
    304: 'Prometheus läuft nicht. Die neue Konfiguration wird beim nächsten Start verwendet.',
    305: 'Prometheus hat das Neuladen abgelehnt und läuft weiter mit der vorherigen Konfiguration. Prüfe die Dienstprotokolle.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Neues Administrator-Passwort',
    401: 'Das neue Passwort für den Grafana-Administrator. Mindestens 4 Zeichen.',
    402: 'Das Passwort muss mindestens 4 Zeichen lang sein',
    403: 'Administrator-Passwort zurücksetzen',
    404: 'Setzt das Passwort des Grafana-Administrators zurück. Wirkt sofort.',
    405: 'Dies überschreibt das aktuelle Grafana-Administrator-Passwort sofort.',
    406: 'Das Grafana-Administrator-Passwort wurde erfolgreich zurückgesetzt.',
    407: 'Erfolg',
    408: 'Benutzername',
    409: 'Passwort',

    // init/index.ts
    500: 'Füge die IP-Adresse jedes Bitaxe hinzu, den du überwachen möchtest',
    501: 'Wähle die AxeOS-Version (ESP-Miner), die deine Miner ausführen',
  },
  pl_PL: {
    // main.ts
    1: 'Eksporter JSON',
    2: 'Eksporter JSON jest gotowy',
    3: 'Eksporter JSON jest nieosiągalny',
    4: 'Prometheus jest gotowy',
    5: 'Prometheus jest nieosiągalny',
    6: 'Grafana jest gotowa',
    7: 'Grafana jest nieosiągalna',

    // interfaces.ts
    100: 'Pulpit Grafany',
    101: 'Interfejs webowy Grafana OSS',
    102: 'Przeglądarka surowych metryk Prometheusa',

    // actions/config.ts
    200: 'Adresy IP koparek Bitaxe',
    201: 'Adres IP każdej monitorowanej instancji AxeOS/Bitaxe.',
    202: 'Wersja AxeOS (ESP-Miner)',
    203: 'Wersja AxeOS (ESP-Miner), której używasz.',
    204: 'Interwał zbierania metryk',
    205: 'Jak często pobierać metryki. Domyślnie co 15 sekund.',
    206: 'Skonfiguruj AxeOS Monitor',
    207: 'Skonfiguruj ustawienia AxeOS Monitor',
    208: 'Musi być prawidłowym adresem IPv4 (np. 192.168.1.100)',
    209: 'Zapisano konfigurację',
    210: 'Usługa uruchamia się ponownie, aby wczytać pulpit dla wybranej wersji AxeOS.',
    211: 'Uruchom usługę, aby rozpocząć zbieranie metryk.',

    // actions/reloadPrometheusConfig.ts
    300: 'Przeładuj konfigurację Prometheusa',
    301: 'Przeładuj konfigurację Prometheusa.',
    302: 'Konfiguracja Prometheusa',
    303: 'Prometheus przeładował swoją konfigurację.',
    304: 'Prometheus nie jest uruchomiony. Nowa konfiguracja zostanie użyta przy następnym starcie.',
    305: 'Prometheus odrzucił przeładowanie i nadal działa na poprzedniej konfiguracji. Sprawdź dzienniki usługi.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nowe hasło administratora',
    401: 'Nowe hasło dla administratora Grafany. Minimum 4 znaki.',
    402: 'Hasło musi mieć co najmniej 4 znaki',
    403: 'Zresetuj hasło administratora',
    404: 'Resetuje hasło administratora Grafany. Działa natychmiast.',
    405: 'Spowoduje to natychmiastowe nadpisanie obecnego hasła administratora Grafany.',
    406: 'Hasło administratora Grafany zostało pomyślnie zresetowane.',
    407: 'Sukces',
    408: 'Nazwa użytkownika',
    409: 'Hasło',

    // init/index.ts
    500: 'Dodaj adres IP każdej koparki Bitaxe, którą chcesz monitorować',
    501: 'Wybierz wersję AxeOS (ESP-Miner), której używają Twoje koparki',
  },
  fr_FR: {
    // main.ts
    1: 'Exportateur JSON',
    2: "L'exportateur JSON est prêt",
    3: "L'exportateur JSON est injoignable",
    4: 'Prometheus est prêt',
    5: 'Prometheus est injoignable',
    6: 'Grafana est prêt',
    7: 'Grafana est injoignable',

    // interfaces.ts
    100: 'Tableau de bord Grafana',
    101: 'Interface web Grafana OSS',
    102: 'Navigateur de métriques brutes Prometheus',

    // actions/config.ts
    200: 'Adresses IP des Bitaxe',
    201: 'Adresse IP de chaque instance AxeOS/Bitaxe à surveiller.',
    202: 'Version AxeOS (ESP-Miner)',
    203: 'La version AxeOS (ESP-Miner) que vous utilisez.',
    204: 'Intervalle de collecte',
    205: 'Fréquence de collecte des métriques. Valeur par défaut : 15 secondes.',
    206: 'Configurer AxeOS Monitor',
    207: 'Configurer les paramètres d’AxeOS Monitor',
    208: 'Doit être une adresse IPv4 valide (par ex. 192.168.1.100)',
    209: 'Configuration enregistrée',
    210: 'Le service redémarre pour charger le tableau de bord de la version AxeOS sélectionnée.',
    211: 'Démarrez le service pour commencer à collecter les métriques.',

    // actions/reloadPrometheusConfig.ts
    300: 'Recharger la configuration Prometheus',
    301: 'Recharger la configuration de Prometheus.',
    302: 'Configuration Prometheus',
    303: 'Prometheus a rechargé sa configuration.',
    304: "Prometheus n'est pas en cours d'exécution. La nouvelle configuration sera utilisée à son prochain démarrage.",
    305: 'Prometheus a refusé le rechargement et conserve sa configuration précédente. Consultez les journaux du service.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nouveau mot de passe administrateur',
    401: "Le nouveau mot de passe de l'utilisateur administrateur Grafana. Minimum 4 caractères.",
    402: 'Le mot de passe doit comporter au moins 4 caractères',
    403: 'Réinitialiser le mot de passe administrateur',
    404: "Réinitialise le mot de passe de l'utilisateur administrateur Grafana. Prend effet immédiatement.",
    405: "Cela écrasera immédiatement le mot de passe actuel de l'administrateur Grafana.",
    406: 'Le mot de passe administrateur Grafana a été réinitialisé avec succès.',
    407: 'Succès',
    408: "Nom d'utilisateur",
    409: 'Mot de passe',

    // init/index.ts
    500: 'Ajoutez l’adresse IP de chaque Bitaxe que vous souhaitez surveiller',
    501: 'Sélectionnez la version AxeOS (ESP-Miner) utilisée par vos mineurs',
  },
} satisfies Record<string, LangDict>
