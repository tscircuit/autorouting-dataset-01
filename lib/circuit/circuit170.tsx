/** Randomly generated circuit 170. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="29.00mm"
    height="52.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-0.5}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-11.5}
      pcbY={18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-11.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-2.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={3.5}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-9.5}
      pcbY={0.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-6.5}
      pcbY={18.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={6.5}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={8.5}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={3.5}
      pcbY={18.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-3.5}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N21",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-5.5}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-11.5}
      pcbY={23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin3: "net.N16",
        pin1: "net.N20",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={0.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
        pin3: "net.N21",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-9.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N16",
        pin3: "net.N24",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={8.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin3: "net.N2",
        pin1: "net.N2",
        pin7: "net.N4",
        pin2: "net.N7",
        pin8: "net.N10",
        pin4: "net.N13",
        pin6: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={8.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin12: "net.N1",
        pin13: "net.N2",
        pin5: "net.N3",
        pin3: "net.N3",
        pin7: "net.N5",
        pin1: "net.N5",
        pin10: "net.N6",
        pin6: "net.N9",
        pin15: "net.N9",
        pin11: "net.N10",
        pin8: "net.N12",
        pin2: "net.N18",
        pin9: "net.N20",
        pin14: "net.N20",
        pin16: "net.N22",
        pin4: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={8.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin6: "net.N15",
        pin1: "net.N15",
        pin3: "net.N18",
        pin7: "net.N23",
        pin5: "net.N23",
        pin8: "net.N25",
        pin4: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={2.5}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N6",
        pin3: "net.N7",
        pin1: "net.N17",
        pin5: "net.N21",
        pin2: "net.N25",
        pin6: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-1.5}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin5: "net.N6",
        pin2: "net.N17",
        pin4: "net.N23",
        pin3: "net.N24",
        pin6: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-3.5}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-3.5}
      pcbY={-11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
