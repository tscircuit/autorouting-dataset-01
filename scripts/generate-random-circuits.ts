import { mkdir, readdir, writeFile } from "fs/promises"
import path from "path"

type ComponentType = "resistor" | "capacitor" | "chip" | "pinheader"

type ComponentSpec = {
  type: ComponentType
  name: string
  footprint: string
  pinCount: number
  pcbX: number
  pcbY: number
  pcbRotation: number
  width: number
  height: number
  connections: Record<string, string>
}

type Strategy = "grouped" | "bus" | "daisy"

type Bounds = { x1: number; y1: number; x2: number; y2: number }

type RNG = () => number

const FOOTPRINTS = {
  resistor: ["0402", "0603", "0805"],
  capacitor: ["0402", "0603", "0805"],
  chip: ["soic8", "soic16", "dip8"],
  pinheader: ["pinrow6", "pinrow8"],
} as const

const FOOTPRINT_SIZES: Record<string, { w: number; h: number }> = {
  "0402": { w: 1.2, h: 0.7 },
  "0603": { w: 1.6, h: 0.9 },
  "0805": { w: 2.0, h: 1.25 },
  soic8: { w: 5.0, h: 6.0 },
  soic16: { w: 6.0, h: 10.0 },
  dip8: { w: 7.0, h: 10.0 },
  pinrow6: { w: 15.0, h: 3.0 },
  pinrow8: { w: 20.0, h: 3.0 },
}

const DEFAULTS = {
  count: 20,
  minParts: 8,
  maxParts: 24,
  boardWidth: 80,
  boardHeight: 80,
  seed: 1234,
}

const parseArg = (args: string[], name: string) => {
  const idx = args.indexOf(`--${name}`)
  if (idx === -1) return undefined
  return args[idx + 1]
}

const mulberry32 = (seed: number): RNG => {
  let a = seed >>> 0
  return () => {
    a += 0x6d2b79f5
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const randInt = (rng: RNG, min: number, max: number) =>
  Math.floor(rng() * (max - min + 1)) + min

const pick = <T,>(rng: RNG, items: readonly T[]): T =>
  items[randInt(rng, 0, items.length - 1)]

const shuffle = <T,>(rng: RNG, items: T[]): T[] => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const tmp = items[i]
    items[i] = items[j]
    items[j] = tmp
  }
  return items
}

const overlaps = (a: Bounds, b: Bounds, margin: number) => {
  return !(
    a.x2 + margin < b.x1 ||
    a.x1 - margin > b.x2 ||
    a.y2 + margin < b.y1 ||
    a.y1 - margin > b.y2
  )
}

const footprintToPinCount = (footprint: string) => {
  if (footprint === "soic16") return 16
  if (footprint === "soic8" || footprint === "dip8") return 8
  if (footprint === "pinrow8") return 8
  if (footprint === "pinrow6") return 6
  return 2
}

const makeComponent = (
  rng: RNG,
  type: ComponentType,
  name: string,
): Omit<ComponentSpec, "pcbX" | "pcbY" | "pcbRotation" | "connections"> => {
  const footprint = pick(rng, FOOTPRINTS[type])
  const pinCount =
    type === "resistor" || type === "capacitor"
      ? 2
      : footprintToPinCount(footprint)
  const size = FOOTPRINT_SIZES[footprint] ?? { w: 6, h: 6 }
  return {
    type,
    name,
    footprint,
    pinCount,
    width: size.w,
    height: size.h,
  }
}

