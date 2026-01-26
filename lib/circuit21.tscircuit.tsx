import { sel } from "tscircuit";

/**
 * Small gyro tilt indicator with 3 LEDs.
 *
 * What the board does:
 * - I2C gyro header with pull-ups and decoupling.
 * - Three LED channels for basic tilt/fluid indication.
 * - LED cathodes are broken out for external control.
 */
export default () => (
  <board width="22mm" height="18mm">
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={-7}
      pcbY={5}
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
      pinCount={5}
      pitch="2.54mm"
      pcbX={-7}
      pcbY={-5}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().LED1,
        pin3: sel.net().LED2,
        pin4: sel.net().LED3,
        pin5: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={0}
      pcbY={6}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SDA,
      }}
    />
    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0603"
      pcbX={4}
      pcbY={6}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SCL,
      }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      pcbX={2}
      pcbY={2}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="0603"
      pcbX={4}
      pcbY={-2}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D1.pin1,
      }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={8}
      pcbY={-2}
      connections={{
        pin1: sel.R3.pin2,
        pin2: sel.net().LED1,
      }}
    />

    <resistor
      name="R4"
      resistance="1k"
      footprint="0603"
      pcbX={4}
      pcbY={-5}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D2.pin1,
      }}
    />
    <led
      name="D2"
      color="yellow"
      footprint="0603"
      pcbX={8}
      pcbY={-5}
      connections={{
        pin1: sel.R4.pin2,
        pin2: sel.net().LED2,
      }}
    />

    <resistor
      name="R5"
      resistance="1k"
      footprint="0603"
      pcbX={4}
      pcbY={-8}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.D3.pin1,
      }}
    />
    <led
      name="D3"
      color="green"
      footprint="0603"
      pcbX={8}
      pcbY={-8}
      connections={{
        pin1: sel.R5.pin2,
        pin2: sel.net().LED3,
      }}
    />
  </board>
);
