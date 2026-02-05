/** Randomly generated circuit 164. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="33.00mm"
    height="60.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={8.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={5.5}
      pcbY={-27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N20",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={12.5}
      pcbY={-25.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={6.5}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-13.5}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-5.5}
      pcbY={-19.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N23",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-1.5}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N16",
        pin2: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-9.5}
      pcbY={13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-13.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={2.5}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={-1.5}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N24",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-7"
      footprint="0402"
      pcbX={-1.5}
      pcbY={21.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-8"
      footprint="0402"
      pcbX={10.5}
      pcbY={23.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-9"
      footprint="0402"
      pcbX={-9.5}
      pcbY={-11.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-3.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N18",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={11.5}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N25",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-9.5}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-2.5}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N20",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={4.5}
      pcbY={27.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin3: "net.N21",
        pin1: "net.N23",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={-1.5}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N10",
        pin5: "net.N13",
        pin8: "net.N14",
        pin1: "net.N17",
        pin2: "net.N21",
        pin3: "net.N21",
        pin4: "net.N23",
        pin7: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-5.5}
      pcbY={-25.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin8: "net.N2",
        pin3: "net.N3",
        pin7: "net.N7",
        pin4: "net.N12",
        pin6: "net.N12",
        pin5: "net.N22",
        pin2: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={5.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin2: "net.N8",
        pin7: "net.N10",
        pin8: "net.N14",
        pin1: "net.N16",
        pin4: "net.N19",
        pin6: "net.N19",
        pin5: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={2.5}
      pcbY={23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-9.5}
      pcbY={27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N9",
        pin4: "net.N11",
        pin2: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={6.5}
      pcbY={-21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin4: "net.N3",
        pin1: "net.N4",
        pin3: "net.N25",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow6"
      pcbX={-7.5}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin6: "net.N12",
        pin5: "net.N17",
        pin2: "net.N18",
        pin4: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
