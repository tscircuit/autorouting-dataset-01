/** Randomly generated circuit 228. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="41.05mm"
    height="41.83mm"
  >
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={-4.3}
      pcbY={13.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={-12.66}
      pcbY={8.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-13.74}
      pcbY={13.5}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={13.56}
      pcbY={-5.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={4.46}
      pcbY={-16.88}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={4.96}
      pcbY={-6.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="1210"
      pcbX={-3.9}
      pcbY={4.9}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={11.81}
      pcbY={5.36}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={5.88}
      pcbY={12.78}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={4.23}
      pcbY={5.71}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
        pin3: "net.N9",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-3.92}
      pcbY={-4.18}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
        pin3: "net.N15",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-14.87}
      pcbY={-1.56}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin8: "net.N4",
        pin7: "net.N4",
        pin5: "net.N5",
        pin3: "net.N9",
        pin6: "net.N13",
        pin1: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={13.73}
      pcbY={-15.11}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={16.34}
      pcbY={10.81}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin5: "net.N7",
        pin2: "net.N9",
        pin6: "net.N9",
        pin4: "net.N10",
        pin3: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-0.66}
      pcbY={-11.53}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N10",
        pin4: "net.N10",
        pin1: "net.N13",
        pin3: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={-14.01}
      pcbY={-14.34}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
  </board>
)
