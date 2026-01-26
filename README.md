# autorouting-dataset-01

A set of tscircuit problems to benchmark autorouting (currently 16 circuits in `lib/`).

## Problems in this repo

1. Bootstrap `tsci init`
2. Generate TSX files use footprint strings (can have scripts to generate, problems just need to be varied) (No overlapping components etc.)
3. Script that generates sample001.srj.json, sample002.srj.json
4. Literally publish to npm, and use for benchmarks inside autorouter repo

## Progression of stuff

1. Get 200 problems
2. Convert 200 problems to simple route json
3. Run against every pipeline, and report % completion, inside a file. Check for fatal DRC errors. (Completed 43%, DRC Pass 30%)

| Pipeline | Completed | DRC Pass | Avg Time per Circuit |
| -------- | --------- | -------- | ----- |
| `AutoroutingPipeline2` | 43% | 30% | 5s |
| `AutoroutingPipeline4_HyperGraphPortPoint` | 50% | 30% | 4s |

4. Script for generating benchmark against all pipelines
5. Script for generating for a single pipeline (allows comparing)
