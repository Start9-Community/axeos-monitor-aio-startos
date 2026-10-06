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
`instructions.md` (end-user docs) in sync with your changes. This file restates neither:
whoever changes the package has both, so it carries only what they don't — repo mechanics,
a change that looks right and is not, where the next thing gets added, a naming trap, a
build or test invocation particular to this repo.

**Fix a defect you spot rather than reporting it** — you have the package open and the
context to be sure. File **a GitHub issue on this repo** only when the call isn't yours to
make: you can't pin the cause down, two defensible fixes exist, or it's too large to ride on
the work in hand. An open issue is a report, not a queue — implement one when you're asked
to or when it's labelled `Approved`, then close it with `Closes #<n>`.

Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`upstreamRepo` names AxeOS (ESP-Miner), not any of the three images.** There is no single upstream project for this composition; AxeOS is what the package exists to monitor and what its versioned assets track. Don't repoint it at Grafana.
- **Supporting a new AxeOS release takes four edits, not one.** Add the `assets/json-exporter/config-<v>.yml` and `assets/grafana/dashboards/axeos-<v>.json` pair, extend the `StoreShape` union in `startos/fileModels/store.json.ts`, and add the option to the `axeosVersion` select in `startos/actions/config.ts` — miss one and the selection silently falls through to the default.
- **Don't move `store.json` out of `prometheus:etc/prometheus/` without a migration** — existing installs would lose their version selection.
- **Don't add `GF_AUTH_ANONYMOUS_*`** without deciding that the Prometheus interface should be open too — Grafana's login is the only access control the package has.
