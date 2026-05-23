/** Randomly generated circuit 120. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="62.00mm"
    height="62.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-24.0}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-28.0}
      pcbY={-7.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-11.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N24",
        pin1: "net.N27",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={1.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N29",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-8.0}
      pcbY={-24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-1.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-12.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-12.0}
      pcbY={26.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N22",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={26.0}
      pcbY={22.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N29",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N25",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-22.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N20",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-14.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-23.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N31",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={20.0}
      pcbY={27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod323"
      pcbX={22.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-7"
      footprint="sod123"
      pcbX={23.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N24",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={-26.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N14",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.0}
      pcbY={-16.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
        pin3: "net.N15",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={16.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin1: "net.N22",
        pin2: "net.N28",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-24.0}
      pcbY={-24.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin15: "net.N2",
        pin6: "net.N3",
        pin12: "net.N3",
        pin16: "net.N8",
        pin11: "net.N9",
        pin4: "net.N14",
        pin1: "net.N16",
        pin5: "net.N16",
        pin10: "net.N17",
        pin9: "net.N17",
        pin13: "net.N23",
        pin3: "net.N27",
        pin7: "net.N27",
        pin8: "net.N28",
        pin2: "net.N28",
        pin14: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={0.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin4: "net.N11",
        pin5: "net.N13",
        pin3: "net.N17",
        pin2: "net.N18",
        pin6: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={4.0}
      pcbY={28.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin5: "net.N5",
        pin1: "net.N13",
        pin2: "net.N21",
        pin6: "net.N31",
        pin4: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="dip8"
      pcbX={-16.0}
      pcbY={-16.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin4: "net.N13",
        pin5: "net.N14",
        pin8: "net.N15",
        pin7: "net.N19",
        pin2: "net.N21",
        pin1: "net.N27",
        pin3: "net.N29",
        pin6: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic8"
      pcbX={-28.0}
      pcbY={24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N10",
        pin2: "net.N11",
        pin3: "net.N13",
        pin1: "net.N17",
        pin5: "net.N19",
        pin6: "net.N20",
        pin8: "net.N29",
        pin4: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={8.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N7",
        pin6: "net.N12",
        pin1: "net.N21",
        pin4: "net.N23",
        pin3: "net.N26",
        pin2: "net.N31",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={10.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
        pin3: "net.N18",
        pin4: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={14.0}
      pcbY={25.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N7",
        pin1: "net.N23",
        pin4: "net.N26",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-6.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
