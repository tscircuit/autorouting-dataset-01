/**
 * Format milliseconds as seconds with one decimal place.
 */
export const formatTimeSeconds = (timeMs: number | null): string => {
  if (timeMs === null) {
    return "n/a"
  }
  return `${(timeMs / 1000).toFixed(1)}s`
}
