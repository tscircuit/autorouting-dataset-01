import { sel } from "tscircuit"

/**
 * Simple voltage-divider with LED indicator and 1x3 header.
 *
 * What the board does:
 * - Provides a two-resistor divider from VIN to VOUT.
 * - Exposes VIN/VOUT/GND on a header for probing.
 * - Drives an LED from VOUT through a current-limit resistor.
 */
export default () => (
  <board width="30.32mm" height="15.24mm">
    <pinheader
      name="J1"
      pinCount={3}
      pitch="2.54mm"
      pcbX={-6.35}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VIN,
        pin2: sel.net().VOUT,
        pin3: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      pcbX={2.54}
      pcbY={4.06}
      connections={{
        pin1: sel.net().VIN,
        pin2: sel.net().VOUT,
      }}
    />

    <resistor
      name="R2"
      resistance="10k"
      footprint="0603"
      pcbX={2.54}
      pcbY={-4.06}
      connections={{
        pin1: sel.net().VOUT,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="0603"
      pcbX={8.89}
      pcbY={0}
      connections={{
        pin1: sel.net().VOUT,
        pin2: sel.D1.pin1,
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={12.7}
      pcbY={0}
      connections={{
        pin1: sel.R3.pin2,
        pin2: sel.net.GND,
      }}
    />
  </board>
)
