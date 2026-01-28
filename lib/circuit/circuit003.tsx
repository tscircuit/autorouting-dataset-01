import { ATTINY85V_10SU } from "lib/imports/ATTINY85V_10SU"
import { AVR_ISP_2x3 } from "lib/imports/AVR_ISP_2x3"
import { JoystickThumb } from "lib/imports/JoystickThumb"
import { PinHeader1x4 } from "lib/imports/PinHeader1x4"
import { SM04B_SRSS_TB_LF__SN } from "lib/imports/SM04B_SRSS_TB_LF__SN"
import { sel } from "tscircuit"

/**
 * ATTiny85-based joystick/I2C breakout board with onboard pull-ups and status LED.
 *
 * What the board does:
 * - Reads a joystick (X/Y axes + select) via the ATTiny85.
 * - Exposes I2C (SDA/SCL) along with 3.3V and GND on multiple connectors.
 * - Includes a pogo-style AVR ISP header for programming the ATTiny85.
 * - Provides optional I2C pull-ups via a 3-pin solder jumper.
 * - Shows power/activity with an on-board LED.
 */
export default () => (
  <board width="25.40mm" height="50.80mm">
    <schematictext text="ATTiny85" fontSize={0.4} color="brown" schY={6} />
    <schematictext
      text="Vin: 2.7-5.5V"
      fontSize={0.25}
      color="brown"
      schY={5.4}
    />

    <ATTINY85V_10SU
      name="U2"
      pcbX={0}
      pcbY={10.16}
      pcbRotation={270}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [8, 4],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 3, 2, 7, 6, 5],
        },
      }}
      schY={3}
      connections={{
        pin1: sel.net().RST_BAR,
        pin2: sel.net().VERTICAL,
        pin3: sel.net().HORIZONTAL,
        pin4: sel.net.GND,
        pin5: sel.net().SDA,
        pin6: sel.net().MISO_6_SELECT,
        pin7: sel.net().SCL,
        pin8: sel.net.V3_3,
      }}
    />
    <netlabel
      net="SDA"
      anchorSide="left"
      schX={1.25}
      schY={2.5}
      connection="U2.pin5"
    />
    <capacitor
      name="C4"
      capacitance="0.1uf"
      footprint="0603"
      pcbX={6.35}
      pcbY={16.51}
      pcbRotation={0}
      schRotation={90}
      schX={-2.5}
      schY={3}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.V3_3,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={1.5}
      schY={5.5}
      connection="R8.pin2"
    />

    <resistor
      name="R8"
      resistance="10k"
      footprint="0603"
      pcbX={-6.35}
      pcbY={16.51}
      pcbRotation={180}
      schRotation={90}
      schX={1.5}
      schY={4.5}
      connections={{
        pin1: sel.net().RST_BAR,
        pin2: sel.net.V3_3,
      }}
    />

    <schematictext
      text="Default I2C Addr: 0x20"
      fontSize={0.2}
      color="brown"
      schY={1.9}
    />

    <schematictext
      text="Pogo Programmer"
      fontSize={0.4}
      color="brown"
      schY={6}
      schX={8}
    />

    <AVR_ISP_2x3
      name="J6"
      pcbX={0}
      pcbY={5.08}
      pcbRotation={90}
      layer="bottom"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 3, 5],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [2, 4, 6],
        },
      }}
      schX={8}
      schY={2.5}
      connections={{
        pin1: sel.net().MISO_6_SELECT,
        pin3: sel.net().SCL,
        pin5: sel.net().RST_BAR,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={9.3}
      schY={3.1}
      connectsTo={sel.J6.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={9.3}
      schY={1.9}
      connectsTo={sel.J6.pin6}
    />
    <netlabel
      net="SDA"
      anchorSide="left"
      schX={9.35}
      schY={2.5}
      connection="J6.pin4"
    />

    <schematictext
      text="Power"
      fontSize={0.4}
      color="brown"
      schY={6}
      schX={19}
    />
    <schematictext
      text="Indicator"
      fontSize={0.4}
      color="brown"
      schY={5.5}
      schX={19}
    />

    <resistor
      name="R6"
      resistance="1k"
      footprint="0603"
      pcbX={0}
      pcbY={19.05}
      pcbRotation={180}
      schRotation={90}
      schX={19}
      schY={3.8}
      connections={{
        pin1: sel.D1.pin1,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={19}
      schY={4.5}
      connection="R6.pin2"
    />

    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={0}
      pcbY={16.51}
      pcbRotation={180}
      schRotation={-90}
      schX={19}
      schY={2.2}
      connections={{
        pin1: sel.R6.pin1,
        pin2: sel.net.GND,
      }}
    />

    <schematictext
      text="Disconnect JP7 to"
      fontSize={0.25}
      color="brown"
      schY={6}
      schX={14}
    />
    <schematictext
      text="remove the pullups"
      fontSize={0.25}
      color="brown"
      schY={5.6}
      schX={14}
    />
    <schematictext
      text="from the I2C bus"
      fontSize={0.25}
      color="brown"
      schY={5.2}
      schX={14}
    />

    <solderjumper
      name="JP7"
      bridgedPins={[["1", "2", "3"]]}
      pcbX={-8.89}
      pcbY={17.78}
      pcbRotation={270}
      layer="bottom"
      schRotation={180}
      schX={14}
      schY={3.5}
      footprint="solderjumper3_bridged123_p1.041_pw0.660_ph1.270"
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={14}
      schY={4}
      connection="JP7.pin2"
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={6.35}
      pcbY={19.05}
      pcbRotation={180}
      schRotation={90}
      schX={12.5}
      schY={2}
      connections={{
        pin2: sel.JP7.pin3,
      }}
    />

    <resistor
      name="R7"
      resistance="2.2k"
      footprint="0603"
      pcbX={-6.35}
      pcbY={19.05}
      pcbRotation={0}
      schRotation={90}
      schX={15.5}
      schY={2}
      connections={{
        pin2: sel.JP7.pin1,
      }}
    />

    <netlabel
      net="SCL"
      connection="R1.pin1"
      anchorSide="right"
      schX={12.4}
      schY={1}
    />
    <netlabel
      net="SDA"
      connection="R7.pin1"
      anchorSide="left"
      schX={15.6}
      schY={1}
    />

    <schematictext
      text="I2C Connections"
      fontSize={0.4}
      color="brown"
      schY={-2}
    />

    <SM04B_SRSS_TB_LF__SN
      name="J4"
      pcbX={9.62}
      pcbY={12.7}
      pcbRotation={90}
      schX={-1.5}
      schY={-5.5}
    />
    <SM04B_SRSS_TB_LF__SN
      name="J1"
      pcbX={-9.62}
      pcbY={12.7}
      pcbRotation={270}
      schX={1.5}
      schY={-5.5}
    />
    <PinHeader1x4
      name="J2"
      pcbX={0}
      pcbY={24.13}
      pcbRotation={0}
      schX={4.5}
      schY={-5.5}
    />
    <netlabel
      net="SDA"
      connection="J4.pin3"
      anchorSide="right"
      schX={-2.8}
      schY={-5.4}
    />
    <netlabel
      net="SCL"
      connection="J4.pin4"
      anchorSide="right"
      schX={-2.8}
      schY={-5.2}
    />
    <netlabel
      net="SDA"
      connection="J1.pin3"
      anchorSide="right"
      schX={0.3}
      schY={-5.4}
    />
    <netlabel
      net="SCL"
      connection="J1.pin4"
      anchorSide="right"
      schX={0.3}
      schY={-5.2}
    />
    <netlabel
      net="SDA"
      connection="J2.pin3"
      anchorSide="right"
      schX={3.2}
      schY={-5.4}
    />
    <netlabel
      net="SCL"
      connection="J2.pin4"
      anchorSide="right"
      schX={3.2}
      schY={-5.2}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={3.5}
      schY={-4.9}
      connectsTo={sel.J2.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={3.5}
      schY={-6.1}
      connectsTo={sel.J2.pin1}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={-2.5}
      schY={-4.9}
      connectsTo={sel.J4.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-2.5}
      schY={-6.1}
      connectsTo={sel.J4.pin1}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={0.5}
      schY={-4.9}
      connectsTo={sel.J1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={0.5}
      schY={-6.1}
      connectsTo={sel.J1.pin1}
    />

    <schematictext
      text="Joystick"
      fontSize={0.4}
      color="brown"
      schY={-2}
      schX={13}
    />

    <JoystickThumb
      name="S1"
      pcbX={0}
      pcbY={-12.7}
      pcbRotation={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7, 8],
        },
      }}
      schWidth={2.5}
      schHeight={4.0}
      schPinSpacing={0.5}
      schX={14}
      schY={-6}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net().VERTICAL,
        pin3: sel.net.GND,
        pin4: sel.net.V3_3,
        pin5: sel.net().HORIZONTAL,
        pin6: sel.net.GND,
        pin7: sel.net().MISO_6_SELECT,
        pin8: sel.net.GND,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={12.25}
      schY={-3.5}
      connection="S1.pin1,S1.pin4"
    />
    <netlabel
      net="VERTICAL"
      anchorSide="right"
      schX={11.75}
      schY={-4.75}
      connection="S1.pin2"
    />

    <hole name="MH1" diameter={3.302} pcbX={-10.16} pcbY={22.86} />
    <hole name="MH2" diameter={3.302} pcbX={10.16} pcbY={22.86} />
    <hole name="MH3" diameter={3.302} pcbX={-10.16} pcbY={2.54} />
    <hole name="MH4" diameter={3.302} pcbX={-10.16} pcbY={-22.86} />
    <hole name="MH5" diameter={3.302} pcbX={10.16} pcbY={2.54} />
    <hole name="MH6" diameter={3.302} pcbX={10.16} pcbY={-22.86} />
  </board>
)