const placeComponent = (
  rng: RNG,
  component: Omit<ComponentSpec, "pcbX" | "pcbY" | "pcbRotation" | "connections">,
  boardWidth: number,
  boardHeight: number,
  existing: Bounds[],
): { pcbX: number; pcbY: number; pcbRotation: number; bounds: Bounds } | null => {
  const attempts = 500
  const clearance = 1.2
  for (let i = 0; i < attempts; i++) {
    const rotation = rng() < 0.5 ? 0 : 90
    const rotated = rotation % 180 !== 0
    const w = rotated ? component.height : component.width
    const h = rotated ? component.width : component.height
    const marginX = w / 2 + 2
    const marginY = h / 2 + 2

    const x = rng() * (boardWidth - 2 * marginX) - (boardWidth / 2 - marginX)
    const y = rng() * (boardHeight - 2 * marginY) - (boardHeight / 2 - marginY)

    const bounds = {
      x1: x - w / 2,
      y1: y - h / 2,
      x2: x + w / 2,
      y2: y + h / 2,
    }

    let collision = false
    for (const other of existing) {
      if (overlaps(bounds, other, clearance)) {
        collision = true
        break
      }
    }
    if (collision) continue

    return { pcbX: x, pcbY: y, pcbRotation: rotation, bounds }
  }
  return null
}

const buildGroupedConnections = (
  rng: RNG,
  components: ComponentSpec[],
): void => {
  const allPins: { name: string; pin: string }[] = []
  for (const comp of components) {
    const count = comp.pinCount
    for (let i = 1; i <= count; i++) {
      allPins.push({ name: comp.name, pin: `pin${i}` })
    }
  }

  shuffle(rng, allPins)
  let netIndex = 1
  let idx = 0
  while (idx < allPins.length) {
    const groupSize = Math.min(
      randInt(rng, 2, 4),
      allPins.length - idx,
    )
    if (groupSize < 2) break
    const netName = `net.N${netIndex}`
    for (let i = 0; i < groupSize; i++) {
      const pinRef = allPins[idx + i]
      const comp = components.find((c) => c.name === pinRef.name)
      if (comp) comp.connections[pinRef.pin] = netName
    }
    idx += groupSize
    netIndex++
  }

  if (idx < allPins.length && netIndex > 1) {
    const fallbackNet = `net.N${netIndex - 1}`
    for (let i = idx; i < allPins.length; i++) {
      const pinRef = allPins[i]
      const comp = components.find((c) => c.name === pinRef.name)
      if (comp) comp.connections[pinRef.pin] = fallbackNet
    }
  }
}

const buildBusConnections = (rng: RNG, components: ComponentSpec[]): void => {
  const busCount = randInt(rng, 2, 4)
  const busNets = Array.from({ length: busCount }, (_, i) => `net.BUS${i + 1}`)
  let extraNet = 1

  for (const comp of components) {
    for (let i = 1; i <= comp.pinCount; i++) {
      const pin = `pin${i}`
      if (rng() < 0.7) {
        comp.connections[pin] = pick(rng, busNets)
      } else {
        comp.connections[pin] = `net.N${extraNet++}`
      }
    }
  }
}

const buildDaisyConnections = (
  rng: RNG,
  components: ComponentSpec[],
): void => {
  const chain = components.filter((c) => c.pinCount >= 2)
  for (let i = 0; i < chain.length - 1; i++) {
    const netName = `net.L${i + 1}`
    chain[i].connections.pin1 = netName
    chain[i + 1].connections.pin1 = netName
  }

  let extraNet = 1
  for (const comp of components) {
    if (!comp.connections.pin1) {
      comp.connections.pin1 = `net.L${extraNet++}`
    }
    for (let i = 2; i <= comp.pinCount; i++) {
      const pin = `pin${i}`
      comp.connections[pin] = `net.N${extraNet++}`
    }
  }
}

const buildConnections = (
  rng: RNG,
  components: ComponentSpec[],
  strategy: Strategy,
) => {
  for (const comp of components) comp.connections = {}

  if (strategy === "bus") {
    buildBusConnections(rng, components)
    return
  }
  if (strategy === "daisy") {
    buildDaisyConnections(rng, components)
    return
  }
  buildGroupedConnections(rng, components)
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
    `name=\"${component.name}\"`,
    `footprint=\"${component.footprint}\"`,
    `pcbX={${component.pcbX.toFixed(2)}}`,
    `pcbY={${component.pcbY.toFixed(2)}}`,
    `pcbRotation={${component.pcbRotation}}`,
    `connections={${formatConnections(component.connections)}}`,
  ]

  if (component.type === "resistor") {
    return `    <resistor ${baseProps.join(" ")} resistance=\"1k\" />`
  }
  if (component.type === "capacitor") {
    return `    <capacitor ${baseProps.join(" ")} capacitance=\"0.1uF\" />`
  }
  if (component.type === "pinheader") {
    return `    <pinheader ${baseProps.join(" ")} pinCount={${component.pinCount}} pitch=\"2.54mm\" />`
  }
  return `    <chip ${baseProps.join(" ")} manufacturerPartNumber=\"GENERIC\" />`
}

