/** Randomly generated circuit 226. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="39.37mm"
    height="43.19mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-12.01}
      pcbY={6.03}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-5.24}
      pcbY={14.89}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={11.93}
      pcbY={8.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="axial_p0.2in"
      pcbX={12.9}
      pcbY={-7.05}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="1206"
      pcbX={-4.58}
      pcbY={6.25}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="axial_p0.2in"
      pcbX={-4.43}
      pcbY={-12.29}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={4.28}
      pcbY={-10.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={5.25}
      pcbY={3.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N5",
        pin2: "net.N11",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={-13.55}
      pcbY={-6.67}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-6"
      footprint="0402"
      pcbX={4.41}
      pcbY={-3.81}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={7.32}
      pcbY={16.79}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      type="mosfet"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={14.49}
      pcbY={2.89}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-7"
      footprint="0805"
      pcbX={-13.4}
      pcbY={15.01}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-8"
      footprint="0603"
      pcbX={12.9}
      pcbY={-12.77}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-13.47}
      pcbY={-17.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N7",
        pin2: "net.N12",
      }}
      type="jfet"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={-2.63}
      pcbY={-6.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
    />
  </board>
)
