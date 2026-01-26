import { sel } from "tscircuit";
import { PinHeader1x3 } from "imports/PinHeader1x3";
import { VGF39NCHXT_B103 } from "imports/VGF39NCHXT_B103";

/**
 * Low-side load switch with gate pull-down and status LED.
 *
 * What the board does:
 * - Switches a load to ground using a small 3-pin FET device.
 * - Exposes VIN/LOAD/GND and SIG/VIN/GND on two 1x3 headers.
 * - Adds a gate pull-down and a signal LED for quick debugging.
 */
export default () => (
  <board width="22mm" height="22mm">
    <schematictext text="Low-Side Switch" fontSize={0.35} color="brown" schY={5.5} />

    <PinHeader1x3
      name="J1"
      pcbX={0}
      pcbY={8}
      pcbRotation={180}
      connections={{
        pin1: sel.net().VIN,
        pin2: sel.net().LOAD,
        pin3: sel.net.GND,
      }}
    />

    <PinHeader1x3
      name="J2"
      pcbX={0}
      pcbY={-8}
      pcbRotation={0}
      connections={{
        pin1: sel.net().SIG,
        pin2: sel.net().VIN,
        pin3: sel.net.GND,
      }}
    />

    <VGF39NCHXT_B103
      name="Q1"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: sel.net().SIG,
        pin2: sel.net().LOAD,
        pin3: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="100k"
      footprint="0603"
      pcbX={6}
      pcbY={-1}
      connections={{
        pin1: sel.net().SIG,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="1k"
      footprint="0603"
      pcbX={-6}
      pcbY={-1}
      connections={{
        pin1: sel.net().SIG,
        pin2: sel.D1.pin1,
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={-6}
      pcbY={-5}
      connections={{
        pin1: sel.R2.pin2,
        pin2: sel.net.GND,
      }}
    />
  </board>
);
