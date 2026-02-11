import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["lib/cli/index.ts"],
  format: ["esm"],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: "dist/cli",
  target: "node18",
  platform: "node",
  banner: {
    js: "#!/usr/bin/env bun",
  },
  // Bundle all internal code but keep node_modules external
  noExternal: [/^(lib|scripts|types)\//],
  external: [
    "@tscircuit/capacity-autorouter",
    "@tscircuit/checks",
    "graphics-debug",
    "circuit-json",
  ],
})
