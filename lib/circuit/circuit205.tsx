/** Randomly generated circuit 205. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.69mm" height="39.84mm">
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-12.78} pcbY={-13.63} pcbRotation={180.00} layer="top" connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin4: "net.N5",
        pin2: "net.N16",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-1" footprint="axial_p0.2in" pcbX={-7.14} pcbY={-5.16} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N21",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.52} pcbY={3.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="tssop20" pcbX={5.29} pcbY={-5.25} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N1",
        pin16: "net.N3",
        pin3: "net.N3",
        pin18: "net.N4",
        pin2: "net.N5",
        pin15: "net.N6",
        pin5: "net.N7",
        pin10: "net.N9",
        pin6: "net.N9",
        pin13: "net.N10",
        pin11: "net.N13",
        pin17: "net.N14",
        pin8: "net.N15",
        pin9: "net.N17",
        pin7: "net.N18",
        pin12: "net.N18",
        pin20: "net.N19",
        pin14: "net.N21",
        pin1: "net.N22",
        pin19: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={9.69} pcbY={13.35} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N23",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="1206" pcbX={0.80} pcbY={-14.55} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N23",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={-21.09} pcbY={-3.92} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N4",
        pin4: "net.N8",
        pin5: "net.N11",
        pin3: "net.N13",
        pin6: "net.N16",
        pin1: "net.N23",
      }} pinCount={6} pitch="2.54mm" />
    <pinheader name="pinhead-3" footprint="pinrow6" pcbX={6.37} pcbY={2.90} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N1",
        pin4: "net.N4",
        pin5: "net.N12",
        pin2: "net.N12",
        pin1: "net.N16",
        pin3: "net.N21",
      }} pinCount={6} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="0805" pcbX={16.79} pcbY={13.96} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="1210" pcbX={-0.32} pcbY={11.60} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={15.39} pcbY={-13.52} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N17",
      }} />
    <diode name="diode-2" footprint="sod123" pcbX={17.69} pcbY={-5.24} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-3" footprint="0805" pcbX={10.26} pcbY={-13.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={16.17} pcbY={8.96} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin3: "net.N15",
        pin1: "net.N17",
      }} type="npn" />
    <pinheader name="pinhead-4" footprint="pinrow6" pcbX={-14.75} pcbY={12.61} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin6: "net.N6",
        pin1: "net.N7",
        pin4: "net.N20",
        pin5: "net.N22",
      }} pinCount={6} pitch="2.54mm" />
    <pinheader name="pinhead-5" footprint="pinrow2" pcbX={-13.32} pcbY={3.38} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N20",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
