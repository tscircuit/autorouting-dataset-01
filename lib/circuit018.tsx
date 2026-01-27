/** ISM330DHCX IMU + MMC5983MA magnetometer breakout with I2C headers, jumpers, and LED. */
import { ISM330DHCX } from "../imports/ISM330DHCX"
import { sel } from "tscircuit"
import { MMC5983MA_QFN16 } from "../imports/MMC5983MA_QFN16"

export const D1_FOOTPRINT = (
  <footprint>
    {/* Cathode pad (C) */}
    <smtpad
      pcbX="0.877mm"
      pcbY="0mm"
      width="1mm"
      height="1mm"
      shape="pill"
      radius="0.15mm"
      layer="top"
      portHints={["C", "K", "cathode"]}
    />

    {/* Anode pad (A) */}
    <smtpad
      pcbX="-0.877mm"
      pcbY="0mm"
      width="1mm"
      height="1mm"
      shape="pill"
      radius="0.15mm"
      layer="top"
      portHints={["A", "anode"]}
    />
  </footprint>
)

export const J_FOOTPRINT = (
  <footprint>
    {/* --- Mechanical support pads (NC1/NC2) --- */}
    <smtpad
      pcbX="-2.8mm"
      pcbY="-3.675mm"
      width="1.2mm"
      height="2mm"
      layer="top"
      shape="rect"
      portHints={["NC2"]}
    />
    <smtpad
      pcbX="2.8mm"
      pcbY="-3.675mm"
      width="1.2mm"
      height="2mm"
      layer="top"
      shape="rect"
      portHints={["NC1"]}
    />

    {/* --- Signal pins, 1 mm pitch --- */}
    <smtpad
      pcbX="-1.5mm"
      pcbY="0mm"
      width="0.6mm"
      height="1.35mm"
      layer="top"
      shape="rect"
      portHints={["1"]}
    />
    <smtpad
      pcbX="-0.5mm"
      pcbY="0mm"
      width="0.6mm"
      height="1.35mm"
      shape="rect"
      layer="top"
      portHints={["2"]}
    />
    <smtpad
      pcbX="0.5mm"
      pcbY="0mm"
      width="0.6mm"
      height="1.35mm"
      layer="top"
      shape="rect"
      portHints={["3"]}
    />
    <smtpad
      pcbX="1.5mm"
      pcbY="0mm"
      shape="rect"
      width="0.6mm"
      height="1.35mm"
      layer="top"
      portHints={["4"]}
    />
  </footprint>
)

