# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`upstreamRepo` names AxeOS (ESP-Miner), not any of the three images.** There is no single upstream project for this composition; AxeOS is what the package exists to monitor and what its versioned assets track. Don't repoint it at Grafana.
- **The versioned assets track the AxeOS API, not the image versions.** `assets/json-exporter/config-<v>.yml` and `assets/grafana/dashboards/axeos-<v>.json` come in a pair per supported AxeOS release, and `axeosVersion` in `store.json` picks which pair is used. Adding support for a new AxeOS release means adding a matching pair, extending the `StoreShape` union in `startos/fileModels/store.json.ts`, and adding the option to the `axeosVersion` select in `startos/actions/config.ts` — all four, or the selection silently falls through to the default.
- **`store.json` lives in the `prometheus` volume at `etc/prometheus/store.json`.** It is beside Prometheus's own config because that directory is the one already mounted; moving it would strand the version selection of existing installs without a migration.
- **Grafana requires a login; nothing forces the default off.** Anonymous access is not enabled (verified: `/` 302s to `/login`, the API 401s without a session), and first sign-in is Grafana's shipped `admin` / `admin`, which authenticates as-is. Don't document it as open, don't claim a forced password change, and don't add `GF_AUTH_ANONYMOUS_*` without deciding that the Prometheus interface should be open too.
