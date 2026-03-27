/** Randomly generated circuit 222. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.94mm"
    height="41.63mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={7.16}
      pcbY={-14.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={18.37}
      pcbY={-0.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={17.39}
      pcbY={-6.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-0.89}
      pcbY={5.99}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-0.86}
      pcbY={-7.69}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={7.49}
      pcbY={-2.96}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-15.99}
      pcbY={-15.1}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={17.11}
      pcbY={6.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N5",
        pin1: "net.N9",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={-9.15}
      pcbY={6.62}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={8.5}
      pcbY={5.36}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N8",
        pin2: "net.N14",
      }}
      type="pnp"
    />
    <capacitor
      name="capacitor-4"
      footprint="2512"
      pcbX={1.71}
      pcbY={14.24}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={17.14}
      pcbY={-13.3}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={17.68}
      pcbY={14.1}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N13",
      }}
      type="pnp"
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-0.19}
      pcbY={1.09}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-9.54}
      pcbY={15.97}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-17.03}
      pcbY={6.04}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-9.31}
      pcbY={-7.55}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={-17.45}
      pcbY={0.71}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={7.55}
      pcbY={-10.47}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={8.76}
      pcbY={14.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }}
    />
  </board>
)
