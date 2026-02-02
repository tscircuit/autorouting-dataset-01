import { sel } from "tscircuit"

/**
 * Dual LED indicator board with external control pins.
 *
 * What the board does:
 * - Provides two LEDs with series resistors tied to VCC.
 * - Exposes the LED cathodes for sinking current externally.
 * - Breaks out VCC/GND and two LED control pins on a 1x4 header.
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
    width="20mm"
    height="18mm"
  >
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-6}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
        pin3: sel.net().LED1_CTRL,
        pin4: sel.net().LED2_CTRL,
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      pcbX={3}
      pcbY={4}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED1_CTRL,
      }}
    />

    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={8}
      pcbY={4}
      connections={{
        pin1: sel.net().LED1_CTRL,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="1k"
      footprint="0603"
      pcbX={3}
      pcbY={-4}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED2_CTRL,
      }}
    />

    <led
      name="D2"
      color="green"
      footprint="0603"
      pcbX={8}
      pcbY={-4}
      connections={{
        pin1: sel.net().LED2_CTRL,
        pin2: sel.net.GND,
      }}
    />
  </board>
)
