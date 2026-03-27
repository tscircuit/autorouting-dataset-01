/** Randomly generated circuit 290. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
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
        pin1: "net.N11",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={12.0}
      pcbY={-9.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
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
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={6.0}
      pcbY={-12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
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
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-6.0}
      pcbY={14.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={0.0}
      pcbY={-1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-12.0}
      pcbY={-10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N12",
        pin1: "net.N13",
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
        pin1: "net.N2",
        pin2: "net.N5",
        pin3: "net.N7",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={2.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
        pin3: "net.N13",
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
        pin3: "net.N4",
        pin1: "net.N7",
        pin2: "net.N10",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={14.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N5",
        pin7: "net.N8",
        pin3: "net.N9",
        pin2: "net.N10",
        pin6: "net.N11",
        pin1: "net.N12",
        pin5: "net.N13",
        pin8: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N3",
        pin2: "net.N4",
        pin1: "net.N4",
        pin3: "net.N7",
        pin4: "net.N12",
        pin5: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
