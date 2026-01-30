/**
 * Return percentile for a list of durations in milliseconds.
 */
export const getPercentileMs = (
  durationMsList: number[],
  percentile: number,
): number | null => {
  if (durationMsList.length === 0) {
    return null
  }
  const sorted = [...durationMsList].sort((a, b) => a - b)
  const clampedPercentile = Math.min(Math.max(percentile, 0), 1)
  const position = (sorted.length - 1) * clampedPercentile
  const lowerIndex = Math.floor(position)
  const upperIndex = Math.ceil(position)
  const lowerValue = sorted[lowerIndex]
  const upperValue = sorted[upperIndex]
  if (lowerIndex === upperIndex) {
    return lowerValue
  }
  const weight = position - lowerIndex
  return lowerValue + (upperValue - lowerValue) * weight
}
