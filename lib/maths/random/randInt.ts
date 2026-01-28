/**
 * Generates a random integer between min (inclusive) and max (exclusive).
 */
export const randInt = (options: {
  min: number
  max: number
  rng: () => number
}): number => {
  const { min, max, rng } = options
  return Math.floor(rng() * (max - min)) + min
}
