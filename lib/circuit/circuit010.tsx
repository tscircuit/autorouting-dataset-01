/** Randomly generated circuit 10. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="34.42mm"
    height="34.42mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={8.438}
      pcbY={-8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-4.688}
      pcbY={-0.938}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={8.438}
      pcbY={10.313}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-2.813}
      pcbY={4.688}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-4.688}
      pcbY={-10.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-4.688}
      pcbY={10.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={8.438}
      pcbY={8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
