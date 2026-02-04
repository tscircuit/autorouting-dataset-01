/** Randomly generated circuit 127. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
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
        pin1: "net.N2",
        pin2: "net.N3",
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
        pin1: "net.N1",
        pin2: "net.N1",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.0}
      pcbY={-2.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
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
        pin1: "net.N1",
        pin3: "net.N3",
        pin2: "net.N3",
      }}
      type="bjt"
    />
  </board>
)
