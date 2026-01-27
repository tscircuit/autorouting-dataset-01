/**
 * Formats a connection dictionary into a JSX-friendly string.
 */
export const formatConnections = (connections: Record<string, string>): string => {
  const entries = Object.entries(connections)
  if (entries.length === 0) return "{}"
  const lines = entries
    .map(([pin, net]) => `        ${pin}: "${net}",`)
    .join("\n")
  return `{
${lines}
      }`
}
