import { mkdir, writeFile, readdir } from "fs/promises"
import path from "path"

type ComponentType = "resistor" |
    "capacitor" |
    "inductor" |
    "diode" |
    "transistor"


const FOOTPRINTS = {
    resistor: ["0402", "0603", "0805"],
    capacitor: ["0402", "0603", "0805"],
    inductor: ["0402", "0603", "0805"],
    diode: ["SOD-123", "SOD-323"],
    transistor: ["SOT-23", "SOT-223"],
} as const

const FOOTPRINT_SIZES: Record<string, { width: number, height: number }> = {
    "0402": { width: 1.2, height: 0.7 } as const,
    "0603": { width: 1.6, height: 0.9 } as const,
    "0805": { width: 2.0, height: 1.25 } as const,
    "SOD-123": { width: 2.5, height: 1.25 } as const,
    "SOD-323": { width: 1.6, height: 0.8 } as const,
    "SOT-23": { width: 2.9, height: 1.3 } as const,
    "SOT-223": { width: 6.5, height: 3.7 } as const,
} as const


const mulberry32 = (seed: number): () => number => {
    let a = seed >>> 0
    return () => {
        a += 0x6d2b79f5
        let t = a
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const randInt = (rng: () => number, min: number, max: number): number => {
    return Math.floor(rng() * (max - min)) + min
}

const pick = <T,>(rng: () => number, items: readonly T[]): T => {
    return items[randInt(rng, 0, items.length - 1)]
}

type ComponentSpec = {
    type: ComponentType,
    name: string,
    footprint: string,
    pinCount: number,
    pcbX: number,
    pcbY: number,
    width: number,
    height: number,
    connections: Record<string, string>,
}

type Bounds = {
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
}


const overlaps = (a: Bounds, b: Bounds, margin: number = 0): boolean => {
    return !(a.maxX + margin < b.minX - margin ||
        a.minX - margin > b.maxX + margin ||
        a.maxY + margin < b.minY - margin ||
        a.minY - margin > b.maxY + margin)
}

const placeComponent = (rng: () => number, compType: ComponentType, bounds: Bounds[], footprintSize: { width: number, height: number }): {
    pcbX: number,
    pcbY: number,
    width: number,
    height: number,
} => {
    throw new Error("TODO: ");
}

const getPinCounts = (comType: ComponentType): number => {
    switch (comType) {
        case "resistor":
        case "capacitor":
        case "inductor":
            return 2
        case "diode":
            return 2
        case "transistor":
            return 3
        default:
            return 2
    }
}

const buildConnections = (rng: () => number, components: ComponentSpec[]) => {
    throw new Error("Function not implemented.")
}

type argsType = {
    allowedStartIndex: number,
    allowedEndIndex: number,
    count: number,
    minParts: number,
    maxParts: number,
    minGapBetweenParts: number,
    maxGapBetweenParts: number,
    seed: number,
}

const DEFAULT_ARGS: argsType = {
    allowedStartIndex: 100,
    allowedEndIndex: 300,
    count: 5,
    minParts: 5,
    maxParts: 20,
    seed: 42,
    minGapBetweenParts: 1,
    maxGapBetweenParts: 5,
}

// DO NOT implement args parsing from command line
const argsValues: argsType = { ...DEFAULT_ARGS }


const main = async () => {
    const libDir = path.resolve("lib")
    await mkdir(libDir, { recursive: true })

    for (let partIndex = 0; partIndex < argsValues.count; partIndex++) {
        const rng = mulberry32(argsValues.seed + partIndex * 997)
        const partsCount = randInt(rng, argsValues.minParts, argsValues.maxParts + 1)

        const component: ComponentSpec[] = []
        const bounds: Bounds[] = []
        const counts = {
            resistor: 0,
            capacitor: 0,
            inductor: 0,
            diode: 0,
            transistor: 0,
        }

        for (let p = 0; p < partsCount; p++) {
            const compType = pick(rng, ["resistor", "capacitor", "inductor", "diode", "transistor"] as const)
            counts[compType] += 1
            const compName = `${compType}-${counts[compType]}`
            const footprint = pick(rng, FOOTPRINTS[compType])
            const footprintSize = FOOTPRINT_SIZES[footprint]
            const position = placeComponent(rng, compType, bounds, footprintSize)
            bounds.push({
                minX: position.pcbX,
                maxX: position.pcbX + footprintSize.width,
                minY: position.pcbY,
                maxY: position.pcbY + footprintSize.height,
            })
            component.push({
                type: compType,
                name: compName,
                footprint: footprint,
                pinCount: getPinCounts(compType),
                pcbX: position.pcbX,
                pcbY: position.pcbY,
                width: footprintSize.width,
                height: footprintSize.height,
                connections: {}
            })
        }

        buildConnections(rng, component)
    }
}


main()

