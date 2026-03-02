/** Randomly generated circuit 123. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="56.70mm"
    height="101.25mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-5.625}
      pcbY={-41.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-5.625}
      pcbY={-3.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-11.25}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-16.875}
      pcbY={-30.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-18.75}
      pcbY={-5.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-1.875}
      pcbY={35.625}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0805"
      pcbX={-13.125}
      pcbY={24.375}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={-20.625}
      pcbY={31.875}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N16",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-7"
      footprint="0402"
      pcbX={-13.125}
      pcbY={22.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-8"
      footprint="0402"
      pcbX={13.125}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-1.875}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={20.625}
      pcbY={33.75}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={5.625}
      pcbY={-22.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={5.625}
      pcbY={-41.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={20.625}
      pcbY={18.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N12",
        pin3: "net.N20",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={16.875}
      pcbY={-22.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
        pin3: "net.N15",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={16.875}
      pcbY={-18.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N5",
        pin1: "net.N11",
        pin4: "net.N12",
        pin8: "net.N13",
        pin3: "net.N14",
        pin5: "net.N14",
        pin2: "net.N17",
        pin6: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-3.75}
      pcbY={13.125}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin7: "net.N5",
        pin8: "net.N9",
        pin6: "net.N10",
        pin1: "net.N10",
        pin5: "net.N18",
        pin4: "net.N21",
        pin2: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-9.375}
      pcbY={-33.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-13.125}
      pcbY={-18.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin6: "net.N7",
        pin5: "net.N12",
        pin4: "net.N13",
        pin3: "net.N22",
        pin1: "net.N22",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
