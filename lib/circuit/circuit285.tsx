/** Randomly generated circuit 285. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="58.00mm"
    height="32.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={10.0}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={25.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N24",
        pin1: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={20.0}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-20.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N32",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={22.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={24.0}
      pcbY={-5.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N25",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={-24.0}
      pcbY={-9.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={21.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={25.0}
      pcbY={-1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N16",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-21.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={14.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N22",
        pin2: "net.N23",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N11",
        pin1: "net.N28",
        pin2: "net.N28",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-20.0}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N25",
        pin3: "net.N29",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-2.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N21",
        pin3: "net.N30",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-26.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N11",
        pin2: "net.N24",
        pin1: "net.N27",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-10.0}
      pcbY={7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin11: "net.N4",
        pin12: "net.N6",
        pin13: "net.N7",
        pin10: "net.N7",
        pin5: "net.N8",
        pin8: "net.N10",
        pin9: "net.N13",
        pin15: "net.N17",
        pin16: "net.N17",
        pin7: "net.N18",
        pin2: "net.N20",
        pin4: "net.N20",
        pin1: "net.N21",
        pin3: "net.N29",
        pin14: "net.N29",
        pin6: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={-14.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N7",
        pin8: "net.N10",
        pin3: "net.N22",
        pin5: "net.N22",
        pin1: "net.N23",
        pin2: "net.N28",
        pin6: "net.N30",
        pin7: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={26.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin10: "net.N1",
        pin2: "net.N2",
        pin5: "net.N2",
        pin8: "net.N8",
        pin15: "net.N10",
        pin12: "net.N11",
        pin1: "net.N12",
        pin9: "net.N13",
        pin14: "net.N14",
        pin11: "net.N19",
        pin7: "net.N22",
        pin6: "net.N26",
        pin16: "net.N26",
        pin3: "net.N30",
        pin13: "net.N31",
        pin4: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={6.0}
      pcbY={-11.0}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N12",
        pin1: "net.N23",
        pin4: "net.N27",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
