# autorouting-dataset-01

Benchmark dataset and tooling for evaluating autorouters against a shared set of `tscircuit` board layouts.

The repository currently publishes 205 generated `SimpleRouteJson` scenarios from the `lib/dataset/` package entrypoint. Scenario IDs are intentionally sparse: source circuits are numbered, but some are ignored or do not produce dataset output.

## What is in this repo

- `lib/circuit/`: source TSX circuit definitions.
- `lib/dataset/`: generated `*.simple-route.json` benchmark scenarios and `index.js` exports.
- `fixtures/preview.fixture.tsx`: local preview page for browsing SRJ scenarios.
- `lib/cli/`: CLI for running an autorouter implementation against the dataset.
- `scripts/create-dataset/`: dataset generation from `lib/circuit/`.
- `scripts/run-benchmark/`: benchmark execution and HTML report generation.

## Install

```bash
bun install
```

## Local development

Run the preview/dev environment:

```bash
bun run dev
```

Open the preview fixture to inspect generated scenarios from `lib/dataset/`.

## Dataset generation

Generate the dataset from the circuit files listed in `tscircuit.config.json`:

```bash
bun scripts/create-dataset/index.ts
```

Generate a single circuit:

```bash
bun scripts/create-dataset/index.ts lib/circuit/circuit001.tsx
```

This writes `*.simple-route.json` files into `lib/dataset/` and refreshes `lib/dataset/index.js`.

## Benchmark CLI

Build the CLI bundle:

```bash
bun run build:cli
```

Run a benchmark against an autorouter export:

```bash
autorouting-dataset-runner <autorouter-path> [solver-name]
```

Useful options:

- `--scenario-limit <count>`: run only part of the dataset.
- `--output <path>`: write the HTML report to a custom location.

The CLI writes benchmark reports into `results/` by default.

## Quality checks

Run formatting/linting checks:

```bash
bun run check
```

Run tests:

```bash
bun test
```

## Publishing

The published package entrypoint is `lib/dataset/index.js`, which re-exports every generated scenario for downstream benchmark consumers.
