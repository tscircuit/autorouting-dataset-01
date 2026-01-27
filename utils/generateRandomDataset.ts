import { mkdir } from "fs/promises"
import path from "path"
import { mulberry32 } from "utils/mulberry32"
import { randInt } from "utils/randInt"
import { pick } from "utils/pick"
import { footprints } from "utils/footprints"
import { footprintSizes } from "utils/footprintSizes"
import { getPinCounts } from "utils/getPinCounts"
import { placeComponentsDeterministically } from "utils/placeComponentsDeterministically"
import { buildConnections } from "utils/buildConnections"
import { generateCircuitFile } from "utils/generateCircuitFile"
import { GenerationContext } from "utils/GenerationContext"
import { ComponentSpecification } from "utils/ComponentSpecification"
import { ComponentType } from "utils/ComponentType"

/**
 * Orchestrates the creation of a dataset of random circuit designs.
 */
export const generateRandomDataset = async (
  ctx: GenerationContext
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
      ctx
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
