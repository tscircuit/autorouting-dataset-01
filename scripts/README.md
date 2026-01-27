- scripts/create-dataset.tsx
Main script to generate a dataset from the circuits defined in the lib directory. It iterates through all circuit files in `lib/`, renders them, and saves the resulting tscircuit JSON to the `dataset/` directory.

- scripts/genratedocs.ts
Script to automatically generate README.md files for specified directories. It parses the files in each directory and updates the corresponding README.md with information about the exported components or functions. Usage: bun scripts/genratedocs.ts [--dirs=lib,imports,utils,types,scripts]

- scripts/random-circuits.ts
Script to generate a dataset of random circuits. Its slides the components on the board and creates random connections between them. It uses the default configuration to generate a set of random circuits.
