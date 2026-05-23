/** Randomly generated circuit 152. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="60.00mm"
    height="33.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={17.0}
      pcbY={8.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-6.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N21",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-11.0}
      pcbY={-7.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N27",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={-6.0}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0603"
      pcbX={-27.0}
      pcbY={-10.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N25",
        pin2: "net.N30",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N31",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-19.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={15.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N20",
        pin2: "net.N27",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-7.0}
      pcbY={8.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={24.0}
      pcbY={10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-15.0}
      pcbY={-5.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-6.0}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N28",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={21.0}
      pcbY={13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N30",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={-23.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod323"
      pcbX={6.0}
      pcbY={12.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-7"
      footprint="sod323"
      pcbX={-11.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-27.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N10",
        pin2: "net.N23",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-13.0}
      pcbY={-13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
        pin3: "net.N16",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={7.0}
      pcbY={-3.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N18",
        pin3: "net.N23",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-25.0}
      pcbY={10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin14: "net.N2",
        pin16: "net.N5",
        pin13: "net.N7",
        pin8: "net.N7",
        pin9: "net.N11",
        pin4: "net.N12",
        pin11: "net.N14",
        pin5: "net.N15",
        pin12: "net.N16",
        pin15: "net.N16",
        pin3: "net.N22",
        pin7: "net.N24",
        pin2: "net.N24",
        pin1: "net.N25",
        pin6: "net.N27",
        pin10: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={23.0}
      pcbY={2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N2",
        pin4: "net.N3",
        pin1: "net.N8",
        pin6: "net.N9",
        pin2: "net.N12",
        pin8: "net.N17",
        pin7: "net.N22",
        pin3: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={22.0}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N3",
        pin5: "net.N4",
        pin4: "net.N4",
        pin2: "net.N19",
        pin6: "net.N22",
        pin8: "net.N26",
        pin1: "net.N29",
        pin3: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={9.0}
      pcbY={-13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin5: "net.N5",
        pin2: "net.N15",
        pin4: "net.N23",
        pin6: "net.N31",
        pin1: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-9.0}
      pcbY={12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin3: "net.N7",
        pin2: "net.N11",
        pin6: "net.N13",
        pin5: "net.N20",
        pin1: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-19.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N23",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={13.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
