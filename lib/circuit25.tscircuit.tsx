import { sel } from "tscircuit";

/**
 * Compass-style gyro indicator with 4 cardinal LEDs.
 *
 * What the board does:
 * - I2C gyro header with pull-ups and decoupling.
 * - Four LEDs arranged as N/E/S/W for a fluid compass effect.
 */
export default () => (
  <board width="28mm" height="28mm">
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-10}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
    />

    <pinheader
      name="J2"
      pinCount={6}
      pitch="2.54mm"
      pcbX={10}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED_N,
        pin3: sel.net().LED_E,
        pin4: sel.net().LED_S,
        pin5: sel.net().LED_W,
        pin6: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={-3}
      pcbY={-10}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SDA,
      }}
    />
    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0603"
      pcbX={1}
      pcbY={-10}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SCL,
      }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      pcbX={-1}
      pcbY={-6}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="0603"
      pcbX={0}
      pcbY={8}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D1.pin1,
      }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={0}
      pcbY={12}
      connections={{
        pin1: sel.R3.pin2,
        pin2: sel.net().LED_N,
      }}
    />

    <resistor
      name="R4"
      resistance="1k"
      footprint="0603"
      pcbX={8}
      pcbY={0}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D2.pin1,
      }}
    />
    <led
      name="D2"
      color="green"
      footprint="0603"
      pcbX={12}
      pcbY={0}
      connections={{
        pin1: sel.R4.pin2,
        pin2: sel.net().LED_E,
      }}
    />

    <resistor
      name="R5"
      resistance="1k"
      footprint="0603"
      pcbX={0}
      pcbY={-8}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D3.pin1,
      }}
    />
    <led
      name="D3"
      color="blue"
      footprint="0603"
      pcbX={0}
      pcbY={-12}
      connections={{
        pin1: sel.R5.pin2,
        pin2: sel.net().LED_S,
      }}
    />

    <resistor
      name="R6"
      resistance="1k"
      footprint="0603"
      pcbX={-8}
      pcbY={0}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D4.pin1,
      }}
    />
    <led
      name="D4"
      color="yellow"
      footprint="0603"
      pcbX={-12}
      pcbY={0}
      connections={{
        pin1: sel.R6.pin2,
        pin2: sel.net().LED_W,
      }}
    />
  </board>
);
