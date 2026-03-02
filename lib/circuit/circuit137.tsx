/** Randomly generated circuit 137. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="68.85mm"
    height="68.85mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={-3.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={11.25}
      pcbY={-5.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={18.75}
      pcbY={22.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={26.25}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0402"
      pcbX={28.125}
      pcbY={9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={15.0}
      pcbY={16.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={9.375}
      pcbY={-20.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={7.5}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-3.75}
      pcbY={-20.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-26.25}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-18.75}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={30.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-22.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-24.375}
      pcbY={-26.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-3.75}
      pcbY={26.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N20",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-18.75}
      pcbY={26.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N13",
        pin1: "net.N14",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-18.75}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N22",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-26.25}
      pcbY={22.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin3: "net.N17",
        pin2: "net.N19",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={7.5}
      pcbY={26.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N9",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-26.25}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin3: "net.N7",
        pin2: "net.N12",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-7.5}
      pcbY={11.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin1: "net.N7",
        pin3: "net.N16",
        pin2: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={18.75}
      pcbY={3.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin4: "net.N13",
        pin3: "net.N15",
        pin2: "net.N21",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={15.0}
      pcbY={11.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin3: "net.N10",
        pin4: "net.N15",
        pin2: "net.N18",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={16.875}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N14",
        pin4: "net.N17",
        pin5: "net.N19",
        pin3: "net.N21",
        pin1: "net.N22",
        pin6: "net.N22",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
