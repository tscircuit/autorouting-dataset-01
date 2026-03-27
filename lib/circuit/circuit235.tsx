/** Randomly generated circuit 235. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.31mm"
    height="40.27mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-4.76}
      pcbY={5.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={16.42}
      pcbY={-11.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N7",
        pin2: "net.N8",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={4.99}
      pcbY={5.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={-15.15}
      pcbY={11.24}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-17.13}
      pcbY={-14.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={5.19}
      pcbY={-7.14}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={5.3}
      pcbY={15.46}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={15.66}
      pcbY={-5.92}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={11.04}
      pcbY={6.07}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-4.34}
      pcbY={0.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N5",
        pin2: "net.N6",
        pin1: "net.N8",
        pin3: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-3"
      footprint="1210"
      pcbX={-12.22}
      pcbY={-6.34}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={17.02}
      pcbY={10.04}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N1",
        pin4: "net.N3",
        pin1: "net.N5",
        pin5: "net.N10",
        pin2: "net.N12",
        pin3: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-4.1}
      pcbY={12.76}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
        pin3: "net.N9",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-8.08}
      pcbY={-13.69}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="1210"
      pcbX={-16.24}
      pcbY={4.08}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={3.62}
      pcbY={-13.46}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }}
    />
  </board>
)
