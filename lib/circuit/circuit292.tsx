/** Randomly generated circuit 292. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="53.34mm"
    height="52.53mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-14.22}
      pcbY={-12.53}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
        pin3: "net.N40",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="qfp48"
      pcbX={18.18}
      pcbY={-18.37}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin38: "net.N1",
        pin35: "net.N1",
        pin15: "net.N1",
        pin8: "net.N2",
        pin14: "net.N4",
        pin43: "net.N5",
        pin23: "net.N5",
        pin5: "net.N5",
        pin45: "net.N6",
        pin31: "net.N7",
        pin47: "net.N8",
        pin24: "net.N9",
        pin2: "net.N9",
        pin4: "net.N10",
        pin41: "net.N10",
        pin27: "net.N10",
        pin3: "net.N12",
        pin48: "net.N14",
        pin22: "net.N15",
        pin34: "net.N16",
        pin11: "net.N17",
        pin32: "net.N18",
        pin26: "net.N18",
        pin18: "net.N19",
        pin9: "net.N20",
        pin21: "net.N21",
        pin17: "net.N23",
        pin42: "net.N23",
        pin30: "net.N24",
        pin29: "net.N25",
        pin1: "net.N25",
        pin37: "net.N27",
        pin33: "net.N28",
        pin7: "net.N29",
        pin28: "net.N30",
        pin36: "net.N30",
        pin10: "net.N31",
        pin25: "net.N32",
        pin46: "net.N33",
        pin40: "net.N34",
        pin20: "net.N36",
        pin12: "net.N36",
        pin13: "net.N37",
        pin16: "net.N38",
        pin6: "net.N38",
        pin44: "net.N39",
        pin19: "net.N39",
        pin39: "net.N40",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={4.93}
      pcbY={-18.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N33",
        pin2: "net.N36",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={5.11}
      pcbY={3.94}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N21",
        pin2: "net.N37",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-9.03}
      pcbY={14.69}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N6",
        pin3: "net.N6",
        pin2: "net.N31",
        pin1: "net.N34",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={-21.49}
      pcbY={2.24}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={20.1}
      pcbY={3.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N28",
        pin1: "net.N37",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={3.78}
      pcbY={12.07}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N30",
        pin1: "net.N34",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-10.64}
      pcbY={8.6}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N17",
        pin2: "net.N34",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={-19.3}
      pcbY={-5.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N21",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-3.04}
      pcbY={3.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin3: "net.N24",
        pin2: "net.N33",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-11.11}
      pcbY={-22.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N4",
        pin2: "net.N12",
        pin4: "net.N17",
        pin3: "net.N23",
        pin1: "net.N23",
        pin5: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={4.56}
      pcbY={-11.31}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={13.04}
      pcbY={11.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N20",
        pin2: "net.N38",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-6"
      footprint="axial_p0.2in"
      pcbX={-2.97}
      pcbY={-9.45}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N18",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-4.61}
      pcbY={21.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N16",
        pin2: "net.N19",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-20.39}
      pcbY={19.77}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N22",
        pin3: "net.N32",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-21.33}
      pcbY={-11.99}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N14",
        pin3: "net.N26",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={2.59}
      pcbY={-4.82}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={-21.07}
      pcbY={11.62}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-7"
      footprint="axial_p0.2in"
      pcbX={11.41}
      pcbY={-3.61}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N21",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={6.77}
      pcbY={20.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N13",
        pin2: "net.N20",
        pin1: "net.N32",
        pin4: "net.N35",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-12.41}
      pcbY={2.4}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N35",
        pin1: "net.N40",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="axial_p0.2in"
      pcbX={-4.66}
      pcbY={-15.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-23"
      pcbX={21.87}
      pcbY={10.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N29",
        pin3: "net.N36",
      }}
      type="mosfet"
    />
    <diode
      name="diode-8"
      footprint="sod323"
      pcbX={21.17}
      pcbY={19.12}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N11",
        pin2: "net.N22",
      }}
    />
    <transistor
      name="transistor-7"
      footprint="SOT-23"
      pcbX={20.47}
      pcbY={-4.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N27",
        pin3: "net.N30",
      }}
      type="npn"
    />
  </board>
)
