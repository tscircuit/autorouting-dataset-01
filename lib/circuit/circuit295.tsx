/** Randomly generated circuit 295. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="48.41mm" height="38.34mm">
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-6.67} pcbY={9.59} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.48} pcbY={-14.12} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="1210" pcbX={-17.42} pcbY={-14.15} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N20",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-6.53} pcbY={-5.44} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-2" footprint="sod323" pcbX={-5.02} pcbY={14.52} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={-15.43} pcbY={12.57} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N22",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-16.59} pcbY={-4.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N21",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="1206" pcbX={14.96} pcbY={15.07} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="qfp32" pcbX={17.30} pcbY={-6.32} pcbRotation={0.00} layer="top" connections={{
        pin16: "net.N1",
        pin18: "net.N1",
        pin23: "net.N2",
        pin2: "net.N2",
        pin12: "net.N3",
        pin7: "net.N4",
        pin17: "net.N4",
        pin10: "net.N4",
        pin24: "net.N5",
        pin9: "net.N6",
        pin30: "net.N7",
        pin26: "net.N7",
        pin6: "net.N8",
        pin28: "net.N9",
        pin21: "net.N9",
        pin14: "net.N9",
        pin29: "net.N10",
        pin8: "net.N11",
        pin1: "net.N11",
        pin11: "net.N12",
        pin25: "net.N12",
        pin13: "net.N13",
        pin20: "net.N15",
        pin32: "net.N17",
        pin15: "net.N18",
        pin3: "net.N18",
        pin27: "net.N19",
        pin4: "net.N19",
        pin31: "net.N19",
        pin19: "net.N20",
        pin22: "net.N22",
        pin5: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="1206" pcbX={5.53} pcbY={-4.60} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="1210" pcbX={6.19} pcbY={2.26} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N16",
        pin2: "net.N21",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinrow6" pcbX={-14.11} pcbY={3.13} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin6: "net.N4",
        pin5: "net.N11",
        pin2: "net.N23",
        pin4: "net.N23",
      }} pinCount={6} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={17.85} pcbY={7.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N16",
        pin3: "net.N16",
      }} type="jfet" />
    <resistor name="resistor-2" footprint="axial_p0.2in" pcbX={6.78} pcbY={13.02} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N9",
        pin2: "net.N21",
      }} resistance="1k" />
    <capacitor name="capacitor-5" footprint="1206" pcbX={-5.92} pcbY={-13.67} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={13.77} pcbY={-15.70} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
  </board>
)
