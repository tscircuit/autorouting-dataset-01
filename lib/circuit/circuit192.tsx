/** Randomly generated circuit 192. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="22.00mm"
    height="22.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={6.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={6.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
        pin3: "net.N7",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
        pin3: "net.N7",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-4.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
        pin3: "net.N7",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-6.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-8.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N1",
        pin3: "net.N2",
        pin1: "net.N2",
        pin5: "net.N3",
        pin8: "net.N4",
        pin4: "net.N4",
        pin2: "net.N4",
        pin6: "net.N6",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
