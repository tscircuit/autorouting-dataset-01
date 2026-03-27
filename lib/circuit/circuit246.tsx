/** Randomly generated circuit 246. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="58.68mm"
    height="48.22mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.29}
      pcbY={3.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin3: "net.N8",
        pin2: "net.N41",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-3.01}
      pcbY={10.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N31",
        pin2: "net.N44",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-20.11}
      pcbY={18.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N38",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={6.67}
      pcbY={6.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N34",
        pin1: "net.N47",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.41}
      pcbY={19.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N22",
        pin3: "net.N28",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={14.18}
      pcbY={-18.1}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N32",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={23.33}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N29",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-5.37}
      pcbY={-3.2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N35",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={21.2}
      pcbY={18.55}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="tssop16"
      pcbX={-1.58}
      pcbY={-11.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N4",
        pin8: "net.N10",
        pin2: "net.N13",
        pin10: "net.N19",
        pin15: "net.N19",
        pin7: "net.N22",
        pin1: "net.N23",
        pin9: "net.N24",
        pin4: "net.N26",
        pin12: "net.N26",
        pin3: "net.N33",
        pin6: "net.N33",
        pin11: "net.N36",
        pin13: "net.N37",
        pin16: "net.N39",
        pin14: "net.N47",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={20.66}
      pcbY={4.38}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N45",
        pin2: "net.N45",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={8.15}
      pcbY={-10.07}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N45",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={14.86}
      pcbY={-10.83}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-23.09}
      pcbY={9.94}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N23",
        pin2: "net.N28",
        pin3: "net.N46",
      }}
      type="mosfet"
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={12.13}
      pcbY={0.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N40",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="2512"
      pcbX={-22.77}
      pcbY={-19.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N34",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-4"
      footprint="1210"
      pcbX={23.23}
      pcbY={10.2}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="1206"
      pcbX={5.12}
      pcbY={12.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="1206"
      pcbX={21.49}
      pcbY={-11.85}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N25",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-13.39}
      pcbY={0.75}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin5: "net.N12",
        pin1: "net.N20",
        pin6: "net.N24",
        pin4: "net.N31",
        pin2: "net.N39",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="bga64"
      pcbX={-23.35}
      pcbY={-1.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin28: "net.N1",
        pin11: "net.N1",
        pin40: "net.N2",
        pin19: "net.N2",
        pin12: "net.N2",
        pin26: "net.N3",
        pin45: "net.N4",
        pin52: "net.N4",
        pin24: "net.N5",
        pin49: "net.N6",
        pin3: "net.N7",
        pin44: "net.N9",
        pin64: "net.N10",
        pin54: "net.N11",
        pin16: "net.N11",
        pin37: "net.N13",
        pin47: "net.N13",
        pin34: "net.N13",
        pin14: "net.N14",
        pin20: "net.N15",
        pin35: "net.N15",
        pin25: "net.N15",
        pin21: "net.N16",
        pin51: "net.N17",
        pin18: "net.N17",
        pin5: "net.N18",
        pin1: "net.N19",
        pin60: "net.N19",
        pin33: "net.N20",
        pin8: "net.N20",
        pin56: "net.N21",
        pin38: "net.N21",
        pin48: "net.N21",
        pin7: "net.N23",
        pin61: "net.N25",
        pin32: "net.N25",
        pin58: "net.N27",
        pin15: "net.N27",
        pin4: "net.N27",
        pin27: "net.N28",
        pin9: "net.N29",
        pin43: "net.N29",
        pin31: "net.N30",
        pin46: "net.N30",
        pin36: "net.N31",
        pin55: "net.N32",
        pin42: "net.N35",
        pin63: "net.N36",
        pin17: "net.N36",
        pin6: "net.N37",
        pin22: "net.N37",
        pin50: "net.N37",
        pin62: "net.N38",
        pin30: "net.N40",
        pin10: "net.N40",
        pin59: "net.N41",
        pin57: "net.N42",
        pin23: "net.N42",
        pin53: "net.N43",
        pin13: "net.N43",
        pin39: "net.N44",
        pin2: "net.N46",
        pin41: "net.N46",
        pin29: "net.N47",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={20.37}
      pcbY={-19.08}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin2: "net.N35",
        pin1: "net.N41",
      }}
      type="jfet"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={2.66}
      pcbY={-2.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }}
    />
    <resistor
      name="resistor-5"
      footprint="1210"
      pcbX={-12.86}
      pcbY={-19.09}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N36",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="2512"
      pcbX={-12.71}
      pcbY={13.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N27",
        pin2: "net.N45",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-5"
      footprint="axial_p0.2in"
      pcbX={-14.91}
      pcbY={-12.05}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }}
    />
    <diode
      name="diode-6"
      footprint="axial_p0.2in"
      pcbX={14.05}
      pcbY={-3.69}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N30",
      }}
    />
    <diode
      name="diode-7"
      footprint="sod323"
      pcbX={4.14}
      pcbY={-20.19}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N32",
        pin2: "net.N41",
      }}
    />
  </board>
)
