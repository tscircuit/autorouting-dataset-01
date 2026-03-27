/** Randomly generated circuit 272. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="43.47mm"
    height="40.10mm"
  >
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-15.32}
      pcbY={8.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={13.69}
      pcbY={4.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={4.53}
      pcbY={11.27}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={8.29}
      pcbY={-13.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-12.62}
      pcbY={14.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-4.29}
      pcbY={-13.99}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={14.05}
      pcbY={-5.18}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={16.42}
      pcbY={-11.22}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={15.76}
      pcbY={14.32}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-13.82}
      pcbY={-14.69}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin1: "net.N5",
        pin2: "net.N8",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-16.93}
      pcbY={-3.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N12",
        pin1: "net.N12",
      }}
      type="pnp"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.07}
      pcbY={14.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="1206"
      pcbX={-4.19}
      pcbY={7.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={5.01}
      pcbY={-4.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      type="bjt"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={5.38}
      pcbY={4.8}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }}
    />
    <chip
      name="chip-1"
      footprint="ssop8"
      pcbX={-5.97}
      pcbY={-4.78}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin7: "net.N5",
        pin6: "net.N5",
        pin8: "net.N6",
        pin2: "net.N8",
        pin5: "net.N9",
        pin3: "net.N11",
        pin1: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