const makeCircuitSource = (
  index: number,
  components: ComponentSpec[],
  boardWidth: number,
  boardHeight: number,
  strategy: Strategy,
) => {
  const body = components.map(componentToJsx).join("\n")
  return `/** Randomly generated circuit ${index} (${strategy} connections). */
export default () => (
  <board width=\"${boardWidth}mm\" height=\"${boardHeight}mm\">
${body}
  </board>
)
`
}

const getStartIndex = async (libDir: string) => {
  const files = await readdir(libDir)
  const numbers = files
    .map((file) => file.match(/circuit(\d+)\.tsx/))
    .filter(Boolean)
    .map((match) => Number(match?.[1] ?? 0))
    .filter((num) => Number.isFinite(num))
  if (numbers.length === 0) return 1
  return Math.max(...numbers) + 1
}

const main = async () => {
  const args = process.argv.slice(2)
  const count = Number(parseArg(args, "count") ?? DEFAULTS.count)
  const minParts = Number(parseArg(args, "min") ?? DEFAULTS.minParts)
  const maxParts = Number(parseArg(args, "max") ?? DEFAULTS.maxParts)
  const boardWidth = Number(parseArg(args, "width") ?? DEFAULTS.boardWidth)
  const boardHeight = Number(parseArg(args, "height") ?? DEFAULTS.boardHeight)
  const seed = Number(parseArg(args, "seed") ?? DEFAULTS.seed)
  const outDir = parseArg(args, "out") ?? "lib"
  const startOverride = parseArg(args, "start")
  const strategyArg = parseArg(args, "strategy")
  const strategies: Strategy[] = ["grouped", "bus", "daisy"]

  const libDir = path.resolve(outDir)
  await mkdir(libDir, { recursive: true })

  const startIndex = startOverride
    ? Number(startOverride)
    : await getStartIndex(libDir)

  for (let i = 0; i < count; i++) {
    const rng = mulberry32(seed + i * 997)
    const partCount = randInt(rng, minParts, maxParts)

    const strategy = (strategyArg as Strategy) || pick(rng, strategies)

    const components: ComponentSpec[] = []
    const bounds: Bounds[] = []
    const counts = { resistor: 0, capacitor: 0, chip: 0, pinheader: 0 }

    for (let p = 0; p < partCount; p++) {
      const r = rng()
      const type: ComponentType =
        r < 0.45
          ? "resistor"
          : r < 0.7
            ? "capacitor"
            : r < 0.85
              ? "chip"
              : "pinheader"

      counts[type] += 1
      const namePrefix =
        type === "resistor"
          ? "R"
          : type === "capacitor"
            ? "C"
            : type === "chip"
              ? "U"
              : "J"
      const name = `${namePrefix}${counts[type]}`

      const base = makeComponent(rng, type, name)
      const placement = placeComponent(
        rng,
        base,
        boardWidth,
        boardHeight,
        bounds,
      )
      if (!placement) continue

      bounds.push(placement.bounds)
      components.push({
        ...base,
        pcbX: placement.pcbX,
        pcbY: placement.pcbY,
        pcbRotation: placement.pcbRotation,
        connections: {},
      })
    }

    buildConnections(rng, components, strategy)

    const circuitIndex = String(startIndex + i).padStart(3, "0")
    const filename = `circuit${circuitIndex}.tsx`
    const outputPath = path.join(libDir, filename)
    const source = makeCircuitSource(
      startIndex + i,
      components,
      boardWidth,
      boardHeight,
      strategy,
    )
    await writeFile(outputPath, source)
    console.log(`[Generated] ${outputPath} (${components.length} parts)`)
  }
}

void main().catch((err) => {
  console.error(err)
  process.exit(1)
})
