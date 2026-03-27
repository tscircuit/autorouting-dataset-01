/** Randomly generated circuit 246. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="58.00mm"
    height="32.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={1.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={3.0}
      pcbY={0.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={24.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={22.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-14.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={17.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-24.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={12.0}
      pcbY={-4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={24.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={12.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={8.0}
      pcbY={3.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-6.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-10.0}
      pcbY={-12.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={16.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N19",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={6.0}
      pcbY={7.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N15",
        pin2: "net.N17",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-24.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin3: "net.N17",
        pin1: "net.N19",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-24.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N15",
        pin1: "net.N21",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-18.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N7",
        pin1: "net.N11",
        pin5: "net.N17",
        pin6: "net.N17",
        pin4: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-18.0}
      pcbY={11.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin7: "net.N2",
        pin4: "net.N2",
        pin2: "net.N8",
        pin3: "net.N8",
        pin1: "net.N13",
        pin5: "net.N16",
        pin8: "net.N23",
        pin6: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-6.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin1: "net.N7",
        pin2: "net.N19",
        pin3: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N21",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin6: "net.N4",
        pin5: "net.N6",
        pin2: "net.N12",
        pin3: "net.N12",
        pin1: "net.N18",
        pin4: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-26.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N9",
        pin4: "net.N9",
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
