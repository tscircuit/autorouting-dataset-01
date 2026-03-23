import path from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
      scripts: path.resolve(__dirname, "scripts"),
      types: path.resolve(__dirname, "types"),
    },
  },
})
