/** Randomly generated circuit 265. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="13.00mm"
    height="20.00mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.5}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-1.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-3.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
        pin3: "net.N6",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-1.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-3.5}
      pcbY={5.0}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin5: "net.N2",
        pin2: "net.N2",
        pin6: "net.N2",
        pin3: "net.N3",
        pin4: "net.N3",
        pin7: "net.N4",
        pin1: "net.N5",
        pin8: "net.N5",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
