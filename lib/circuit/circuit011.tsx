import { SM04B_SRSS_TB_LF__SN } from "lib/imports/SM04B_SRSS_TB_LF__SN"
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"
import { sel } from "tscircuit"

/**
 * I2C bus splitter with Qwiic connectors and header breakout.
 *
 * What the board does:
 * - Provides two Qwiic connectors for daisy-chained I2C.
 * - Breaks out VCC/GND/SDA/SCL to a 1x4 header.
 * - Includes 2.2k pull-ups and a local decoupling capacitor.
 */
export default () => (
  <board routingDisabled={!shouldAutorouterRun()} width="32mm" height="20mm">
    <schematictext
      text="I2C Qwiic Splitter"
      fontSize={0.35}
      color="brown"
      schY={6}
    />

    <SM04B_SRSS_TB_LF__SN
      name="J1"
      pcbX={-11}
      pcbY={6}
      pcbRotation={180}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
    />

    <SM04B_SRSS_TB_LF__SN
      name="J2"
      pcbX={11}
      pcbY={6}
      pcbRotation={180}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
    />

    <pinheader
      name="J3"
      pinCount={4}
      pitch="2.54mm"
      pcbX={0}
      pcbY={-6}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={-5}
      pcbY={0}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().SDA,
      }}
    />

    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0603"
      pcbX={5}
      pcbY={0}
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
      pcbY={0}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
      }}
    />
  </board>
)
