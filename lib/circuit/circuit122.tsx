/** Randomly generated circuit 122. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="32.00mm"
    height="32.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={11.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={2.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N16",
        pin1: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={10.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={11.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={5.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={2.0}
      pcbY={-3.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-7.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-8.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={-12.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={5.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-7"
      footprint="0603"
      pcbX={-2.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-7.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={13.0}
      pcbY={-11.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={7.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-9.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N20",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={6.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N17",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-4.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-13.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={5.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N21",
        pin3: "net.N22",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-13.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N8",
        pin2: "net.N11",
        pin1: "net.N19",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-3.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N10",
      }}
      type="pnp"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={-13.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin15: "net.N4",
        pin6: "net.N5",
        pin5: "net.N6",
        pin3: "net.N8",
        pin2: "net.N9",
        pin11: "net.N10",
        pin9: "net.N12",
        pin1: "net.N12",
        pin14: "net.N15",
        pin16: "net.N19",
        pin4: "net.N20",
        pin12: "net.N22",
        pin7: "net.N23",
        pin13: "net.N24",
        pin8: "net.N25",
        pin10: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-1.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-7.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N1",
        pin3: "net.N4",
        pin4: "net.N11",
        pin2: "net.N14",
        pin1: "net.N14",
        pin5: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
