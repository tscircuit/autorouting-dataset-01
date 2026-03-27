/** Randomly generated circuit 231. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="60.51mm"
    height="51.81mm"
  >
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-9.39}
      pcbY={1.61}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="2512"
      pcbX={-21.53}
      pcbY={-1.88}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="1206"
      pcbX={6.28}
      pcbY={-8.44}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="tqfp32"
      pcbX={-21.08}
      pcbY={-16.73}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N2",
        pin19: "net.N2",
        pin30: "net.N3",
        pin14: "net.N3",
        pin18: "net.N6",
        pin29: "net.N7",
        pin17: "net.N7",
        pin16: "net.N9",
        pin25: "net.N10",
        pin28: "net.N11",
        pin27: "net.N12",
        pin11: "net.N14",
        pin23: "net.N16",
        pin12: "net.N16",
        pin24: "net.N18",
        pin13: "net.N18",
        pin22: "net.N19",
        pin2: "net.N20",
        pin8: "net.N20",
        pin5: "net.N22",
        pin9: "net.N24",
        pin21: "net.N25",
        pin4: "net.N26",
        pin15: "net.N27",
        pin10: "net.N28",
        pin3: "net.N28",
        pin32: "net.N29",
        pin31: "net.N29",
        pin26: "net.N31",
        pin1: "net.N32",
        pin7: "net.N32",
        pin20: "net.N33",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-9.99}
      pcbY={10.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={23.85}
      pcbY={1.07}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.31}
      pcbY={20.94}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N21",
        pin3: "net.N24",
        pin2: "net.N30",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-19.71}
      pcbY={14.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N24",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-21.29}
      pcbY={21.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin4: "net.N24",
        pin2: "net.N25",
        pin3: "net.N30",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={12.35}
      pcbY={-9.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin3: "net.N15",
        pin2: "net.N26",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={12.76}
      pcbY={16.44}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={21.95}
      pcbY={-7.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin3: "net.N23",
        pin2: "net.N29",
      }}
      type="npn"
    />
    <chip
      name="chip-2"
      footprint="tssop20_p0.5mm"
      pcbX={11.81}
      pcbY={0.32}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin20: "net.N8",
        pin14: "net.N10",
        pin17: "net.N10",
        pin2: "net.N12",
        pin15: "net.N13",
        pin10: "net.N14",
        pin11: "net.N15",
        pin9: "net.N16",
        pin13: "net.N16",
        pin8: "net.N17",
        pin5: "net.N18",
        pin18: "net.N20",
        pin4: "net.N21",
        pin16: "net.N22",
        pin1: "net.N22",
        pin3: "net.N25",
        pin6: "net.N27",
        pin7: "net.N28",
        pin19: "net.N29",
        pin12: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-3"
      footprint="axial_p0.2in"
      pcbX={-5.2}
      pcbY={-19.67}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-4"
      footprint="1206"
      pcbX={-19.61}
      pcbY={8.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N27",
        pin1: "net.N33",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={4.52}
      pcbY={-17.93}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-5"
      footprint="1206"
      pcbX={13.27}
      pcbY={12.09}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={-9.47}
      pcbY={20.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N28",
      }}
    />
    <resistor
      name="resistor-6"
      footprint="0402"
      pcbX={19.78}
      pcbY={18.26}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={-2.18}
      pcbY={10.96}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N32",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={21.42}
      pcbY={-20.22}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N33",
      }}
    />
    <resistor
      name="resistor-7"
      footprint="2512"
      pcbX={-4.33}
      pcbY={-9.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N23",
        pin2: "net.N26",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-4"
      footprint="1206"
      pcbX={0.08}
      pcbY={0.36}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={23.65}
      pcbY={7.01}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N17",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={12.77}
      pcbY={-20.6}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N13",
        pin1: "net.N14",
        pin2: "net.N31",
      }}
      type="bjt"
    />
  </board>
)
