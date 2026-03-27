/** Randomly generated circuit 283. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.14mm" height="40.11mm">
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={14.47} pcbY={-5.29} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N8",
        pin3: "net.N10",
        pin6: "net.N17",
        pin4: "net.N23",
        pin2: "net.N24",
        pin5: "net.N27",
      }} pinCount={6} pitch="2.54mm" />
    <chip name="chip-1" footprint="qfp48" pcbX={-16.67} pcbY={-12.15} pcbRotation={0.00} layer="top" connections={{
        pin5: "net.N1",
        pin8: "net.N1",
        pin32: "net.N1",
        pin25: "net.N2",
        pin11: "net.N3",
        pin19: "net.N4",
        pin6: "net.N5",
        pin36: "net.N5",
        pin38: "net.N6",
        pin18: "net.N6",
        pin9: "net.N7",
        pin22: "net.N7",
        pin42: "net.N7",
        pin4: "net.N8",
        pin39: "net.N9",
        pin28: "net.N9",
        pin15: "net.N10",
        pin47: "net.N10",
        pin35: "net.N12",
        pin17: "net.N13",
        pin45: "net.N13",
        pin40: "net.N14",
        pin20: "net.N14",
        pin12: "net.N15",
        pin10: "net.N15",
        pin16: "net.N15",
        pin2: "net.N15",
        pin34: "net.N16",
        pin29: "net.N16",
        pin13: "net.N19",
        pin30: "net.N20",
        pin26: "net.N21",
        pin1: "net.N22",
        pin37: "net.N22",
        pin41: "net.N23",
        pin44: "net.N23",
        pin33: "net.N24",
        pin48: "net.N25",
        pin14: "net.N25",
        pin21: "net.N25",
        pin43: "net.N26",
        pin3: "net.N26",
        pin31: "net.N27",
        pin24: "net.N27",
        pin7: "net.N28",
        pin46: "net.N29",
        pin23: "net.N29",
        pin27: "net.N29",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-8.22} pcbY={14.17} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-4.46} pcbY={-15.25} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N2",
        pin3: "net.N9",
        pin1: "net.N16",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0805" pcbX={8.57} pcbY={-11.76} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N16",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={17.32} pcbY={-12.86} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N20",
        pin3: "net.N21",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-0.09} pcbY={-6.99} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N25",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="2512" pcbX={18.00} pcbY={15.14} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N9",
        pin2: "net.N24",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={1.14} pcbY={0.73} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={1.35} pcbY={7.77} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N19",
      }} />
    <inductor name="inductor-2" footprint="0805" pcbX={-7.99} pcbY={0.45} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N17",
        pin2: "net.N29",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="1210" pcbX={-15.88} pcbY={14.88} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="1210" pcbX={17.78} pcbY={7.44} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0805" pcbX={-10.37} pcbY={8.85} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N17",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="sod123" pcbX={-5.17} pcbY={-6.35} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }} />
    <resistor name="resistor-2" footprint="2512" pcbX={-18.00} pcbY={0.40} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N29",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0603" pcbX={16.23} pcbY={-1.06} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod123" pcbX={1.12} pcbY={14.76} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N26",
      }} />
    <inductor name="inductor-5" footprint="1206" pcbX={1.78} pcbY={-14.27} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N22",
        pin2: "net.N28",
      }} inductance="10uH" />
  </board>
)
