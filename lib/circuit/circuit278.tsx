/** Randomly generated circuit 278. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="40.42mm"
    height="34.54mm"
  >
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={4.47}
      pcbY={3.64}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-5.07}
      pcbY={-4.26}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={14.14}
      pcbY={9.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-12.77}
      pcbY={2.84}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={3.61}
      pcbY={11.3}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-12.37}
      pcbY={-11.52}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-14.6}
      pcbY={10.91}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin1: "net.N5",
        pin2: "net.N11",
      }}
      type="bjt"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={13.09}
      pcbY={-4.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-12.99}
      pcbY={-3.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={3.27}
      pcbY={-4.91}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-4.42}
      pcbY={-11.81}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={12.84}
      pcbY={-10.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N6",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-4.08}
      pcbY={4.21}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-4.38}
      pcbY={11.81}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={4.94}
      pcbY={-11.58}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }}
    />
  </board>
)
