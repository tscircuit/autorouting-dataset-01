/** TB6612FNG motor driver board with dual 8-pin headers and bypass capacitors. */
// @ts-ignore
import { TB6612FNG_C_8_EL as MotorDriver } from "@tsci/imrishabh18.TB6612FNG"
import manaulEdits from "assets/manual-edits.json"

export default () => {
  return (
    <board width="25mm" height="25mm" autorouter="auto-cloud" manualEdits={manaulEdits}>
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
