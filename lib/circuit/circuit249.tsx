/** Randomly generated circuit 249. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.08mm"
    height="34.97mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-9.48}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin3: "net.N4",
        pin4: "net.N6",
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={18.79}
      pcbY={-9.93}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin4: "net.N2",
        pin3: "net.N8",
        pin1: "net.N10",
        pin2: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={3.61}
      pcbY={11.3}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-5.25}
      pcbY={11.87}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={6.44}
      pcbY={-12.51}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-15.16}
      pcbY={-4.2}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={2.44}
      pcbY={-3.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-16.39}
      pcbY={9.87}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N5",
        pin1: "net.N11",
      }}
      type="mosfet"
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-14.38}
      pcbY={-12.45}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={11.36}
      pcbY={-4.04}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="1206"
      pcbX={3.65}
      pcbY={2.13}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-4.45}
      pcbY={-11.8}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin2: "net.N9",
        pin4: "net.N10",
        pin1: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-4.59}
      pcbY={-2.59}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={17.73}
      pcbY={6.35}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N6",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={11.66}
      pcbY={9.93}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin3: "net.N11",
        pin1: "net.N12",
        pin2: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
