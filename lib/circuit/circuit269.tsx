/** Randomly generated circuit 269. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="41.37mm"
    height="40.25mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-7.16}
      pcbY={-15.01}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-14.47}
      pcbY={2.76}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N6",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={8.26}
      pcbY={0.34}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N12",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={13.31}
      pcbY={-9.59}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={7.29}
      pcbY={-13.35}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      type="pnp"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-0.91}
      pcbY={10.36}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-0.68}
      pcbY={6.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-13.3}
      pcbY={-13.88}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-1.53}
      pcbY={-13.7}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={7.54}
      pcbY={6.95}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-14.62}
      pcbY={14.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={15.1}
      pcbY={13.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-23"
      pcbX={15.87}
      pcbY={-0.05}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin3: "net.N7",
        pin1: "net.N11",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-7"
      footprint="SOT-223"
      pcbX={6.04}
      pcbY={15.38}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
        pin3: "net.N11",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-8"
      footprint="SOT-23"
      pcbX={-15.73}
      pcbY={-4.84}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N7",
        pin1: "net.N8",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-9"
      footprint="SOT-23"
      pcbX={-5.57}
      pcbY={15.38}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin3: "net.N6",
        pin1: "net.N10",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={-2.59}
      pcbY={-6.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
  </board>
)
