import { mkdir } from "node:fs/promises"
import path from "node:path"
import { mulberry32 } from "maths/random/mulberry32"
import { pick } from "maths/random/pick"
import { randInt } from "maths/random/randInt"
import { buildConnections } from "scripts/random-circuits/buildConnections"
import { footprintSizes } from "scripts/random-circuits/footprintSizes"
import { footprints } from "scripts/random-circuits/footprints"
import { generateCircuitFile } from "scripts/random-circuits/generateCircuitFile"
import { getPinCounts } from "scripts/random-circuits/getPinCounts"
import { placeComponentsDeterministically } from "scripts/random-circuits/placeComponentsDeterministically"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { ComponentType } from "types/ComponentType"
import type { GenerationContext } from "types/GenerationContext"

/**
 * Orchestrates the creation of a dataset of random circuit designs.
 */
export const generateRandomDataset = async (
  ctx: GenerationContext,
): Promise<void> => {
  const libDirectory = path.resolve("lib")
  await mkdir(libDirectory, { recursive: true })

  for (
    let circuitOffset = 0;
    circuitOffset < ctx.configuration.count;
    circuitOffset++
  ) {
    const rng = mulberry32(ctx.configuration.seed + circuitOffset * 997)
    const partsCount = randInt({
      rng,
      min: ctx.configuration.minParts,
      max: ctx.configuration.maxParts + 1,
    })

    const components: ComponentSpecification[] = []
    const typeCounts: Record<ComponentType, number> = {
      resistor: 0,
      capacitor: 0,
      inductor: 0,
      diode: 0,
      transistor: 0,
      chip: 0,
      pinhead: 0,
    }
    const innerPadding = Math.max(2, ctx.configuration.maxGapBetweenParts)
    const boardSize = {
      width:
        partsCount *
          randInt({
            rng,
            min: ctx.configuration.minGapBetweenParts,
            max: ctx.configuration.maxGapBetweenParts,
          }) +
        innerPadding * 2,
      height:
        partsCount *
          randInt({
            rng,
            min: ctx.configuration.minGapBetweenParts,
            max: ctx.configuration.maxGapBetweenParts,
          }) +
        innerPadding * 2,
    }

    for (let p = 0; p < partsCount; p++) {
      const componentType = pick({
        rng,
        items: [
          "resistor",
          "capacitor",
          "inductor",
          "diode",
          "transistor",
          "chip",
          "pinhead",
        ] as const,
      })
      typeCounts[componentType] += 1
      const componentName = `${componentType}-${typeCounts[componentType]}`
      const footprint = pick({ rng, items: footprints[componentType] })
      const size = footprintSizes[footprint]
      components.push({
        type: componentType,
        name: componentName,
        footprint: footprint,
        pinCount: getPinCounts(componentType, footprint),
        pcbX: 0,
        pcbY: 0,
        width: size.width,
        height: size.height,
        connections: {},
      })
    }

    const placedComponents = placeComponentsDeterministically(
      { rng, components, boardSize },
      ctx,
    )
    buildConnections(rng, placedComponents)
    await generateCircuitFile({
      libDirectory,
      allowedStartIndex: ctx.configuration.allowedStartIndex,
      circuitOffset,
      components: placedComponents,
      boardSize,
    })
  }
}
