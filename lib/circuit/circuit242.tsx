/** Randomly generated circuit 242. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="44.61mm" height="46.55mm">
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-15.32} pcbY={6.94} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N19",
        pin1: "net.N44",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={14.75} pcbY={4.54} pcbRotation={180.00} layer="top" connections={{
        pin4: "net.N7",
        pin2: "net.N10",
        pin3: "net.N26",
        pin1: "net.N39",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-16.50} pcbY={16.90} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N10",
        pin3: "net.N36",
        pin1: "net.N38",
      }} type="pnp" />
    <chip name="chip-1" footprint="qfp48" pcbX={-2.72} pcbY={15.38} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N2",
        pin33: "net.N3",
        pin16: "net.N4",
        pin45: "net.N5",
        pin5: "net.N5",
        pin13: "net.N5",
        pin48: "net.N8",
        pin35: "net.N9",
        pin27: "net.N9",
        pin6: "net.N9",
        pin2: "net.N11",
        pin34: "net.N12",
        pin25: "net.N13",
        pin23: "net.N13",
        pin19: "net.N16",
        pin42: "net.N16",
        pin46: "net.N17",
        pin40: "net.N18",
        pin18: "net.N18",
        pin38: "net.N18",
        pin1: "net.N19",
        pin8: "net.N19",
        pin10: "net.N21",
        pin24: "net.N22",
        pin11: "net.N24",
        pin20: "net.N24",
        pin37: "net.N25",
        pin12: "net.N27",
        pin39: "net.N29",
        pin21: "net.N31",
        pin14: "net.N31",
        pin26: "net.N33",
        pin15: "net.N34",
        pin44: "net.N35",
        pin32: "net.N36",
        pin43: "net.N37",
        pin22: "net.N38",
        pin47: "net.N42",
        pin9: "net.N42",
        pin17: "net.N43",
        pin36: "net.N44",
        pin31: "net.N44",
        pin29: "net.N45",
        pin7: "net.N45",
        pin4: "net.N47",
        pin28: "net.N47",
        pin30: "net.N48",
        pin41: "net.N48",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="bga64" pcbX={15.90} pcbY={17.28} pcbRotation={0.00} layer="bottom" connections={{
        pin63: "net.N1",
        pin47: "net.N1",
        pin60: "net.N2",
        pin16: "net.N3",
        pin56: "net.N4",
        pin20: "net.N4",
        pin21: "net.N5",
        pin51: "net.N6",
        pin58: "net.N7",
        pin15: "net.N7",
        pin61: "net.N8",
        pin5: "net.N9",
        pin12: "net.N10",
        pin48: "net.N11",
        pin13: "net.N12",
        pin3: "net.N12",
        pin31: "net.N13",
        pin22: "net.N14",
        pin62: "net.N14",
        pin42: "net.N15",
        pin23: "net.N15",
        pin2: "net.N15",
        pin54: "net.N16",
        pin25: "net.N17",
        pin11: "net.N19",
        pin64: "net.N20",
        pin28: "net.N21",
        pin39: "net.N22",
        pin35: "net.N23",
        pin57: "net.N23",
        pin6: "net.N24",
        pin24: "net.N25",
        pin44: "net.N26",
        pin40: "net.N27",
        pin49: "net.N27",
        pin30: "net.N28",
        pin10: "net.N28",
        pin50: "net.N28",
        pin7: "net.N29",
        pin4: "net.N30",
        pin17: "net.N30",
        pin29: "net.N31",
        pin8: "net.N32",
        pin9: "net.N32",
        pin32: "net.N33",
        pin19: "net.N33",
        pin41: "net.N34",
        pin26: "net.N36",
        pin45: "net.N36",
        pin18: "net.N39",
        pin38: "net.N40",
        pin1: "net.N40",
        pin59: "net.N41",
        pin36: "net.N42",
        pin55: "net.N42",
        pin33: "net.N43",
        pin43: "net.N43",
        pin14: "net.N44",
        pin34: "net.N45",
        pin46: "net.N46",
        pin37: "net.N46",
        pin53: "net.N46",
        pin52: "net.N47",
        pin27: "net.N48",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="sod323" pcbX={-15.43} pcbY={-4.79} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N29",
        pin1: "net.N37",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={3.38} pcbY={1.17} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N10",
        pin3: "net.N20",
        pin2: "net.N34",
      }} type="bjt" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-6.34} pcbY={-7.23} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N25",
        pin2: "net.N25",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="1210" pcbX={10.43} pcbY={-14.24} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N23",
        pin1: "net.N35",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="1206" pcbX={-7.45} pcbY={3.60} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N38",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="1206" pcbX={2.81} pcbY={-6.15} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N46",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0805" pcbX={4.13} pcbY={-13.88} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N31",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={17.53} pcbY={-9.31} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N14",
        pin6: "net.N21",
        pin2: "net.N30",
        pin4: "net.N41",
        pin3: "net.N45",
        pin5: "net.N47",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-2.78} pcbY={-13.84} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N16",
        pin1: "net.N29",
      }} />
    <resistor name="resistor-1" footprint="2512" pcbX={-15.72} pcbY={-17.03} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N30",
        pin2: "net.N37",
      }} resistance="1k" />
  </board>
)
