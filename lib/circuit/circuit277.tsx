/** Randomly generated circuit 277. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="16.00mm"
    height="26.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={4.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-2.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={10.0}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={3.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={4.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={5.0}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin4: "net.N1",
        pin6: "net.N2",
        pin5: "net.N3",
        pin3: "net.N4",
        pin1: "net.N4",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-5.0}
      pcbY={-6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin4: "net.N6",
        pin1: "net.N7",
        pin2: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
