/**
 * Picks a random item with weights (higher weight = more likely).
 */
export const pickWeighted = <T>(options: {
  rng: () => number
  items: readonly T[]
  weights: readonly number[]
}): T => {
  const { rng, items, weights } = options
  if (items.length === 0) {
    throw new Error("pickWeighted requires at least one item")
  }
  if (items.length !== weights.length) {
    throw new Error("pickWeighted items and weights must be the same length")
  }
  let total = 0
  for (const weight of weights) {
    if (weight > 0) total += weight
  }
  if (total <= 0) {
    throw new Error("pickWeighted requires a positive total weight")
  }
  let roll = rng() * total
  for (let i = 0; i < items.length; i++) {
    const weight = weights[i]
    if (weight <= 0) continue
    if (roll < weight) return items[i]
    roll -= weight
  }
  return items[items.length - 1]
}
