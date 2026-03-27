/** Randomly generated circuit 227. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="14.00mm"
    height="14.00mm"
  >
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={4.0}
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
      pcbX={3.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.0}
      pcbY={-2.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N4",
      }}
      type="bjt"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={4.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin4: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
