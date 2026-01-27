import { ChildProcess } from "child_process"
import { mkdir, writeFile, readdir } from "fs/promises"
import path from "path"

type ComponentType = "resistor" |
    "capacitor" |
    "inductor" |
    "diode" |
    "transistor" | 
    "chip" | 
    "pinhead"


const FOOTPRINTS = {
    resistor: ["0402", "0603", "0805"],
    capacitor: ["0402", "0603", "0805"],
    inductor: ["0402", "0603", "0805"],
    diode: ["SOD-123", "SOD-323"],
    transistor: ["SOT-23", "SOT-223"],
    chip: ["pinrow6", "soic8", "soic16", "dip8", "pinrow8"],
    pinhead: ["pinheader2", "pinheader4", "pinheader6"]
} as const

const FOOTPRINT_SIZES: Record<string, { width: number, height: number }> = {
    "0402": { width: 1.2, height: 0.7 } as const,
    "0603": { width: 1.6, height: 0.9 } as const,
    "0805": { width: 2.0, height: 1.25 } as const,
    "SOD-123": { width: 2.5, height: 1.25 } as const,
    "SOD-323": { width: 1.6, height: 0.8 } as const,
    "SOT-23": { width: 2.9, height: 1.3 } as const,
    "SOT-223": { width: 6.5, height: 3.7 } as const,
    "pinrow6": { width: 10.0, height: 2.5 } as const,
    "soic8": { width: 5.0, height: 4.0 } as const,
    "soic16": { width: 10.0, height: 4.0 } as const,
    "dip8": { width: 7.62, height: 7.62 } as const,
    "pinrow8": { width: 12.5, height: 2.5 } as const,
    "pinheader2": { width: 5.0, height: 2.5 } as const,
    "pinheader4": { width: 10.0, height: 2.5 } as const,
    "pinheader6": { width: 15.0, height: 2.5 } as const,
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

const placeComponent = (rng: () => number, compType: ComponentType, bounds: Bounds[], footprintSize: { width: number, height: number }, boardSize: { width: number, height: number }): {
    pcbX: number,
    pcbY: number,
    width: number,
    height: number,
} => {
    const attempts = 500

    for (let i = 0; i < attempts; i++) {
        const gap = randInt(rng, argsValues.minGapBetweenParts, argsValues.maxGapBetweenParts + 1)
        const pcbX = rng() * Math.max(0, boardSize.width - footprintSize.width)
        const pcbY = rng() * Math.max(0, boardSize.height - footprintSize.height)
        const candidate: Bounds = {
            minX: pcbX - footprintSize.width / 2,
            maxX: pcbX + footprintSize.width / 2,
            minY: pcbY - footprintSize.height / 2,
            maxY: pcbY + footprintSize.height / 2,
        }

        let collision = false
        for (const existing of bounds) {
            if (overlaps(candidate, existing, gap)) {
                collision = true
                break
            }
        }
        if (collision) continue

        return {
            pcbX,
            pcbY,
            width: footprintSize.width,
            height: footprintSize.height,
        }
    }

    return {
        pcbX: 0,
        pcbY: 0,
        width: footprintSize.width,
        height: footprintSize.height,
    }
}

const footprintToPinCount = (footprint: string) => {
    if (footprint === "soic16") return 16
    if (footprint === "soic8" || footprint === "dip8") return 8
    if (footprint === "pinrow8") return 8
    if (footprint === "pinrow6") return 6
    if (footprint === "pinheader6") return 6
    if (footprint === "pinheader4") return 4
    if (footprint === "pinheader2") return 2
    return 2
}

const getPinCounts = (comType: ComponentType, footprint: string): number => {
    switch (comType) {
        case "resistor":
        case "capacitor":
        case "inductor":
            return 2
        case "diode":
            return 2
        case "transistor":
            return 3
        case "chip":
        case "pinhead":
            return footprintToPinCount(footprint)
        default:
            return 2
    }
}

const buildConnections = (rng: () => number, components: ComponentSpec[]) => {
    const allPins: { component: ComponentSpec, pin: string }[] = []
    for (const comp of components) {
        comp.connections = {}
        for (let i = 1; i <= comp.pinCount; i++) {
            allPins.push({ component: comp, pin: `pin${i}` })
        }
    }

    for (let i = allPins.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1))
        const tmp = allPins[i]
        allPins[i] = allPins[j]
        allPins[j] = tmp
    }

    let netIndex = 1
    let idx = 0
    while (idx < allPins.length) {
        const groupSize = Math.min(randInt(rng, 2, 5), allPins.length - idx)
        if (groupSize < 2) break
        const netName = `net.N${netIndex}`
        for (let i = 0; i < groupSize; i++) {
            const pinRef = allPins[idx + i]
            pinRef.component.connections[pinRef.pin] = netName
        }
        idx += groupSize
        netIndex++
    }

    if (idx < allPins.length && netIndex > 1) {
        const fallbackNet = `net.N${netIndex - 1}`
        for (let i = idx; i < allPins.length; i++) {
            const pinRef = allPins[i]
            pinRef.component.connections[pinRef.pin] = fallbackNet
        }
    }
}

