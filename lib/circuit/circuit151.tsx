/** Randomly generated circuit 151. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="66.00mm"
    height="36.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-15.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={8.0}
      pcbY={9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N32",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={30.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={-3.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N31",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-2.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N33",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-30.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N34",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-28.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N27",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-9.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={5.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N30",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={17.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N33",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={-25.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N28",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod323"
      pcbX={-26.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N19",
        pin2: "net.N33",
      }}
    />
    <diode
      name="diode-7"
      footprint="sod323"
      pcbX={24.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
    />
    <diode
      name="diode-8"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N20",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-16.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N6",
        pin1: "net.N15",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={16.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin1: "net.N25",
        pin2: "net.N28",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-8.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N24",
        pin2: "net.N26",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-25.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N7",
        pin5: "net.N10",
        pin2: "net.N13",
        pin4: "net.N15",
        pin3: "net.N19",
        pin1: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-18.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin4: "net.N11",
        pin2: "net.N15",
        pin6: "net.N21",
        pin8: "net.N22",
        pin3: "net.N29",
        pin5: "net.N30",
        pin7: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={25.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N6",
        pin4: "net.N7",
        pin1: "net.N11",
        pin2: "net.N19",
        pin5: "net.N23",
        pin3: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow8"
      pcbX={18.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N15",
        pin3: "net.N18",
        pin7: "net.N19",
        pin1: "net.N24",
        pin4: "net.N28",
        pin2: "net.N30",
        pin6: "net.N31",
        pin5: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="dip8"
      pcbX={6.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin6: "net.N6",
        pin3: "net.N13",
        pin4: "net.N21",
        pin5: "net.N23",
        pin8: "net.N26",
        pin7: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-6"
      footprint="soic8"
      pcbX={-10.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N1",
        pin6: "net.N5",
        pin4: "net.N9",
        pin2: "net.N14",
        pin5: "net.N16",
        pin1: "net.N21",
        pin8: "net.N27",
        pin3: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={16.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin4: "net.N13",
        pin2: "net.N18",
        pin3: "net.N23",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-16.0}
      pcbY={-12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N12",
        pin3: "net.N14",
        pin2: "net.N16",
        pin1: "net.N33",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-8.0}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N34",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-28.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N17",
        pin3: "net.N25",
        pin4: "net.N28",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={24.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N14",
        pin4: "net.N21",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinrow2"
      pcbX={30.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N20",
        pin2: "net.N23",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
