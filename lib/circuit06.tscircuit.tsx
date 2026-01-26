import { sel } from "tscircuit";

/**
 * Dual RC low-pass filter with test header.
 *
 * What the board does:
 * - Filters two input signals with identical RC networks.
 * - Exposes IN_A/OUT_A and IN_B/OUT_B on a 1x6 header.
 */
export default () => (
  <board width="22.86mm" height="17.78mm">
    <pinheader
      name="J1"
      pinCount={6}
      pitch="2.54mm"
      pcbX={-7.62}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().IN_A,
        pin2: sel.net().OUT_A,
        pin3: sel.net.GND,
        pin4: sel.net().IN_B,
        pin5: sel.net().OUT_B,
        pin6: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      pcbX={2.54}
      pcbY={5.08}
      connections={{
        pin1: sel.net().IN_A,
        pin2: sel.net().OUT_A,
      }}
    />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      pcbX={8.89}
      pcbY={5.08}
      connections={{
        pin1: sel.net().OUT_A,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      pcbX={2.54}
      pcbY={-5.08}
      connections={{
        pin1: sel.net().IN_B,
        pin2: sel.net().OUT_B,
      }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0603"
      pcbX={8.89}
      pcbY={-5.08}
      connections={{
        pin1: sel.net().OUT_B,
        pin2: sel.net.GND,
      }}
    />
  </board>
);
