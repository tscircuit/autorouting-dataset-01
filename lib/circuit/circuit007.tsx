import { sel } from "tscircuit"

/**
 * Button input with pull-up and LED output.
 *
 * What the board does:
 * - Provides a pull-up resistor to VCC for a momentary button input.
 * - Exposes VCC/BTN/GND/LED on a 1x4 header and BTN/GND on a 1x2 header.
 * - Lights an LED when the button signal is active.
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
    width="20.32mm"
    height="20.32mm"
  >
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-6.35}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().BTN,
        pin3: sel.net.GND,
        pin4: sel.net().LED,
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      pcbX={0}
      pcbY={6.35}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().BTN,
      }}
    />

    <pinheader
      name="J2"
      pinCount={2}
      pitch="2.54mm"
      pcbX={0}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().BTN,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="1k"
      footprint="0603"
      pcbX={6.35}
      pcbY={-2.54}
      connections={{
        pin1: sel.net().LED,
        pin2: sel.D1.pin1,
      }}
    />

    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={9.53}
      pcbY={-2.54}
      connections={{
        pin1: sel.R2.pin2,
        pin2: sel.net.GND,
      }}
    />
  </board>
)
