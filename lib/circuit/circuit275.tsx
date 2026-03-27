/** Randomly generated circuit 275. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="56.76mm"
    height="52.41mm"
  >
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-11.35}
      pcbY={22.98}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N21",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-24.63}
      pcbY={-5.26}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin4: "net.N5",
        pin1: "net.N14",
        pin3: "net.N15",
        pin6: "net.N18",
        pin2: "net.N21",
        pin5: "net.N27",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={23.28}
      pcbY={3.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N28",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={3.52}
      pcbY={-13.57}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N5",
        pin4: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={22.83}
      pcbY={10.42}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N15",
        pin1: "net.N23",
        pin2: "net.N28",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={-22.58}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-19.64}
      pcbY={18.45}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-12.86}
      pcbY={-12.85}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N4",
        pin1: "net.N8",
        pin2: "net.N8",
        pin3: "net.N24",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={11.6}
      pcbY={1.44}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={-8.2}
      pcbY={18.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N29",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-18.65}
      pcbY={-6.62}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-3.3}
      pcbY={-12.63}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N12",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="qfn16"
      pcbX={20.38}
      pcbY={-20.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin10: "net.N1",
        pin14: "net.N2",
        pin2: "net.N3",
        pin6: "net.N4",
        pin5: "net.N5",
        pin13: "net.N7",
        pin3: "net.N7",
        pin9: "net.N8",
        pin16: "net.N12",
        pin8: "net.N15",
        pin11: "net.N17",
        pin4: "net.N19",
        pin12: "net.N22",
        pin15: "net.N25",
        pin1: "net.N25",
        pin7: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={5.96}
      pcbY={21.22}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={20.77}
      pcbY={19.96}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="axial_p0.2in"
      pcbX={-6.94}
      pcbY={10.7}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-2.57}
      pcbY={-18.87}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={11.37}
      pcbY={-18.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
    />
    <capacitor
      name="capacitor-4"
      footprint="1210"
      pcbX={2.69}
      pcbY={-3.98}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={11.83}
      pcbY={11.73}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="1206"
      pcbX={-21.53}
      pcbY={-19.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-13.0}
      pcbY={-3.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N20",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={11.52}
      pcbY={-10.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N17",
        pin1: "net.N19",
      }}
      type="bjt"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={22.65}
      pcbY={-10.9}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N28",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0603"
      pcbX={2.79}
      pcbY={4.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N29",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={13.31}
      pcbY={21.09}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-7"
      footprint="1206"
      pcbX={-17.85}
      pcbY={4.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-11.2}
      pcbY={-21.4}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N13",
        pin2: "net.N20",
      }}
      type="jfet"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={-12.05}
      pcbY={3.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N26",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
  </board>
)
