/** Randomly generated circuit 208. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="42.21mm"
    height="45.76mm"
  >
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={3.36}
      pcbY={14.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={13.55}
      pcbY={-14.44}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin4: "net.N4",
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-16.08}
      pcbY={6.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={-6.48}
      pcbY={4.04}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={4.23}
      pcbY={-5.95}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="1206"
      pcbX={-6.11}
      pcbY={15.68}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-14.03}
      pcbY={-12.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={13.96}
      pcbY={15.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={4.9}
      pcbY={4.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N12",
        pin1: "net.N12",
        pin2: "net.N13",
      }}
      type="bjt"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-6.84}
      pcbY={-14.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-15.0}
      pcbY={-3.94}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
        pin3: "net.N11",
      }}
      type="bjt"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-12.62}
      pcbY={15.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="2512"
      pcbX={15.38}
      pcbY={5.06}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={1.96}
      pcbY={-16.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={12.64}
      pcbY={-5.65}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-3.38}
      pcbY={-5.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
        pin3: "net.N10",
      }}
      type="npn"
    />
  </board>
)
