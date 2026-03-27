/** Randomly generated circuit 269. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="20.00mm"
    height="20.00mm"
  >
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={7.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={3.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-5.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={7.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={6.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N9",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
        pin3: "net.N6",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-5.0}
      pcbY={5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin2: "net.N5",
        pin1: "net.N7",
        pin4: "net.N8",
        pin3: "net.N9",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
