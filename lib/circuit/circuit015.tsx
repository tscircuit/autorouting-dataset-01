import { sel } from "tscircuit"

/**
 * Quad RC low-pass filter bank with a 1x12 header.
 *
 * What the board does:
 * - Filters four independent signals with identical RC networks.
 * - Exposes IN/OUT/GND for each channel on a single header.
 */
export default () => (
  <board
    routingDisabled={
      (typeof globalThis !== "undefined" &&
        (globalThis as any).TSCIRCUIT_ROUTING_DISABLED === "1") ||
      (typeof process !== "undefined" &&
        !!process.env &&
        process.env.TSCIRCUIT_ROUTING_DISABLED === "1")
    }
    width="35mm"
    height="32mm"
  >
    <pinheader
      name="J1"
      pinCount={12}
      pitch="2.54mm"
      pcbX={-14}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().IN1,
        pin2: sel.net().OUT1,
        pin3: sel.net.GND,
        pin4: sel.net().IN2,
        pin5: sel.net().OUT2,
        pin6: sel.net.GND,
        pin7: sel.net().IN3,
        pin8: sel.net().OUT3,
        pin9: sel.net.GND,
        pin10: sel.net().IN4,
        pin11: sel.net().OUT4,
        pin12: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      pcbX={0}
      pcbY={8}
      connections={{
        pin1: sel.net().IN1,
        pin2: sel.net().OUT1,
      }}
    />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      pcbX={7}
      pcbY={8}
      connections={{
        pin1: sel.net().OUT1,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      pcbX={0}
      pcbY={3}
      connections={{
        pin1: sel.net().IN2,
        pin2: sel.net().OUT2,
      }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0603"
      pcbX={7}
      pcbY={3}
      connections={{
        pin1: sel.net().OUT2,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0603"
      pcbX={0}
      pcbY={-3}
      connections={{
        pin1: sel.net().IN3,
        pin2: sel.net().OUT3,
      }}
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0603"
      pcbX={7}
      pcbY={-3}
      connections={{
        pin1: sel.net().OUT3,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R4"
      resistance="4.7k"
      footprint="0603"
      pcbX={0}
      pcbY={-8}
      connections={{
        pin1: sel.net().IN4,
        pin2: sel.net().OUT4,
      }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0603"
      pcbX={7}
      pcbY={-8}
      connections={{
        pin1: sel.net().OUT4,
        pin2: sel.net.GND,
      }}
    />
  </board>
)
