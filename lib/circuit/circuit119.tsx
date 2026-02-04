/** Randomly generated circuit 119. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="11.00mm"
    height="11.00mm"
  >
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-2.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-0.5}
      pcbY={-0.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-1.5}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
  </board>
)
