/** Randomly generated circuit 189. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="52.00mm"
    height="29.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={14.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={17.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-8.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={1.0}
      pcbY={-6.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-23.0}
      pcbY={11.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-14.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-21.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={4.0}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={3.0}
      pcbY={-1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={19.0}
      pcbY={6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-11.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-21.0}
      pcbY={-10.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N11",
        pin2: "net.N16",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={10.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-20.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={-11.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
        pin3: "net.N21",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={23.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N10",
        pin1: "net.N15",
        pin2: "net.N20",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={21.0}
      pcbY={-11.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N9",
        pin2: "net.N14",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={8.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
        pin3: "net.N15",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-5.0}
      pcbY={4.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N11",
        pin3: "net.N16",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-15.0}
      pcbY={8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin7: "net.N8",
        pin1: "net.N10",
        pin5: "net.N12",
        pin2: "net.N12",
        pin8: "net.N16",
        pin4: "net.N20",
        pin6: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-3.0}
      pcbY={10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin5: "net.N6",
        pin3: "net.N9",
        pin2: "net.N12",
        pin6: "net.N13",
        pin4: "net.N18",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-11.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin1: "net.N4",
        pin3: "net.N11",
        pin2: "net.N19",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={11.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
        pin3: "net.N19",
        pin6: "net.N21",
        pin5: "net.N22",
        pin4: "net.N22",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
