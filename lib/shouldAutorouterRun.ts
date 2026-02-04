/**
 * Decide when the autorouter should run in CLI-only dataset generation.
 */
export const shouldAutorouterRun = () => {
  if (typeof process === "undefined" || !process.env) return false

  const isCli = typeof window === "undefined" && Array.isArray(process.argv)
  if (!isCli) return false

  const argv = process.argv ?? []
  return argv.some((arg) => arg.includes("create-dataset"))
}
