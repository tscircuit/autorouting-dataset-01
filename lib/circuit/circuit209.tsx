/** Randomly generated circuit 209. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="43.87mm"
    height="38.36mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-16.01}
      pcbY={4.61}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N8",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8_p1.27mm"
      pcbX={-5.55}
      pcbY={4.71}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin8: "net.N2",
        pin3: "net.N4",
        pin1: "net.N4",
        pin4: "net.N7",
        pin5: "net.N8",
        pin2: "net.N9",
        pin7: "net.N9",
        pin6: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-5.49}
      pcbY={13.24}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-2.69}
      pcbY={-13.93}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
        pin3: "net.N8",
      }}
      type="mosfet"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={13.56}
      pcbY={3.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-4.32}
      pcbY={-4.84}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-12.17}
      pcbY={-12.47}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N9",
        pin1: "net.N11",
      }}
      type="bjt"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-13.61}
      pcbY={-3.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={14.0}
      pcbY={11.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-12.76}
      pcbY={13.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={14.71}
      pcbY={-12.1}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N11",
        pin2: "net.N13",
      }}
      type="bjt"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={4.83}
      pcbY={-13.49}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={5.54}
      pcbY={5.84}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={6.22}
      pcbY={-3.46}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={15.69}
      pcbY={-4.65}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={5.44}
      pcbY={13.87}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
  </board>
)
