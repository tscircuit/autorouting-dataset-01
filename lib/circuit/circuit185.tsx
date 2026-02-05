/** Randomly generated circuit 185. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
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
        pin1: "net.N3",
        pin2: "net.N18",
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
        pin1: "net.N8",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={10.0}
      pcbY={-13.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
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
        pin1: "net.N9",
        pin2: "net.N23",
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
        pin2: "net.N1",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={20.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-7.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N30",
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
        pin1: "net.N5",
        pin2: "net.N7",
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
        pin2: "net.N12",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={24.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={-24.0}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N14",
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
        pin2: "net.N15",
        pin1: "net.N17",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={25.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N20",
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
        pin1: "net.N9",
        pin2: "net.N25",
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
        pin2: "net.N10",
        pin3: "net.N22",
        pin1: "net.N26",
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
        pin3: "net.N4",
        pin1: "net.N19",
        pin2: "net.N26",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-12.0}
      pcbY={7.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin3: "net.N24",
        pin2: "net.N28",
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
        pin2: "net.N7",
        pin3: "net.N17",
        pin1: "net.N18",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-26.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin3: "net.N16",
        pin1: "net.N27",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-14.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin13: "net.N4",
        pin7: "net.N6",
        pin12: "net.N11",
        pin5: "net.N12",
        pin6: "net.N13",
        pin14: "net.N15",
        pin4: "net.N17",
        pin10: "net.N20",
        pin9: "net.N21",
        pin15: "net.N23",
        pin11: "net.N25",
        pin8: "net.N27",
        pin16: "net.N28",
        pin2: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={20.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin16: "net.N2",
        pin15: "net.N4",
        pin10: "net.N5",
        pin6: "net.N6",
        pin8: "net.N8",
        pin9: "net.N8",
        pin12: "net.N10",
        pin11: "net.N11",
        pin7: "net.N19",
        pin14: "net.N19",
        pin3: "net.N20",
        pin2: "net.N21",
        pin4: "net.N29",
        pin13: "net.N29",
        pin1: "net.N29",
        pin5: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-24.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
        pin3: "net.N21",
        pin4: "net.N24",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
