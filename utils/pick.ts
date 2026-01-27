import { randInt } from "utils/randInt"

/**
 * Randomly picks an item from a list.
 */
export const pick = <T>(options: {
  items: readonly T[]
  rng: () => number
}): T => {
  const { items, rng } = options
  return items[randInt({ min: 0, max: items.length, rng })]
}
