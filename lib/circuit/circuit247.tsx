/** Randomly generated circuit 247. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="39.30mm"
    height="44.54mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.86}
      pcbY={-13.46}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-14.85}
      pcbY={-6.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N7",
        pin2: "net.N7",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={4.33}
      pcbY={13.29}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-3.75}
      pcbY={-3.21}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={-4.37}
      pcbY={13.38}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={-12.34}
      pcbY={14.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={3.34}
      pcbY={4.84}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={13.21}
      pcbY={-4.38}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-3.95}
      pcbY={5.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N10",
        pin3: "net.N12",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-12.57}
      pcbY={4.31}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={6.78}
      pcbY={-5.97}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={-13.36}
      pcbY={-12.97}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={13.41}
      pcbY={15.34}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={12.18}
      pcbY={5.07}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
        pin4: "net.N10",
        pin3: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={3.93}
      pcbY={-12.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={12.39}
      pcbY={-13.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
