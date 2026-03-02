/** Randomly generated circuit 175. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="54.00mm"
    height="31.05mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-20.0}
      pcbY={-1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-5.0}
      pcbY={-6.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={18.75}
      pcbY={5.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-12.5}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-11.25}
      pcbY={9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-1.25}
      pcbY={-10.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-11.25}
      pcbY={4.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={11.25}
      pcbY={6.875}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={-3.75}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-17.5}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-3.75}
      pcbY={8.125}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={15.0}
      pcbY={-1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={16.25}
      pcbY={-10.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-6.25}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N12",
        pin2: "net.N13",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={6.25}
      pcbY={9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N5",
        pin4: "net.N5",
        pin2: "net.N5",
        pin5: "net.N7",
        pin1: "net.N10",
        pin3: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
