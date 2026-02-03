/** Randomly generated circuit 190. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="34.00mm"
    height="34.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-11.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={12.0}
      pcbY={-9.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-14.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={6.0}
      pcbY={-12.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-12.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-6.0}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={0.0}
      pcbY={-1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-12.0}
      pcbY={-10.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
        pin3: "net.N6",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={6.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N8",
        pin1: "net.N10",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={12.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={4.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N9",
        pin1: "net.N10",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin4: "net.N3",
        pin6: "net.N5",
        pin2: "net.N7",
        pin5: "net.N10",
        pin1: "net.N11",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
