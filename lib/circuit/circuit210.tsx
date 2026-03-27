/** Randomly generated circuit 210. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.43mm"
    height="51.75mm"
  >
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={1.57}
      pcbY={19.31}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-7.4}
      pcbY={-16.94}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }}
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-15.65}
      pcbY={-18.13}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin16: "net.N1",
        pin13: "net.N1",
        pin7: "net.N2",
        pin15: "net.N4",
        pin2: "net.N5",
        pin12: "net.N7",
        pin3: "net.N7",
        pin8: "net.N10",
        pin14: "net.N12",
        pin9: "net.N13",
        pin6: "net.N13",
        pin1: "net.N17",
        pin11: "net.N19",
        pin4: "net.N21",
        pin10: "net.N22",
        pin5: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-16.62}
      pcbY={18.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N20",
        pin2: "net.N21",
        pin1: "net.N21",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={10.84}
      pcbY={-10.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-12.09}
      pcbY={0.01}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin5: "net.N6",
        pin6: "net.N8",
        pin4: "net.N10",
        pin3: "net.N18",
        pin1: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-6.79}
      pcbY={20.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-18.93}
      pcbY={-6.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-0.35}
      pcbY={-19.45}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={3.36}
      pcbY={-1.63}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-6.59}
      pcbY={-7.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin4: "net.N7",
        pin2: "net.N17",
        pin3: "net.N21",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={16.89}
      pcbY={-16.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={1.39}
      pcbY={-7.58}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-15.72}
      pcbY={9.3}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
        pin3: "net.N16",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={-4.35}
      pcbY={10.78}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N18",
        pin1: "net.N19",
        pin4: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="tssop20"
      pcbX={16.77}
      pcbY={1.73}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin12: "net.N3",
        pin6: "net.N4",
        pin16: "net.N5",
        pin15: "net.N6",
        pin20: "net.N9",
        pin1: "net.N10",
        pin7: "net.N11",
        pin13: "net.N12",
        pin10: "net.N13",
        pin8: "net.N13",
        pin14: "net.N15",
        pin5: "net.N15",
        pin17: "net.N16",
        pin3: "net.N18",
        pin19: "net.N19",
        pin11: "net.N23",
        pin9: "net.N23",
        pin18: "net.N23",
        pin4: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={6.01}
      pcbY={8.72}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
        pin3: "net.N20",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={8.88}
      pcbY={-16.83}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
        pin3: "net.N24",
      }}
      type="npn"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={14.71}
      pcbY={16.39}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
  </board>
)
