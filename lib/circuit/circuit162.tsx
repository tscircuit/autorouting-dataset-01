/** Randomly generated circuit 162. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
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
        pin2: "net.N10",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-3.0}
      pcbY={1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
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
        pin1: "net.N2",
        pin2: "net.N5",
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
        pin1: "net.N6",
        pin2: "net.N11",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-7.0}
      pcbY={0.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
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
        pin1: "net.N4",
        pin2: "net.N7",
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
        pin2: "net.N4",
        pin1: "net.N9",
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
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-7.0}
      pcbY={-7.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
        pin3: "net.N7",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-5.0}
      pcbY={-3.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
        pin3: "net.N8",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={0.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin3: "net.N6",
        pin1: "net.N8",
        pin5: "net.N8",
        pin4: "net.N10",
        pin2: "net.N11",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={5.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N5",
        pin2: "net.N8",
        pin4: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
