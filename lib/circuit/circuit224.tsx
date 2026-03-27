/** Randomly generated circuit 224. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="32.00mm"
    height="19.00mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-2.0}
      pcbY={-6.5}
      pcbRotation={180.0}
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
      pcbX={9.0}
      pcbY={1.5}
      pcbRotation={180.0}
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
      pcbX={1.0}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-2.5}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-13.0}
      pcbY={5.5}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={9.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={7.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={9.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-11.0}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={-6.5}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N2",
        pin2: "net.N7",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-1.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
        pin3: "net.N10",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-7.0}
      pcbY={5.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin4: "net.N4",
        pin1: "net.N8",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={13.0}
      pcbY={-6.5}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin2: "net.N4",
        pin3: "net.N5",
        pin4: "net.N6",
        pin1: "net.N9",
        pin6: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
