/** Randomly generated circuit 221. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="43.31mm"
    height="39.52mm"
  >
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-4.09}
      pcbY={4.2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={12.27}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      type="bjt"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={4.33}
      pcbY={13.7}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={4.15}
      pcbY={2.57}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={-4.02}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-15.68}
      pcbY={-3.21}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
        pin3: "net.N9",
      }}
      type="bjt"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={15.42}
      pcbY={12.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-13.64}
      pcbY={-11.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-15.15}
      pcbY={3.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N10",
      }}
      type="mosfet"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-12.8}
      pcbY={11.79}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={14.7}
      pcbY={-12.12}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin4: "net.N5",
        pin1: "net.N6",
        pin3: "net.N8",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-5.87}
      pcbY={-4.61}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={5.12}
      pcbY={-12.04}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="1210"
      pcbX={-6.23}
      pcbY={13.74}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={3.04}
      pcbY={-5.01}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
  </board>
)
