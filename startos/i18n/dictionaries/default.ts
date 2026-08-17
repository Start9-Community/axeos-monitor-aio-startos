export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'JSON Exporter': 1,
  'JSON Exporter is ready': 2,
  'JSON Exporter is unreachable': 3,
  'Prometheus is ready': 4,
  'Prometheus is unreachable': 5,
  'Grafana is ready': 6,
  'Grafana is unreachable': 7,

  // interfaces.ts
  'Grafana Dashboard': 100,
  'Grafana OSS Web Interface': 101,
  'Prometheus raw metrics browser': 102,

  // actions/config.ts
  'Bitaxe IP Addresses': 200,
  'IP address of each AxeOS/Bitaxe instance to monitor.': 201,
  'AxeOS (ESP-Miner) Version': 202,
  'The version of AxeOS (ESP-Miner) you are running.': 203,
  'Scrape Interval': 204,
  'How often to scrape for metrics. Default is 15 seconds.': 205,
  'Configure AxeOS Monitor': 206,
  'Configure AxeOS Monitor settings': 207,
  'Must be a valid IPv4 address (e.g. 192.168.1.100)': 208,
  'Configuration Saved': 209,
  'The service is restarting to load the dashboard for the selected AxeOS version.': 210,
  'Start the service to begin collecting metrics.': 211,

  // actions/reloadPrometheusConfig.ts
  'Reload Prometheus Config': 300,
  'Reload the Prometheus configuration.': 301,
  'Prometheus Configuration': 302,
  'Prometheus reloaded its configuration.': 303,
  'Prometheus is not running. The new configuration will be used the next time it starts.': 304,
  'Prometheus refused to reload and is still running its previous configuration. Check the service logs.': 305,

  // actions/resetGrafanaAdminPassword.ts
  'New Admin Password': 400,
  'The new password for the Grafana admin user. Minimum 4 characters.': 401,
  'Password must be at least 4 characters': 402,
  'Reset Admin Password': 403,
  'Resets the Grafana admin user password. Takes effect immediately.': 404,
  'This will immediately overwrite the current Grafana admin password.': 405,
  'Grafana admin password has been reset successfully.': 406,
  Success: 407,
  Username: 408,
  Password: 409,

  // init/index.ts
  'Add the IP address of each Bitaxe you want to monitor': 500,
  'Select the AxeOS (ESP-Miner) version your miners run': 501,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
