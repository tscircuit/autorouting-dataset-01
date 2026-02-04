/** Randomly generated circuit 130. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="10.00mm"
    height="14.00mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={1.0}
      pcbY={-2.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-2.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
    />
  </board>
)
