import { randInt } from "lib/maths/random/randInt"
import type { ComponentSpecification } from "types/ComponentSpecification"

/**
 * Randomly assigns connections between component pins.
 */
export const buildConnections = (
  rng: () => number,
  components: ComponentSpecification[],
): void => {
  const allPins: { component: ComponentSpecification; pin: string }[] = []
  for (const component of components) {
    component.connections = {}
    for (const pin of component.pinNames) {
      allPins.push({ component: component, pin })
    }
  }

  for (let i = allPins.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const temporaryPin = allPins[i]
    allPins[i] = allPins[j]
    allPins[j] = temporaryPin
  }

  let netIndex = 1
  let currentPinIndex = 0
  while (currentPinIndex < allPins.length) {
    const groupSize = Math.min(
      randInt({ rng, min: 2, max: 5 }),
      allPins.length - currentPinIndex,
    )
    if (groupSize < 2) break
    const netName = `net.N${netIndex}`
    for (let i = 0; i < groupSize; i++) {
      const pinReference = allPins[currentPinIndex + i]
      pinReference.component.connections[pinReference.pin] = netName
    }
    currentPinIndex += groupSize
    netIndex++
  }

  if (currentPinIndex < allPins.length && netIndex > 1) {
    const fallbackNet = `net.N${netIndex - 1}`
    for (let i = currentPinIndex; i < allPins.length; i++) {
      const pinReference = allPins[i]
      pinReference.component.connections[pinReference.pin] = fallbackNet
    }
  }
}
