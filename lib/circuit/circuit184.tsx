/** Randomly generated circuit 184. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="62.00mm"
    height="34.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-2.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-10.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={21.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-1.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N27",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={25.0}
      pcbY={-5.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-2.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N17",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-25.0}
      pcbY={10.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-6.0}
      pcbY={8.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-24.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={26.0}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-12.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-6.0}
      pcbY={-6.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={20.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0805"
      pcbX={-8.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-18.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N21",
        pin1: "net.N28",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-14.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N20",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={0.0}
      pcbY={11.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={13.0}
      pcbY={2.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={10.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={5.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N18",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={2.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
        pin3: "net.N14",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-16.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N17",
        pin3: "net.N21",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={22.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N25",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={8.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin8: "net.N7",
        pin4: "net.N9",
        pin6: "net.N10",
        pin1: "net.N11",
        pin7: "net.N13",
        pin2: "net.N19",
        pin5: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={16.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin11: "net.N1",
        pin14: "net.N2",
        pin13: "net.N4",
        pin16: "net.N6",
        pin8: "net.N7",
        pin4: "net.N8",
        pin5: "net.N14",
        pin12: "net.N15",
        pin1: "net.N15",
        pin9: "net.N20",
        pin10: "net.N20",
        pin2: "net.N22",
        pin6: "net.N23",
        pin15: "net.N24",
        pin3: "net.N26",
        pin7: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N20",
        pin2: "net.N25",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={24.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin6: "net.N17",
        pin4: "net.N23",
        pin2: "net.N24",
        pin3: "net.N25",
        pin5: "net.N28",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-28.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin2: "net.N18",
        pin3: "net.N21",
        pin1: "net.N25",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
