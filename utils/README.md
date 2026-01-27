- utils/Bounds.ts
Represents the bounding box of a component or area.

- utils/ComponentSpecification.ts
Detailed specification for a circuit component.

- utils/ComponentType.ts
Supported component types for generation.

- utils/GenerationConfiguration.ts
Configuration options for the random circuit generation.

- utils/GenerationContext.ts
Context object passed through the generation process.

- utils/buildConnections.ts
Randomly assigns connections between component pins.

- utils/collectFiles.ts
Recursively collects all .tsx files from the given directory.

- utils/componentToJsx.ts
Converts a component specification to a JSX string.

- utils/createDatasetFromLib.ts
Iterates through the lib directory and processes each TSX file into the dataset.

- utils/defaultConfiguration.ts
Default configuration values for circuit generation.

- utils/extractJsdoc.ts
Extracts JSDoc comments from a source string.

- utils/findDeterministicPlacement.ts
Finds a valid deterministic placement for a component footprint.

- utils/footprintSizes.ts
Defined sizes for various component footprints.

- utils/footprintToPinCount.ts
Derives the pin count from a footprint name.

- utils/footprints.ts
List of available footprints categorized by component type.

- utils/formatConnections.ts
Formats a connection dictionary into a JSX-friendly string.

- utils/generateCircuitFile.ts
Generates and writes a .tsx circuit file based on specifications.

- utils/generateDocs.ts
Automates the generation of README.md documentation for the project.

- utils/generateRandomDataset.ts
Orchestrates the creation of a dataset of random circuit designs.

- utils/getInnerBoard.ts
Calculates the inner board boundaries based on board size and padding.

- utils/getPinCounts.ts
Returns the number of pins based on component type and footprint.

- utils/isWithin.ts
Checks if a bounding box is completely within another.

- utils/mulberry32.ts
A seeded 32-bit random number generator.

- utils/overlaps.ts
Checks if two bounding boxes overlap, with an optional margin.

- utils/pick.ts
Randomly picks an item from a list.

- utils/placeComponentsDeterministically.ts
Places components on the board such that they do not overlap.

- utils/processCircuitModule.tsx
Loads a circuit module and saves its simple route JSON to the dataset.

- utils/randInt.ts
Generates a random integer between min (inclusive) and max (exclusive).

- utils/toPosix.ts
Normalizes a path string to use POSIX separators.

- utils/updateReadmeForDirectory.ts
Updates the README.md in a directory based on JSDoc comments in its files.
