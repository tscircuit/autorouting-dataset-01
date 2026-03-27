/** Randomly generated circuit 215. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="36.00mm"
    height="66.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-25.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={14.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N24",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={12.0}
      pcbY={-6.0}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={-7.0}
      pcbY={20.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N28",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0603"
      pcbX={3.0}
      pcbY={9.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-7.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N30",
        pin1: "net.N35",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={19.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={9.0}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={6.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N34",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={1.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={8.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N16",
        pin2: "net.N32",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={1.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N21",
        pin1: "net.N30",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={8.0}
      pcbY={16.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N24",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={13.0}
      pcbY={-12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N30",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={6.0}
      pcbY={-16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N30",
        pin1: "net.N34",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={-18.0}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
        pin3: "net.N24",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N22",
        pin3: "net.N28",
        pin2: "net.N32",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N29",
        pin3: "net.N34",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-11.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N2",
        pin4: "net.N4",
        pin6: "net.N8",
        pin8: "net.N15",
        pin3: "net.N16",
        pin1: "net.N18",
        pin2: "net.N21",
        pin7: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={13.0}
      pcbY={18.0}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin6: "net.N2",
        pin4: "net.N25",
        pin3: "net.N26",
        pin5: "net.N31",
        pin2: "net.N31",
        pin1: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={-15.0}
      pcbY={-30.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N2",
        pin6: "net.N4",
        pin5: "net.N9",
        pin2: "net.N15",
        pin8: "net.N19",
        pin4: "net.N20",
        pin3: "net.N27",
        pin1: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={-15.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin5: "net.N11",
        pin8: "net.N12",
        pin1: "net.N13",
        pin3: "net.N23",
        pin7: "net.N24",
        pin6: "net.N26",
        pin4: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="pinrow8"
      pcbX={-15.0}
      pcbY={18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin6: "net.N3",
        pin4: "net.N8",
        pin1: "net.N13",
        pin5: "net.N17",
        pin2: "net.N20",
        pin7: "net.N26",
        pin3: "net.N26",
        pin8: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-9.0}
      pcbY={-26.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N33",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={13.0}
      pcbY={14.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N12",
        pin2: "net.N16",
        pin1: "net.N22",
        pin4: "net.N33",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={13.0}
      pcbY={30.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N7",
        pin5: "net.N14",
        pin2: "net.N17",
        pin6: "net.N22",
        pin3: "net.N25",
        pin1: "net.N29",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={13.0}
      pcbY={-30.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={15.0}
      pcbY={-30.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N19",
        pin2: "net.N20",
        pin3: "net.N27",
        pin1: "net.N35",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