export default () => (
  <board width="25.4mm" height="25.4mm">
    <schematictext
      text="Accelerometer - ISM330DHCX"
      fontSize={0.4}
      color="brown"
      schY={4}
    />
    <group>
      <subcircuit name="ISM330DHCX">
        <group pcbFlex pcbFlexDirection="column" pcbFlexGap={0.3} pcbY={-0.3}>
          <ISM330DHCX
            name="U1"
            pcbRotation={180}
            schPinArrangement={{
              leftSide: {
                direction: "top-to-bottom",
                pins: [1, 2, 3, 4],
              },
              rightSide: {
                direction: "bottom-to-top",
                pins: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
              },
            }}
            schWidth={1.8}
            schPinStyle={{
              pin1: {
                bottomMargin: "0.2",
              },
              pin2: {
                bottomMargin: "1",
              },
            }}
            connections={{
              pin1: sel.C3.pin2,
              pin2: sel.C4.pin2,
              pin3: sel.net.GND,
              pin4: sel.net.GND,
              pin5: sel.net().ISM_INT2,
              pin6: sel.net().ISM_INT1,
              pin9: sel.net().SCX,
              pin10: sel.net().SDX,
              pin11: sel.net().POCI_SAO,
              pin12: sel.net().SCL_SCK,
              pin13: sel.net().SDA_PICO,
              pin14: sel.net().ISM_CS_N,
            }}
          />

          <capacitor
            name="C4"
            capacitance="0.1uf"
            footprint="0603"
            schRotation={90}
            pcbRotation={180}
            connections={{
              pin1: sel.net.GND,
              pin2: sel.net.V3_3,
            }}
          />
        </group>

        <group
          pcbFlex
          pcbFlexDirection="row"
          pcbFlexGap={0.2}
          pcbX={-4}
          pcbY={-1}
        >
          <resistor
            footprint="0603"
            name="R3"
            pcbRotation={90}
            resistance="100k"
            schRotation={90}
            connections={{
              pin1: sel.U1.pin14,
              pin2: sel.net.V3_3,
            }}
          />
          <capacitor
            name="C3"
            capacitance="0.1uf"
            footprint="0603"
            schRotation={90}
            pcbRotation={270}
            connections={{
              pin1: sel.net.GND,
              pin2: sel.net.V3_3,
            }}
          />
        </group>
      </subcircuit>
    </group>

    <schematictext
      text="Accelerometer Address Selection and"
      fontSize={0.4}
      color="brown"
      schY={4}
      schX={8}
    />
    <schematictext
      text="Sensor Hub Jumpers"
      fontSize={0.4}
      color="brown"
      schY={3.5}
      schX={8}
    />
    <group pcbPack pcbPackGap="0.6mm" pcbX={4} pcbY={4}>
      <subcircuit name="ISM330DHCX_jumpers" schX={8}>
        <solderjumper
          name="SJ1"
          layer="bottom"
          pinCount={3}
          footprint="solderjumper3_bridged12_pw0.6604_ph1.27_p1.0414"
          bridgedPins={[["1", "2"]]}
          schRotation={-90}
          connections={{
            pin2: sel.net().POCI_SAO,
          }}
        />
        <resistor
          footprint="0603"
          name="R5"
          resistance="100k"
          schRotation={90}
          connections={{
            pin2: sel.net.V3_3,
            pin1: ".SJ1 > .pin1",
          }}
        />
        <resistor
          footprint="0603"
          name="R6"
          pcbRotation={180}
          resistance="100k"
          schRotation={90}
          connections={{
            pin2: ".SJ1 > .pin3",
            pin1: sel.net.GND,
          }}
        />
        <subcircuit>
          <solderjumper
            name="SDX_JMP"
            layer="bottom"
            pinCount={2}
            footprint="solderjumper2_bridged12_pw0.6604_ph1.27_p1.0414"
            bridgedPins={[["1", "2"]]}
            schRotation={-90}
            connections={{
              pin1: sel.net().SDX,
              pin2: sel.net().GND,
            }}
          />

          <solderjumper
            name="SCX_JMP"
            layer="bottom"
            pinCount={2}
            footprint="solderjumper2_bridged12_pw0.6604_ph1.27_p1.0414"
            bridgedPins={[["1", "2"]]}
            schRotation={-90}
            connections={{
              pin1: sel.net().SCX,
              pin2: sel.net().GND,
            }}
          />
        </subcircuit>
      </subcircuit>
    </group>
    <schematictext
      text="Magnetometer - MMC5983MA"
      fontSize={0.4}
      color="brown"
      schY={4}
      schX={17}
    />
    <group>
      <subcircuit name="MMC5983MA_section" schX={17}>
        <group pcbFlex pcbFlexDirection="column" pcbGap={0.3} pcbY={6}>
          <MMC5983MA_QFN16
            name="U2"
            schPinArrangement={{
              leftSide: {
                direction: "top-to-bottom",
                pins: [13, 2, 10, 3, 6, 9, 2],
              },
              rightSide: {
                direction: "bottom-to-top",
                pins: [15, 4, 5, 1, 16],
              },
            }}
            schWidth={1.6}
            schPinStyle={{
              pin15: {
                bottomMargin: "0.4",
              },
            }}
            connections={{
              pin2: sel.C1.pin2,
              pin13: sel.C1.pin2,
              pin15: sel.net().MAG_INT,
              pin4: sel.net().MAG_CS_N,
              pin5: sel.net().POCI_SAO,
              pin1: sel.net().SCL_SCK,
              pin16: sel.net().SDA_PICO,
              pin9: sel.net().GND,
            }}
          />
          <resistor
            footprint="0603"
            name="R7"
            pcbRotation={270}
            schRotation={90}
            resistance="100k"
            connections={{
              pin1: sel.U2.pin4,
              pin2: sel.net.V3_3,
            }}
          />
        </group>

        <group pcbFlex pcbFlexDirection="row" pcbY={1.7} pcbFlexGap={0.3}>
          <capacitor
            name="C2"
            capacitance="10uf"
            footprint="0603"
            schRotation={90}
            pcbRotation={180}
            connections={{
              pin1: sel.net.GND,
              pin2: sel.U2.pin10,
            }}
          />
          <capacitor
            name="C1"
            capacitance="10uf"
            footprint="0603"
            pcbRotation={270}
            schRotation={90}
            connections={{
              pin1: sel.net.GND,
              pin2: sel.net.V3_3,
            }}
          />
        </group>
      </subcircuit>
    </group>

    <schematictext text="Connectors" fontSize={0.4} color="brown" schY={-6} />
    <group schY={-8}>
      <subcircuit>
        <group pcbFlex pcbFlexDirection="column" pcbFlexGap={21}>
          <pinheader
            name="JP1"
            pcbRotation={180}
            gender="female"
            footprint="pinrow6_p2.54_id1.016_od1.8796_doublesidedpinlabel_pinlabelorthogonal_pinlabeltextalignright_pinlabelverticallyinverted_nosquareplating"
            pinCount={6}
            schPinArrangement={{
              rightSide: {
                direction: "top-to-bottom",
                pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
              },
            }}
            connections={{
              pin1: sel.net().POCI_SAO,
              pin2: sel.net().ISM_CS,
              pin3: sel.net().SCL_SCK,
              pin4: sel.net().SDA_PICO,
              pin5: sel.net.V3_3,
              pin6: sel.net.GND,
            }}
          />
          <pinheader
            name="JP3"
            gender="female"
            footprint="pinrow6_p2.54_id1.016_od1.8796_doublesidedpinlabel_pinlabelorthogonal_pinlabeltextalignright_pinlabelverticallyinverted_nosquareplating"
            pinCount={6}
            schPinArrangement={{
              rightSide: {
                direction: "top-to-bottom",
                pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
              },
            }}
            connections={{
              pin1: sel.net().ISM_INT1,
              pin2: sel.net().ISM_INT2,
              pin3: sel.net().MAG_INT,
              pin4: sel.net().MAG_CS,
              pin5: sel.net().SDX,
              pin6: sel.net().SCX,
            }}
          />
        </group>
        <group pcbFlex pcbFlexGap={14} pcbAlignItems="center" pcbY={0}>
          <pinheader
            name="J2"
            gender="female"
            pinLabels={["GND", "VCC", "SDA", "SCL"]}
            pcbRotation={270}
            footprint={J_FOOTPRINT}
            pinCount={4}
            schWidth={0.6}
            schPinArrangement={{
              rightSide: {
                direction: "bottom-to-top",
                pins: ["pin1", "pin2", "pin3", "pin4"],
              },
            }}
            connections={{
              pin1: sel.J1.pin1,
              pin2: sel.J1.pin2,
              pin3: sel.net().SDA_PICO,
              pin4: sel.net().SCL_SCK,
            }}
          />
          <pinheader
            name="J1"
            gender="female"
            pcbRotation={90}
            schWidth={0.6}
            pinLabels={["GND", "VCC", "SDA", "SCL"]}
            facingDirection="right"
            footprint={J_FOOTPRINT}
            pinCount={4}
            schPinArrangement={{
              rightSide: {
                direction: "bottom-to-top",
                pins: ["pin1", "pin2", "pin3", "pin4"],
              },
            }}
            connections={{
              pin1: sel.net.GND,
              pin2: sel.net.V3_3,
              pin3: sel.net().SDA_PICO,
              pin4: sel.net().SCL_SCK,
            }}
          />
        </group>
      </subcircuit>
    </group>

    <schematictext
      text="I2C and LED Jumpers"
      fontSize={0.4}
      color="brown"
      schY={-6}
      schX={9}
    />
    <group schY={-10} schX={9}>
      <subcircuit>
        <led
          name="D1"
          schRotation={-90}
          pcbRotation={90}
          footprint={D1_FOOTPRINT}
        />

        <resistor
          footprint="0603"
          name="R4"
          pcbRotation={90}
          resistance="1k"
          schRotation={90}
          connections={{
            pin1: sel.D1.pin1,
            pin2: sel.net.V3_3,
          }}
        />

        <solderjumper
          name="LED"
          pinCount={2}
          layer="bottom"
          footprint="solderjumper2_bridged12_pw0.6604_ph1.27_p1.0414"
          bridgedPins={[["1", "2"]]}
          schRotation={90}
          connections={{
            pin1: sel.net.GND,
            pin2: sel.D1.pin2,
          }}
        />

        <solderjumper
          name="I2C_PU"
          layer="bottom"
          pinCount={3}
          footprint="solderjumper3_bridged123_pw0.6604_ph1.27_p1.0414"
          bridgedPins={[
            ["1", "2"],
            ["2", "3"],
          ]}
          schRotation={180}
          connections={{
            pin2: sel.net.V3_3,
          }}
        />
        <group pcbFlex pcbFlexDirection="column" pcbY={-5} pcbX={0}>
          <resistor
            footprint="0603"
            name="R1"
            resistance="2.2k"
            schRotation={90}
            connections={{
              pin1: sel.net().SCL_SCK,
              pin2: ".I2C_PU > .pin3",
            }}
          />
          <resistor
            footprint="0603"
            name="R2"
            pcbRotation={180}
            resistance="2.2k"
            schRotation={90}
            connections={{
              pin1: sel.net().SDA_PICO,
              pin2: ".I2C_PU > .pin1",
            }}
          />
        </group>
      </subcircuit>
    </group>
    <hole diameter="3.32mm" pcbX={-10.16} pcbY={10.16} />
    <hole diameter="3.32mm" pcbX={-10.16} pcbY={-10.16} />
    <hole diameter="3.32mm" pcbX={10.16} pcbY={-10.16} />
    <hole diameter="3.32mm" pcbX={10.16} pcbY={10.16} />
  </board>
)
