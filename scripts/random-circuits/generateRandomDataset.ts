import { mkdir } from "node:fs/promises"
import path from "node:path"
import { mulberry32 } from "lib/maths/random/mulberry32"
import { pick } from "lib/maths/random/pick"
import { randInt } from "lib/maths/random/randInt"
import { buildConnections } from "scripts/random-circuits/buildConnections"
import { footprintSizes } from "scripts/random-circuits/footprintSizes"
import { footprints } from "scripts/random-circuits/footprints"
import { generateCircuitFile } from "scripts/random-circuits/generateCircuitFile"
import { getPinInfo } from "scripts/random-circuits/get-pin-counts"
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
  const rotationAngles = [0, 15, 45, 90, 180]
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
      const pinInfo = getPinInfo(componentType, footprint)
      const pcbRotation = pick({ rng, items: rotationAngles })
      components.push({
        type: componentType,
        name: componentName,
        footprint: footprint,
        pinCount: pinInfo.pinCount,
        pinNames: pinInfo.pinNames,
        pcbX: 0,
        pcbY: 0,
        pcbRotation,
        width: size.width,
        height: size.height,
        connections: {},
        transistorType:
          componentType === "transistor"
            ? pick({ rng, items: ["npn", "pnp"] as const })
            : undefined,
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
