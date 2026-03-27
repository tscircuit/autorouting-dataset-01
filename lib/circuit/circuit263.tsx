/** Randomly generated circuit 263. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="41.58mm"
    height="40.60mm"
  >
    <chip
      name="chip-1"
      footprint="ssop8"
      pcbX={-15.19}
      pcbY={14.47}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin7: "net.N1",
        pin2: "net.N4",
        pin8: "net.N4",
        pin1: "net.N5",
        pin6: "net.N6",
        pin4: "net.N13",
        pin5: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={4.88}
      pcbY={-4.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={4.78}
      pcbY={2.52}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-3.98}
      pcbY={12.93}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={3.16}
      pcbY={-12.72}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-14.21}
      pcbY={-4.87}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-12.88}
      pcbY={-14.57}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={-15.16}
      pcbY={4.07}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="ssop8"
      pcbX={14.09}
      pcbY={-13.11}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin7: "net.N2",
        pin6: "net.N2",
        pin4: "net.N7",
        pin1: "net.N8",
        pin3: "net.N9",
        pin5: "net.N9",
        pin8: "net.N10",
        pin2: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={12.44}
      pcbY={5.34}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={15.17}
      pcbY={-3.19}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N8",
        pin2: "net.N9",
      }}
      type="pnp"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={-5.61}
      pcbY={-3.77}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={4.55}
      pcbY={13.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N12",
        pin1: "net.N13",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-4.37}
      pcbY={-13.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={14.6}
      pcbY={12.84}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
  </board>
)
