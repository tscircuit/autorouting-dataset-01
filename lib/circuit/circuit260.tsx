/** Randomly generated circuit 260. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="42.01mm"
    height="37.75mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={5.79}
      pcbY={15.1}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={5.23}
      pcbY={-12.84}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N12",
        pin2: "net.N16",
        pin1: "net.N19",
      }}
      type="pnp"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={15.5}
      pcbY={3.56}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-14.55}
      pcbY={-12.62}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-14.62}
      pcbY={-5.36}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-13.26}
      pcbY={12.87}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin10: "net.N2",
        pin4: "net.N4",
        pin2: "net.N5",
        pin7: "net.N6",
        pin12: "net.N6",
        pin3: "net.N7",
        pin14: "net.N8",
        pin6: "net.N12",
        pin15: "net.N13",
        pin11: "net.N14",
        pin13: "net.N17",
        pin9: "net.N18",
        pin8: "net.N18",
        pin1: "net.N18",
        pin5: "net.N20",
        pin16: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-1.76}
      pcbY={13.11}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={13.27}
      pcbY={-13.11}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-4.33}
      pcbY={4.77}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N5",
        pin1: "net.N17",
      }}
      type="bjt"
    />
    <chip
      name="chip-2"
      footprint="tssop8"
      pcbX={3.89}
      pcbY={3.36}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin8: "net.N3",
        pin1: "net.N9",
        pin4: "net.N10",
        pin6: "net.N11",
        pin3: "net.N14",
        pin5: "net.N17",
        pin7: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={4.87}
      pcbY={-4.06}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={14.43}
      pcbY={11.58}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
        pin3: "net.N12",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-14.55}
      pcbY={5.28}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={13.35}
      pcbY={-3.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-5.38}
      pcbY={-12.73}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N15",
        pin1: "net.N16",
      }}
      type="bjt"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={-4.82}
      pcbY={-5.87}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }}
      inductance="10uH"
    />
  </board>
)
