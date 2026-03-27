/** Randomly generated circuit 217. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="40.35mm"
    height="37.83mm"
  >
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={2.03}
      pcbY={-3.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-4.23}
      pcbY={-3.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={4.04}
      pcbY={12.61}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={12.62}
      pcbY={-3.79}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin4: "net.N4",
        pin3: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={14.35}
      pcbY={4.73}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-13.84}
      pcbY={-3.59}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-4.38}
      pcbY={10.46}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-12.03}
      pcbY={5.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={13.94}
      pcbY={13.15}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={-5.82}
      pcbY={-13.11}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={12.62}
      pcbY={-12.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin2: "net.N5",
        pin1: "net.N10",
        pin3: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={2.45}
      pcbY={-13.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-14.81}
      pcbY={12.2}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={3.53}
      pcbY={4.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
        pin3: "net.N11",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-4.8}
      pcbY={2.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      type="bjt"
    />
  </board>
)
