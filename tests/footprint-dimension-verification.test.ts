import { expect, test } from "bun:test"
import { RootCircuit } from "@tscircuit/core"
import React from "react"
import { footprintSizes } from "scripts/random-circuits/footprintSizes"
import { getSimpleRouteJsonFromCircuitJson } from "tscircuit"

const footprintComponentTypes = {
  "0402": "resistor",
  "0603": "resistor",
  "0805": "resistor",
  "1206": "resistor",
  "1210": "resistor",
  "2512": "resistor",
  "axial_p0.2in": "diode",
  sod123: "diode",
  sod323: "diode",
  "SOT-23": "transistor",
  "SOT-223": "transistor",
  soic8: "chip",
  "soic8_p1.27mm": "chip",
  soic16: "chip",
  dip16: "chip",
  ssop8: "chip",
  ssop16: "chip",
  tssop8: "chip",
  tssop16: "chip",
  tssop20: "chip",
  "tssop20_p0.5mm": "chip",
  qfn16: "chip",
  qfn24: "chip",
  qfn32: "chip",
  "qfn24_w6_h6_p0.8mm_thermalpad_startingpin(topside,rightpin)_ccw": "chip",
  qfp16: "chip",
  qfp32: "chip",
  qfp48: "chip",
  qfp64: "chip",
  tqfp32: "chip",
  tqfp48: "chip",
  lqfp32: "chip",
  lqfp48: "chip",
  bga32: "chip",
  bga64: "chip",
  dip8: "chip",
  pinrow8: "chip",
  pinrow2: "pinheader",
  pinrow4: "pinheader",
  pinrow6: "chip",
} as const

const getPinCountFromFootprint = (footprint: string) => {
  const match = footprint.match(/(\d+)/)
  if (!match) {
    throw new Error(`Could not infer pin count from ${footprint}`)
  }
  return Number(match[1])
}

const getConnections = (componentType: string, footprint: string) => {
  if (componentType === "resistor") {
    return {
      resistance: "1k",
      connections: { pin1: "net.N1", pin2: "net.N2" },
    }
  }

  if (componentType === "diode") {
    return {
      connections: { pin1: "net.N1", pin2: "net.N2" },
    }
  }

  if (componentType === "transistor") {
    return {
      type: "bjt",
      connections: { pin1: "net.N1", pin2: "net.N2", pin3: "net.N3" },
    }
  }

  const pinCount = getPinCountFromFootprint(footprint)
  const connections = Object.fromEntries(
    Array.from({ length: pinCount }, (_, index) => [
      `pin${index + 1}`,
      `net.N${index + 1}`,
    ]),
  )

  if (componentType === "chip") {
    return {
      manufacturerPartNumber: "GENERIC",
      connections,
    }
  }

  if (componentType === "pinheader") {
    return {
      pinCount,
      pitch: "2.54mm",
      connections,
    }
  }

  throw new Error(`Unsupported component type ${componentType}`)
}

const measureFootprint = async (
  componentType: string,
  footprint: string,
): Promise<{ width: number; height: number; obstacleCount: number }> => {
  const circuit = new RootCircuit()
  circuit.add(
    React.createElement(
      "board",
      { width: "80mm", height: "80mm", routingDisabled: true },
      React.createElement(
        componentType === "pinheader" ? "pinheader" : componentType,
        {
          name: `${componentType}-${footprint}`,
          footprint,
          pcbX: 0,
          pcbY: 0,
          pcbRotation: 0,
          layer: "top",
          ...getConnections(componentType, footprint),
        },
      ),
    ),
  )

  await circuit.renderUntilSettled()

  const { simpleRouteJson: srj } = getSimpleRouteJsonFromCircuitJson({
    circuitJson: circuit.getCircuitJson(),
  })

  const minX = Math.min(
    ...srj.obstacles.map((obstacle) => obstacle.center.x - obstacle.width / 2),
  )
  const maxX = Math.max(
    ...srj.obstacles.map((obstacle) => obstacle.center.x + obstacle.width / 2),
  )
  const minY = Math.min(
    ...srj.obstacles.map((obstacle) => obstacle.center.y - obstacle.height / 2),
  )
  const maxY = Math.max(
    ...srj.obstacles.map((obstacle) => obstacle.center.y + obstacle.height / 2),
  )

  return {
    width: Number((maxX - minX).toFixed(2)),
    height: Number((maxY - minY).toFixed(2)),
    obstacleCount: srj.obstacles.length,
  }
}

for (const [footprint, configuredSize] of Object.entries(footprintSizes)) {
  test(`${footprint} footprint size matches measured SRJ envelope`, async () => {
    const componentType =
      footprintComponentTypes[footprint as keyof typeof footprintComponentTypes]
    const measured = await measureFootprint(componentType, footprint)

    expect({
      width: measured.width,
      height: measured.height,
    }).toEqual(configuredSize)
  })
}
