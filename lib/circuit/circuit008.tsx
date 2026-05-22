/** TB6612FNG motor driver board with dual 8-pin headers and bypass capacitors. */
import type { ChipProps } from "@tscircuit/props"
import manaulEdits from "assets/manual-edits.json"
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

const motorDriverPinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
} as const

const MotorDriver = (props: ChipProps<typeof motorDriverPinLabels>) => (
  <chip
    pinLabels={motorDriverPinLabels}
    manufacturerPartNumber="TB6612FNG"
    footprint="qfn24"
    {...props}
  />
)

export default () => {
  return (
    <board
      routingDisabled={!shouldAutorouterRun()}
      width="25mm"
      height="25mm"
      autorouter="auto-cloud"
      manualEdits={manaulEdits}
    >
      <MotorDriver name="M1" />
      <pinheader
        name="JP1"
        pinCount={8}
        pcbX={-9}
        pcbRotation={90}
        schX={-4}
        footprint="pinrow8"
      />
      <pinheader
        name="JP2"
        pinCount={8}
        pcbX={9}
        pcbRotation={90}
        schX={4}
        schRotation={180}
        footprint="pinrow8"
        facingDirection="left"
      />
      <capacitor
        name="C1"
        capacitance="0.1uF"
        pcbX={-7}
        pcbY={8}
        schX={-2.5}
        schY={3}
        footprint="0402"
        schRotation={90}
      />
      <capacitor
        name="C3"
        capacitance="10uF"
        pcbX={-5}
        pcbY={8}
        schX={-1}
        schY={3}
        footprint="0402"
        schRotation={90}
      />
      <capacitor
        name="C2"
        capacitance="0.1uF"
        pcbX={5}
        pcbY={8}
        schX={2.5}
        schY={3}
        footprint="0402"
        schRotation={90}
      />

      <trace from=".JP1 > .pin8" to=".C1 > .neg" />
      <trace from=".JP1 > .pin8" to=".C3 > .pos" />
      <trace from=".JP1 > .pin8" to=".M1 > .pin24" />
      <trace from=".JP1 > .pin8" to=".M1 > .pin14" />
      <trace from=".JP1 > .pin7" to="net.VCC" />
      <trace from=".JP1 > .pin6" to="net.GND" />
      <trace from=".JP1 > .pin5" to=".M1 > .pin1" />
      <trace from=".JP1 > .pin5" to=".M1 > .pin2" />
      <trace from=".JP1 > .pin4" to=".M1 > .pin5" />
      <trace from=".JP1 > .pin4" to=".M1 > .pin6" />
      <trace from=".JP1 > .pin3" to=".M1 > .pin7" />
      <trace from=".JP1 > .pin3" to=".M1 > .pin8" />
      <trace from=".JP1 > .pin2" to=".M1 > .pin11" />
      <trace from=".JP1 > .pin2" to=".M1 > .pin12" />
      <trace from=".JP1 > .pin1" to="net.GND" />

      <trace from=".JP2 > .pin8" to="net.GND" />
      <trace from=".JP2 > .pin7" to=".M1 > .pin15" />
      <trace from=".JP2 > .pin6" to=".M1 > .pin16" />
      <trace from=".JP2 > .pin5" to=".M1 > .pin17" />
      <trace from=".JP2 > .pin4" to=".M1 > .pin19" />
      <trace from=".JP2 > .pin3" to=".M1 > .pin21" />
      <trace from=".JP2 > .pin2" to=".M1 > .pin22" />
      <trace from=".JP2 > .pin1" to=".M1 > .pin23" />

      <trace from=".C1 > .pos" to="net.GND" />
      <trace from=".C3 > .neg" to="net.GND" />
      <trace from=".C1 > .neg" to=".M1 > .pin24" />
      <trace from=".C3 > .pos" to=".M1 > .pin24" />
      <trace from=".C1 > .neg" to=".M1 > .pin14" />
      <trace from=".C3 > .pos" to=".M1 > .pin14" />
      <trace from=".C1 > .neg" to=".M1 > .pin13" />
      <trace from=".C3 > .pos" to=".M1 > .pin13" />

      <trace from=".C2 > .pos" to="net.VCC" />
      <trace from=".C2 > .neg" to="net.GND" />

      <trace from=".M1 > .pin18" to="net.GND" />
      <trace from=".M1 > .pin20" to="net.VCC" />
      <trace from=".M1 > .pin3" to="net.GND" />
      <trace from=".M1 > .pin4" to="net.GND" />
      <trace from=".M1 > .pin9" to="net.GND" />
      <trace from=".M1 > .pin10" to="net.GND" />
    </board>
  )
}
