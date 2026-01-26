import { sel } from "tscircuit";

/**
 * 2-key macro pad matrix with status LED.
 *
 * What the board does:
 * - Two switch footprints in a 1-row/2-column matrix.
 * - Breaks out row/column signals plus VCC/GND.
 * - Adds a power/status LED.
 */
export default () => (
  <board width="24mm" height="18mm">
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-8}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().ROW1,
        pin2: sel.net().COL1,
        pin3: sel.net().COL2,
        pin4: sel.net.GND,
      }}
    />

    <pinheader
      name="K1"
      pinCount={2}
      pitch="2.54mm"
      pcbX={2}
      pcbY={4}
      connections={{
        pin1: sel.net().ROW1,
        pin2: sel.net().COL1,
      }}
    />

    <pinheader
      name="K2"
      pinCount={2}
      pitch="2.54mm"
      pcbX={2}
      pcbY={-4}
      connections={{
        pin1: sel.net().ROW1,
        pin2: sel.net().COL2,
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      pcbX={8}
      pcbY={-1}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D1.pin1,
      }}
    />

    <led
      name="D1"
      color="blue"
      footprint="0603"
      pcbX={8}
      pcbY={-5}
      connections={{
        pin1: sel.R1.pin2,
        pin2: sel.net.GND,
      }}
    />
  </board>
);
