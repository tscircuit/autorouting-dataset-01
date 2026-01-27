import { sel } from "tscircuit"
import { ACS37800 } from "imports/ACS37800"
import { SM04B_SRSS_TB_LF__SN } from "imports/SM04B_SRSS_TB_LF__SN"

/**
 * ACS37800-based Qwiic power meter board with high-current pass-through holes.
 *
 * What the board does:
 * - Measures voltage and current via the ACS37800 and exposes data over I2C.
 * - Provides two Qwiic connectors for daisy-chained I2C.
 * - Includes I2C pull-ups and local decoupling on the logic supply.
 * - Adds two large current holes for the primary conductor path.
 */
export default () => (
  <board width="50mm" height="30mm">
    <schematictext
      text="ACS37800 Power Meter"
      fontSize={0.4}
      color="brown"
      schY={6}
    />
    <schematictext
      text="I2C Addr: 0x60"
      fontSize={0.25}
      color="brown"
      schY={5.4}
    />

    <ACS37800
      name="U1"
      pcbX={0}
      pcbY={0}
      pcbRotation={0}
      schX={0}
      schY={0}
      schWidth={3}
      schHeight={5}
      schPinSpacing={0.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [16, 15, 14, 13, 12, 11, 10, 9],
        },
      }}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
        pin5: sel.net().ALERT,
        pin6: sel.net().ZCD,
        pin7: sel.net().IP_PLUS,
        pin8: sel.net().IP_MINUS,
        pin9: sel.net().NC,
        pin10: sel.net().NC,
        pin11: sel.net().NC,
        pin12: sel.net().NC,
        pin13: sel.net().NC,
        pin14: sel.net().NC,
        pin15: sel.net().NC,
        pin16: sel.net().NC,
      }}
    />

    <SM04B_SRSS_TB_LF__SN
      name="J1"
      pcbX={-18}
      pcbY={10}
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
      pcbX={18}
      pcbY={10}
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
      pcbY={12}
      pcbRotation={180}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
        pin3: sel.net().ALERT,
        pin4: sel.net().ZCD,
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={-6}
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
      pcbX={6}
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
      pcbX={0}
      pcbY={-10}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net.GND,
      }}
    />

    <netlabel
      net="ALERT"
      anchorSide="left"
      schX={-2.5}
      schY={-1}
      connection="U1.pin5"
    />
    <netlabel
      net="ZCD"
      anchorSide="left"
      schX={-2.5}
      schY={-2}
      connection="U1.pin6"
    />

    <hole name="H1" diameter={6.35} pcbX={-20} pcbY={-6} />
    <hole name="H2" diameter={6.35} pcbX={20} pcbY={-6} />
  </board>
)
