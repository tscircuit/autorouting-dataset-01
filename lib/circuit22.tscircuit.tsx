import { sel } from "tscircuit";

/**
 * Medium gyro fluid bar with 5 LEDs.
 *
 * What the board does:
 * - I2C gyro header with pull-ups and decoupling.
 * - Five LED channels for fluid-style bar indication.
 * - LED cathodes are broken out for external control.
 */
export default () => (
  <board width="30mm" height="22mm">
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-11}
      pcbY={6}
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
      pinCount={7}
      pitch="2.54mm"
      pcbX={-11}
      pcbY={-6}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED1,
        pin3: sel.net().LED2,
        pin4: sel.net().LED3,
        pin5: sel.net().LED4,
        pin6: sel.net().LED5,
        pin7: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={-2}
      pcbY={7}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SDA,
      }}
    />
    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0603"
      pcbX={2}
      pcbY={7}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SCL,
      }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      pcbX={0}
      pcbY={3}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="0603"
      pcbX={6}
      pcbY={6}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED1_A,
      }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={10}
      pcbY={6}
      connections={{
        pin1: sel.net().LED1_A,
        pin2: sel.net().LED1,
      }}
    />

    <resistor
      name="R4"
      resistance="1k"
      footprint="0603"
      pcbX={6}
      pcbY={3}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED2_A,
      }}
    />
    <led
      name="D2"
      color="yellow"
      footprint="0603"
      pcbX={10}
      pcbY={3}
      connections={{
        pin1: sel.net().LED2_A,
        pin2: sel.net().LED2,
      }}
    />

    <resistor
      name="R5"
      resistance="1k"
      footprint="0603"
      pcbX={6}
      pcbY={0}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED3_A,
      }}
    />
    <led
      name="D3"
      color="green"
      footprint="0603"
      pcbX={10}
      pcbY={0}
      connections={{
        pin1: sel.net().LED3_A,
        pin2: sel.net().LED3,
      }}
    />

    <resistor
      name="R6"
      resistance="1k"
      footprint="0603"
      pcbX={6}
      pcbY={-3}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED4_A,
      }}
    />
    <led
      name="D4"
      color="green"
      footprint="0603"
      pcbX={10}
      pcbY={-3}
      connections={{
        pin1: sel.net().LED4_A,
        pin2: sel.net().LED4,
      }}
    />

    <resistor
      name="R7"
      resistance="1k"
      footprint="0603"
      pcbX={6}
      pcbY={-6}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED5_A,
      }}
    />
    <led
      name="D5"
      color="blue"
      footprint="0603"
      pcbX={10}
      pcbY={-6}
      connections={{
        pin1: sel.net().LED5_A,
        pin2: sel.net().LED5,
      }}
    />
  </board>
);
