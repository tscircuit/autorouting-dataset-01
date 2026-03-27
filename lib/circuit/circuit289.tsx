/** Randomly generated circuit 289. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.39mm"
    height="48.56mm"
  >
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={-9.2}
      pcbY={-12.91}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={-1.66}
      pcbY={0.89}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={15.16}
      pcbY={18.28}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N10",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={7.64}
      pcbY={16.24}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={17.39}
      pcbY={-18.61}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin3: "net.N8",
        pin2: "net.N9",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-16.54}
      pcbY={9.11}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-6.68}
      pcbY={-18.59}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={16.47}
      pcbY={8.83}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-14.93}
      pcbY={-19.99}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={7.64}
      pcbY={-7.04}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      type="bjt"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-10.8}
      pcbY={-2.58}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={10.64}
      pcbY={8.46}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-2.66}
      pcbY={-19.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N5",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-9.89}
      pcbY={10.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-0.2}
      pcbY={20.41}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="1210"
      pcbX={-7.8}
      pcbY={15.38}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={7.37}
      pcbY={-17.97}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={8.95}
      pcbY={0.67}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={16.8}
      pcbY={-9.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-4"
      footprint="axial_p0.2in"
      pcbX={-1.22}
      pcbY={9.14}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-5"
      footprint="axial_p0.2in"
      pcbX={-2.42}
      pcbY={-7.88}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-14.06}
      pcbY={2.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N14",
      }}
      type="bjt"
    />
  </board>
)
