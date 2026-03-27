/** Randomly generated circuit 213. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="49.91mm"
    height="38.61mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={6.15}
      pcbY={-13.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N11",
        pin2: "net.N22",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-5.89}
      pcbY={7.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-18.38}
      pcbY={-2.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={18.34}
      pcbY={15.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N24",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="qfn16"
      pcbX={14.62}
      pcbY={5.76}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin14: "net.N2",
        pin7: "net.N3",
        pin6: "net.N5",
        pin9: "net.N7",
        pin4: "net.N10",
        pin2: "net.N11",
        pin1: "net.N11",
        pin11: "net.N12",
        pin5: "net.N12",
        pin12: "net.N12",
        pin16: "net.N13",
        pin8: "net.N14",
        pin10: "net.N16",
        pin13: "net.N20",
        pin15: "net.N21",
        pin3: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={6.36}
      pcbY={5.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N19",
      }}
    />
    <chip
      name="chip-2"
      footprint="tssop20"
      pcbX={-5.4}
      pcbY={-3.04}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin14: "net.N3",
        pin1: "net.N5",
        pin20: "net.N6",
        pin6: "net.N6",
        pin17: "net.N7",
        pin3: "net.N7",
        pin8: "net.N8",
        pin16: "net.N8",
        pin12: "net.N9",
        pin2: "net.N10",
        pin15: "net.N13",
        pin9: "net.N15",
        pin13: "net.N17",
        pin19: "net.N18",
        pin10: "net.N19",
        pin7: "net.N20",
        pin18: "net.N20",
        pin5: "net.N21",
        pin11: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={3.81}
      pcbY={13.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N18",
        pin1: "net.N19",
        pin2: "net.N20",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={18.11}
      pcbY={-5.61}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-15.09}
      pcbY={-12.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={-6.02}
      pcbY={-14.42}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-3.62}
      pcbY={11.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={16.53}
      pcbY={-13.85}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin1: "net.N10",
        pin2: "net.N14",
        pin4: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={-17.23}
      pcbY={11.56}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin12: "net.N3",
        pin4: "net.N3",
        pin10: "net.N4",
        pin11: "net.N5",
        pin13: "net.N8",
        pin3: "net.N9",
        pin15: "net.N9",
        pin2: "net.N9",
        pin1: "net.N12",
        pin7: "net.N16",
        pin8: "net.N16",
        pin14: "net.N17",
        pin16: "net.N22",
        pin5: "net.N22",
        pin9: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={6.8}
      pcbY={-4.44}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N23",
      }}
      type="jfet"
    />
  </board>
)
