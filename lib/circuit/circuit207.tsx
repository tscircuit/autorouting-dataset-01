/** Randomly generated circuit 207. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="48.68mm"
    height="46.92mm"
  >
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={-6.39}
      pcbY={-0.22}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-0.07}
      pcbY={0.9}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={16.29}
      pcbY={0.2}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-18.48}
      pcbY={18.45}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N26",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="ssop16"
      pcbX={-17.03}
      pcbY={-7.56}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin11: "net.N1",
        pin2: "net.N5",
        pin10: "net.N6",
        pin8: "net.N6",
        pin12: "net.N8",
        pin5: "net.N11",
        pin6: "net.N13",
        pin3: "net.N16",
        pin13: "net.N19",
        pin7: "net.N20",
        pin9: "net.N21",
        pin14: "net.N22",
        pin16: "net.N23",
        pin1: "net.N25",
        pin15: "net.N25",
        pin4: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-7.85}
      pcbY={14.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N24",
        pin2: "net.N25",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-18.82}
      pcbY={10.9}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N19",
        pin2: "net.N25",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-16.81}
      pcbY={-19.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.01}
      pcbY={-7.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N24",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-7.12}
      pcbY={-18.07}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="tssop16"
      pcbX={18.39}
      pcbY={-10.73}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin6: "net.N5",
        pin13: "net.N9",
        pin8: "net.N9",
        pin9: "net.N10",
        pin2: "net.N11",
        pin10: "net.N12",
        pin4: "net.N13",
        pin3: "net.N15",
        pin12: "net.N16",
        pin11: "net.N16",
        pin14: "net.N17",
        pin1: "net.N20",
        pin5: "net.N21",
        pin15: "net.N23",
        pin7: "net.N24",
        pin16: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={8.09}
      pcbY={-19.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N3",
        pin3: "net.N9",
        pin4: "net.N12",
        pin5: "net.N14",
        pin1: "net.N21",
        pin2: "net.N28",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={1.24}
      pcbY={7.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N7",
        pin2: "net.N27",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-18.65}
      pcbY={3.62}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N27",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={16.78}
      pcbY={17.77}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin3: "net.N12",
        pin1: "net.N13",
        pin4: "net.N17",
        pin2: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={9.73}
      pcbY={8.4}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={6.51}
      pcbY={17.22}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N27",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={5.86}
      pcbY={-6.26}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-8.9}
      pcbY={9.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N28",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={9.66}
      pcbY={0.12}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow2"
      pcbX={-0.73}
      pcbY={16.55}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinrow2"
      pcbX={1.14}
      pcbY={-12.69}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N27",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
