import { createDatasetFromLib } from "scripts/create-dataset/createDatasetFromLib"

/**
 * Main script to generate a dataset from the circuits defined in lib/circuit.
 * It iterates through all circuit files in `lib/circuit/`, renders them, and saves the
 * resulting tscircuit JSON to the `lib/dataset/` directory.
 */
const main = async () => {
  await createDatasetFromLib()
}

void main().then(
  () => {
    process.exit(0)
  },
  (error) => {
    console.error(error)
    process.exit(1)
  },
)
