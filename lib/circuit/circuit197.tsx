/** Randomly generated circuit 197. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="36.00mm"
    height="21.00mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={5.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={12.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-10.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-5.0}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-13.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={3.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={1.0}
      pcbY={4.5}
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
      footprint="0402"
      pcbX={-11.0}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-8.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={11.0}
      pcbY={-3.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-14.0}
      pcbY={6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={13.0}
      pcbY={-5.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N7",
        pin3: "net.N10",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-1.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N6",
        pin1: "net.N9",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-3.0}
      pcbY={-7.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
