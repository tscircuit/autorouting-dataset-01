/** Randomly generated circuit 129. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="20.00mm"
    height="13.00mm"
  >
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={-1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-7.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-6.0}
      pcbY={-2.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={5.0}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N3",
        pin2: "net.N4",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-1.0}
      pcbY={-3.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin4: "net.N2",
        pin2: "net.N3",
        pin3: "net.N4",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
