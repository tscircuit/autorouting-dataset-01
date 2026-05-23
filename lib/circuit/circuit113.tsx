/** Randomly generated circuit 113. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="36.00mm"
    height="36.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-3.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={12.0}
      pcbY={-9.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-13.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={-8.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-11.0}
      pcbY={6.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-15.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={3.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={0.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-7.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={5.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-7.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={10.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin6: "net.N3",
        pin7: "net.N7",
        pin5: "net.N9",
        pin3: "net.N9",
        pin2: "net.N10",
        pin8: "net.N11",
        pin1: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={7.0}
      pcbY={-1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin2: "net.N8",
        pin6: "net.N11",
        pin1: "net.N11",
        pin5: "net.N13",
        pin4: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
