/**
 * Extracts JSDoc comments from a source string.
 */
export const extractJsdoc = (content: string): string => {
  const match = content.match(/\/\*\*[\s\S]*?\*\//)
  if (!match) return ""
  return match[0]
    .replace(/^\/\*\*|\*\/$/g, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter(Boolean)
    .join(" ")
    .trim()
}
