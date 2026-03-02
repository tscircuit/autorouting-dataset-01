/** Randomly generated circuit 101. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="45.90mm"
    height="29.70mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-1.25}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={15.0}
      pcbY={-3.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={8.75}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-12.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N4",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-2.5}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N3",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-2.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N4",
        pin4: "net.N5",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
