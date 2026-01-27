import { createDatasetFromLib } from "utils/createDatasetFromLib"

/**
 * Main script to generate a dataset from the circuits defined in the lib directory.
 * It iterates through all circuit files in `lib/`, renders them, and saves the 
 * resulting tscircuit JSON to the `dataset/` directory.
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
