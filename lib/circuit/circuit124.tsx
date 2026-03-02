/** Randomly generated circuit 124. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="64.80mm"
    height="38.47mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-3.75}
      pcbY={-12.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={16.875}
      pcbY={2.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={1.875}
      pcbY={-0.938}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-13.125}
      pcbY={-8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-24.375}
      pcbY={10.313}
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
      pcbX={16.875}
      pcbY={-8.438}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={13.125}
      pcbY={-8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={16.875}
      pcbY={10.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-20.625}
      pcbY={2.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.375}
      pcbY={10.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
        pin3: "net.N9",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-24.375}
      pcbY={-12.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={24.375}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin5: "net.N2",
        pin3: "net.N3",
        pin1: "net.N6",
        pin4: "net.N8",
        pin2: "net.N9",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
