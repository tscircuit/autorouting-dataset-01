/** Randomly generated circuit 251. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="56.81mm" height="53.53mm">
    <inductor name="inductor-1" footprint="1206" pcbX={19.40} pcbY={9.23} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-11.27} pcbY={-9.28} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N21",
        pin1: "net.N40",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="1210" pcbX={-10.54} pcbY={6.59} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N28",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={8.94} pcbY={23.02} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N1",
        pin1: "net.N16",
        pin5: "net.N18",
        pin4: "net.N20",
        pin3: "net.N21",
        pin2: "net.N39",
      }} pinCount={6} pitch="2.54mm" />
    <resistor name="resistor-1" footprint="1210" pcbX={-1.56} pcbY={-9.81} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N24",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={20.45} pcbY={-0.23} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N14",
        pin3: "net.N25",
        pin1: "net.N33",
      }} type="jfet" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={9.12} pcbY={-11.34} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N4",
        pin2: "net.N5",
        pin1: "net.N41",
      }} type="npn" />
    <diode name="diode-1" footprint="sod323" pcbX={0.41} pcbY={-18.38} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N34",
      }} />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-21.50} pcbY={-19.98} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N24",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={1.24} pcbY={-1.97} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N15",
        pin2: "net.N35",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="2512" pcbX={0.12} pcbY={14.59} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N31",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="axial_p0.2in" pcbX={-20.37} pcbY={22.09} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N32",
        pin2: "net.N35",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="1206" pcbX={11.26} pcbY={-20.54} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N27",
        pin1: "net.N38",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="2512" pcbX={21.64} pcbY={17.94} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N32",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={22.17} pcbY={-17.86} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N12",
        pin2: "net.N33",
      }} />
    <capacitor name="capacitor-5" footprint="0805" pcbX={8.42} pcbY={7.69} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N37",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={-0.07} pcbY={6.69} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N42",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-21.96} pcbY={-8.21} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N11",
        pin2: "net.N19",
        pin1: "net.N31",
      }} type="pnp" />
    <pinheader name="pinhead-2" footprint="pinrow4" pcbX={-11.52} pcbY={-19.38} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N21",
        pin2: "net.N37",
        pin4: "net.N38",
        pin3: "net.N42",
      }} pinCount={4} pitch="2.54mm" />
    <chip name="chip-1" footprint="bga64" pcbX={9.55} pcbY={-1.81} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N1",
        pin16: "net.N2",
        pin18: "net.N2",
        pin60: "net.N3",
        pin21: "net.N4",
        pin63: "net.N4",
        pin36: "net.N4",
        pin12: "net.N5",
        pin10: "net.N5",
        pin39: "net.N5",
        pin13: "net.N6",
        pin14: "net.N6",
        pin35: "net.N7",
        pin6: "net.N8",
        pin61: "net.N9",
        pin52: "net.N10",
        pin2: "net.N11",
        pin8: "net.N12",
        pin44: "net.N12",
        pin30: "net.N13",
        pin23: "net.N14",
        pin26: "net.N15",
        pin38: "net.N16",
        pin17: "net.N16",
        pin20: "net.N17",
        pin7: "net.N17",
        pin37: "net.N18",
        pin29: "net.N20",
        pin33: "net.N21",
        pin40: "net.N22",
        pin28: "net.N23",
        pin3: "net.N24",
        pin54: "net.N25",
        pin56: "net.N25",
        pin57: "net.N25",
        pin25: "net.N26",
        pin64: "net.N26",
        pin15: "net.N26",
        pin11: "net.N28",
        pin1: "net.N28",
        pin53: "net.N29",
        pin55: "net.N29",
        pin32: "net.N29",
        pin41: "net.N29",
        pin34: "net.N30",
        pin50: "net.N30",
        pin58: "net.N30",
        pin31: "net.N31",
        pin42: "net.N32",
        pin47: "net.N32",
        pin27: "net.N33",
        pin5: "net.N33",
        pin49: "net.N34",
        pin59: "net.N34",
        pin48: "net.N35",
        pin62: "net.N36",
        pin22: "net.N36",
        pin19: "net.N39",
        pin9: "net.N39",
        pin43: "net.N40",
        pin24: "net.N41",
        pin51: "net.N42",
        pin46: "net.N42",
        pin45: "net.N43",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-7" footprint="1206" pcbX={-22.25} pcbY={0.59} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N27",
      }} capacitance="0.1uF" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={19.34} pcbY={-8.85} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin3: "net.N18",
        pin1: "net.N43",
      }} type="npn" />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={-10.50} pcbY={16.62} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N19",
        pin2: "net.N23",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-5" footprint="1210" pcbX={-21.57} pcbY={11.63} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N17",
        pin2: "net.N27",
      }} resistance="1k" />
    <pinheader name="pinhead-4" footprint="pinrow4" pcbX={-10.66} pcbY={-1.49} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N18",
        pin1: "net.N22",
        pin3: "net.N30",
        pin4: "net.N31",
      }} pinCount={4} pitch="2.54mm" />
  </board>
)
