/** Randomly generated circuit 227. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.69mm"
    height="36.92mm"
  >
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={-15.39}
      pcbY={-3.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-16.43}
      pcbY={-11.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={-5.66}
      pcbY={3.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={5.82}
      pcbY={1.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={6.56}
      pcbY={14.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin5: "net.N3",
        pin2: "net.N4",
        pin3: "net.N12",
        pin6: "net.N13",
        pin1: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="2512"
      pcbX={-5.41}
      pcbY={-11.59}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={13.88}
      pcbY={-3.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={14.88}
      pcbY={1.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin1: "net.N6",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-6.36}
      pcbY={11.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      type="bjt"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={5.88}
      pcbY={-12.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-14.73}
      pcbY={12.01}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N6",
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      type="bjt"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={4.5}
      pcbY={-3.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={-5.77}
      pcbY={-4.12}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="axial_p0.2in"
      pcbX={14.36}
      pcbY={8.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={14.8}
      pcbY={-12.83}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N8",
        pin3: "net.N12",
      }}
      type="npn"
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-17.32}
      pcbY={3.84}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
    />
  </board>
)
