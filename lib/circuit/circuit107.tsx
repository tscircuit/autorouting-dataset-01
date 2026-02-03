/** Randomly generated circuit 107. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="21.00mm"
    height="36.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-2.5}
      pcbY={-4.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-1.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-1.5}
      pcbY={-14.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-7.5}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={0.5}
      pcbY={-10.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-2.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={0.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={4.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-5.5}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-5.5}
      pcbY={15.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-7.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={7.5}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={1.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={6.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
        pin3: "net.N5",
      }}
      type="jfet"
    />
  </board>
)
