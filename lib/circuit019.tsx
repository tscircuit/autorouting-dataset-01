/** QRE1113 reflectance sensor breakout with 3-pin header and bias resistors. */
import { sel } from "@tscircuit/core"

export const JP1_FOOTPRINT = (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-2.54mm"
      pcbY="5mm"
      width="1mm"
      height="3mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="0mm"
      pcbY="5mm"
      width="1mm"
      height="3mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin3"]}
      pcbX="2.54mm"
      pcbY="5mm"
      width="1mm"
      height="3mm"
      shape="rect"
    />
  </footprint>
)

export const U1_FOOTPRINT = (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-2.1082mm"
      pcbY="-0.889mm"
      width="1.2192mm"
      height="0.5334mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="2.1082mm"
      pcbY="-0.889mm"
      width="1.2192mm"
      height="0.5334mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin3"]}
      pcbX="2.1082mm"
      pcbY="0.889mm"
      width="1.2192mm"
      height="0.5334mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin4"]}
      pcbX="-2.1082mm"
      pcbY="0.889mm"
      width="1.2192mm"
      height="0.5334mm"
      shape="rect"
    />
  </footprint>
)

export default () => (
  <board width="7.62mm" height="13.97mm">
    <pinheader
      gender="female"
      footprint="pinrow3_p2.54_id1.016_od1.8796_nosquareplating_pinlabeltextalignright_pinlabelorthogonal"
      pinCount={3}
      name="JP1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3],
        },
      }}
      pcbY={-5.715}
      
      layer="bottom"
      schFacingDirection="left"
      pcbPinLabels={{pin1: "VCC", pin2: "OUT", pin3: "GND"}}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      connection="JP1.pin1"
      schX={-0.9}
      schY={0.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="JP1.pin3"
      schX={-0.9}
      schY={-0.5}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="0603"
      schRotation={90}
      schX={-2.7}
      schY={1}
      pcbX={-1.524}
      pcbY={-3.175}
      connections={{
        pin1: sel.JP1.pin2,
        pin2: sel.net.VCC,
      }}
      pcbRotation={180}
    />
    <resistor
      name="R1"
      resistance="100"
      footprint="0603"
      schRotation={90}
      schX={-3.7}
      schY={1}
      pcbX={1.524}
      pcbY={-3.175}
      pcbRotation={180}
      connections={{
        pin2: sel.net.VCC,
      }}
    />
    <chip
      name="U1"
      manufacturerPartNumber="QRE1113:1"
      footprint={U1_FOOTPRINT}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [1, 3],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [2, 4],
        },
      }}
      pcbY={-0.635}
      pcbRotation={180}
      schPinStyle={{
        pin1: {
          rightMargin: 0.4,
        },
        pin2: {
          rightMargin: 0.4,
        },
      }}
      schX={-3}
      schY={-1.3}
      connections={{
        pin1: sel.R1.pin1,
        pin2: sel.net.GND,
        pin3: sel.R2.pin1,
        pin4: sel.net.GND,
      }}
    />
    <schematictext
      text="OUT"
      color="gray"
      fontSize={0.2}
      schX={-2}
      schY={0.2}
    />
    <hole diameter="3.32mm" pcbY={4.445} />
  </board>
)
