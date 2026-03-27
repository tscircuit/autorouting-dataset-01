/** Randomly generated circuit 262. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="20.00mm"
    height="20.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-1.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-3.0}
      pcbY={1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={4.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-7.0}
      pcbY={0.0}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-7.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={5.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={7.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin2: "net.N9",
        pin1: "net.N11",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-7.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={-5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N2",
      }}
      type="mosfet"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-7.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin4: "net.N2",
        pin2: "net.N7",
        pin1: "net.N8",
        pin5: "net.N8",
        pin3: "net.N9",
        pin6: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={5.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin4: "net.N5",
        pin5: "net.N6",
        pin6: "net.N8",
        pin3: "net.N11",
        pin1: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={5.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N10",
        pin2: "net.N10",
        pin4: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
