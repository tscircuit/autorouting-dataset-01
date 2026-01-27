import { createDatasetFromLib } from "utils/createDatasetFromLib"

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
