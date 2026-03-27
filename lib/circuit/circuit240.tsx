/** Randomly generated circuit 240. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="43.86mm"
    height="47.58mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={4.1}
      pcbY={16.23}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin4: "net.N11",
        pin1: "net.N13",
        pin2: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-6.94}
      pcbY={-0.61}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N12",
        pin2: "net.N18",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={8.82}
      pcbY={-10.12}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={10.43}
      pcbY={18.95}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={15.69}
      pcbY={-16.8}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-16.35}
      pcbY={8.77}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="2512"
      pcbX={6.21}
      pcbY={-0.02}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={-15.69}
      pcbY={16.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-8.15}
      pcbY={18.72}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N15",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-8.87}
      pcbY={-13.37}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N15",
        pin3: "net.N17",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-14.78}
      pcbY={-0.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={16.11}
      pcbY={-1.25}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N18",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-1.27}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="1210"
      pcbX={0.0}
      pcbY={-13.96}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={8.65}
      pcbY={7.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N8",
      }}
      type="pnp"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-9.31}
      pcbY={7.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={16.6}
      pcbY={-9.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-11.83}
      pcbY={-20.04}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin2: "net.N9",
        pin3: "net.N10",
        pin4: "net.N12",
        pin1: "net.N14",
        pin6: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-5.1}
      pcbY={9.21}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
  </board>
)
