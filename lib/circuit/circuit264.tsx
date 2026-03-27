/** Randomly generated circuit 264. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
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
        pin1: "net.N8",
        pin2: "net.N23",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={10.5}
      pcbY={-27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={12.5}
      pcbY={-25.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={6.5}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
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
        pin2: "net.N11",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-5.5}
      pcbY={-19.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N27",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-1.5}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N24",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-9.5}
      pcbY={13.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N23",
        pin1: "net.N27",
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
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={2.5}
      pcbY={-13.0}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N20",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={-1.5}
      pcbY={17.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-7"
      footprint="0402"
      pcbX={-1.5}
      pcbY={21.0}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N18",
        pin2: "net.N25",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-8"
      footprint="0402"
      pcbX={10.5}
      pcbY={23.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-9"
      footprint="0402"
      pcbX={-9.5}
      pcbY={-11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N15",
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
        pin1: "net.N24",
        pin2: "net.N25",
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
        pin2: "net.N10",
        pin1: "net.N12",
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
        pin1: "net.N19",
        pin2: "net.N26",
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
        pin1: "net.N3",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={4.5}
      pcbY={27.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N15",
        pin2: "net.N16",
        pin1: "net.N20",
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
        pin2: "net.N1",
        pin8: "net.N2",
        pin3: "net.N7",
        pin5: "net.N17",
        pin6: "net.N21",
        pin4: "net.N22",
        pin7: "net.N24",
        pin1: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-5.5}
      pcbY={-27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N2",
        pin1: "net.N4",
        pin7: "net.N6",
        pin4: "net.N13",
        pin3: "net.N14",
        pin2: "net.N25",
        pin5: "net.N26",
        pin6: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={10.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin6: "net.N8",
        pin8: "net.N8",
        pin3: "net.N12",
        pin4: "net.N13",
        pin1: "net.N15",
        pin7: "net.N17",
        pin2: "net.N24",
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
        pin3: "net.N18",
        pin2: "net.N20",
        pin4: "net.N20",
        pin1: "net.N27",
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
        pin2: "net.N4",
        pin3: "net.N7",
        pin1: "net.N10",
        pin4: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={2.5}
      pcbY={-27.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N14",
        pin4: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={0.5}
      pcbY={-3.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin6: "net.N3",
        pin4: "net.N13",
        pin2: "net.N16",
        pin3: "net.N16",
        pin1: "net.N21",
        pin5: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow6"
      pcbX={8.5}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
        pin4: "net.N6",
        pin3: "net.N6",
        pin5: "net.N10",
        pin6: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
