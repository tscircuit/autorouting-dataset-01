/** Randomly generated circuit 204. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="42.40mm"
    height="46.82mm"
  >
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={0.2}
      pcbY={17.17}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={14.32}
      pcbY={-8.69}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N17",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={9.84}
      pcbY={1.51}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={-7.02}
      pcbY={-7.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={8.73}
      pcbY={16.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N18",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-14.48}
      pcbY={15.81}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-6.76}
      pcbY={-0.79}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={1.44}
      pcbY={-18.59}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin2: "net.N7",
        pin1: "net.N7",
        pin3: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={-16.1}
      pcbY={0.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={-8.46}
      pcbY={8.02}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-6.22}
      pcbY={15.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-16.9}
      pcbY={-7.15}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin3: "net.N12",
        pin2: "net.N15",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={3.28}
      pcbY={0.75}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={13.88}
      pcbY={8.84}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N13",
        pin2: "net.N16",
      }}
      type="mosfet"
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={-16.05}
      pcbY={8.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={1.32}
      pcbY={8.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
        pin3: "net.N15",
        pin4: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={-13.44}
      pcbY={-15.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={5.76}
      pcbY={-9.18}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin7: "net.N1",
        pin5: "net.N5",
        pin1: "net.N6",
        pin2: "net.N6",
        pin8: "net.N8",
        pin4: "net.N8",
        pin3: "net.N11",
        pin6: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={15.89}
      pcbY={0.84}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N13",
        pin3: "net.N18",
      }}
      type="bjt"
    />
  </board>
)
