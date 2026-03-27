/** Randomly generated circuit 273. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="50.42mm"
    height="48.27mm"
  >
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-7.5}
      pcbY={-9.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={8.76}
      pcbY={1.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="1206"
      pcbX={8.91}
      pcbY={-16.83}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={19.38}
      pcbY={-0.58}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={11.53}
      pcbY={15.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin3: "net.N16",
        pin2: "net.N20",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={-9.93}
      pcbY={17.04}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={1.31}
      pcbY={0.69}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-18.61}
      pcbY={8.52}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin2: "net.N5",
        pin1: "net.N13",
      }}
      type="pnp"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={18.97}
      pcbY={-18.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={16.83}
      pcbY={-9.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-4"
      footprint="1210"
      pcbX={-0.75}
      pcbY={8.77}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={1.42}
      pcbY={-7.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin1: "net.N14",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={2.52}
      pcbY={18.49}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N1",
        pin2: "net.N2",
        pin1: "net.N4",
        pin5: "net.N5",
        pin4: "net.N8",
        pin8: "net.N10",
        pin7: "net.N13",
        pin3: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={7.31}
      pcbY={7.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-10.28}
      pcbY={9.54}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N15",
        pin1: "net.N17",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-15.11}
      pcbY={-3.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin4: "net.N4",
        pin2: "net.N12",
        pin5: "net.N16",
        pin1: "net.N19",
        pin3: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={19.13}
      pcbY={18.55}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin3: "net.N17",
        pin2: "net.N18",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-9.7}
      pcbY={1.99}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin1: "net.N6",
        pin3: "net.N16",
        pin2: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-17.3}
      pcbY={-8.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-18.61}
      pcbY={-15.58}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-20.19}
      pcbY={15.56}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N17",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-9.53}
      pcbY={-16.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-223"
      pcbX={19.63}
      pcbY={7.95}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin3: "net.N10",
        pin2: "net.N21",
      }}
      type="npn"
    />
  </board>
)