const formatConnections = (connections: Record<string, string>) => {
    const entries = Object.entries(connections)
    if (entries.length === 0) return "{}"
    const lines = entries
        .map(([pin, net]) => `        ${pin}: "${net}",`)
        .join("\n")
    return `{
${lines}
      }`
}

const componentToJsx = (component: ComponentSpec) => {
    const baseProps = [
        `name="${component.name}"`,
        `footprint="${component.footprint}"`,
        `pcbX={${component.pcbX.toFixed(2)}}`,
        `pcbY={${component.pcbY.toFixed(2)}}`,
        `connections={${formatConnections(component.connections)}}`,
    ]

    if (component.type === "resistor") {
        return `    <resistor ${baseProps.join(" ")} resistance="1k" />`
    }
    if (component.type === "capacitor") {
        return `    <capacitor ${baseProps.join(" ")} capacitance="0.1uF" />`
    }
    if (component.type === "inductor") {
        return `    <inductor ${baseProps.join(" ")} inductance="10uH" />`
    }
    if (component.type === "diode") {
        return `    <diode ${baseProps.join(" ")} />`
    }
    if (component.type === "transistor") {
        return `    <transistor ${baseProps.join(" ")} />`
    }
    if (component.type === "pinhead") {
        return `    <pinheader ${baseProps.join(" ")} pinCount={${component.pinCount}} pitch="2.54mm" />`
    }
    return `    <chip ${baseProps.join(" ")} manufacturerPartNumber="GENERIC" />`
}

const generateFiles = async (libDir: string, allowedStartIndex: number, partIndex: number, component: ComponentSpec[], boardSize: { width: number, height: number }) => {
    const body = component.map(componentToJsx).join("\n")
    const circuitIndex = String(allowedStartIndex + partIndex).padStart(3, "0")
    const filename = `circuit${circuitIndex}.tsx`
    const outputPath = path.join(libDir, filename)
    const source = `/** Randomly generated circuit ${allowedStartIndex + partIndex}. */
export default () => (
  <board width="${boardSize.width.toFixed(2)}mm" height="${boardSize.height.toFixed(2)}mm">
${body}
  </board>
)
`
    await writeFile(outputPath, source)
}


type argsType = {
    allowedStartIndex: number,
    count: number,
    minParts: number,
    maxParts: number,
    minGapBetweenParts: number,
    maxGapBetweenParts: number,
    seed: number,
}

const DEFAULT_ARGS: argsType = {
    allowedStartIndex: 100,
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
        const counts: Record<ComponentType, number> =  {
            resistor: 0,
            capacitor: 0,
            inductor: 0,
            diode: 0,
            transistor: 0,
            chip: 0,
            pinhead: 0
        }
        const boardSize = {
            width: argsValues.count * argsValues.maxGapBetweenParts * 2,
            height: argsValues.count * argsValues.maxGapBetweenParts * 2,
        }

        for (let p = 0; p < partsCount; p++) {
            const compType = pick(rng, ["resistor", "capacitor", "inductor", "diode", "transistor", "chip", "pinhead"] as const)
            counts[compType] += 1
            const compName = `${compType}-${counts[compType]}`
            const footprint = pick(rng, FOOTPRINTS[compType])
            const footprintSize = FOOTPRINT_SIZES[footprint]

            const position = placeComponent(rng, compType, bounds, footprintSize, boardSize)
            bounds.push({
                minX: position.pcbX,
                maxX: position.pcbX + position.width,
                minY: position.pcbY,
                maxY: position.pcbY + position.height,
            })
            component.push({
                type: compType,
                name: compName,
                footprint: footprint,
                pinCount: getPinCounts(compType, footprint),
                pcbX: position.pcbX,
                pcbY: position.pcbY,
                width: position.width,
                height: position.height,
                connections: {}
            })
        }

        buildConnections(rng, component)
        await generateFiles(libDir, argsValues.allowedStartIndex, partIndex, component, boardSize)
    }
}


main()
