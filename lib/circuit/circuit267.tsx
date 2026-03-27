/** Randomly generated circuit 267. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.58mm" height="41.88mm">
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={4.76} pcbY={-4.70} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0805" pcbX={-4.16} pcbY={-13.38} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N17",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="sod323" pcbX={7.95} pcbY={1.30} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N19",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={6.04} pcbY={-13.47} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="1206" pcbX={-14.14} pcbY={16.26} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={14.21} pcbY={7.83} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N5",
        pin3: "net.N12",
        pin2: "net.N17",
      }} type="mosfet" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={15.62} pcbY={-14.83} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="sod123" pcbX={14.50} pcbY={15.46} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} />
    <diode name="diode-3" footprint="sod123" pcbX={-5.53} pcbY={-3.63} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }} />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={-13.85} pcbY={-13.12} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N20",
      }} />
    <resistor name="resistor-2" footprint="2512" pcbX={7.72} pcbY={14.23} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N14",
        pin1: "net.N20",
      }} resistance="1k" />
    <chip name="chip-1" footprint="bga32" pcbX={-5.16} pcbY={4.18} pcbRotation={0.00} layer="top" connections={{
        pin14: "net.N1",
        pin28: "net.N1",
        pin31: "net.N1",
        pin7: "net.N3",
        pin32: "net.N4",
        pin27: "net.N4",
        pin9: "net.N4",
        pin17: "net.N6",
        pin4: "net.N7",
        pin24: "net.N7",
        pin13: "net.N8",
        pin29: "net.N8",
        pin26: "net.N11",
        pin25: "net.N11",
        pin19: "net.N11",
        pin23: "net.N12",
        pin8: "net.N12",
        pin5: "net.N14",
        pin3: "net.N15",
        pin11: "net.N15",
        pin30: "net.N16",
        pin2: "net.N16",
        pin6: "net.N16",
        pin15: "net.N17",
        pin21: "net.N17",
        pin10: "net.N18",
        pin20: "net.N18",
        pin22: "net.N18",
        pin18: "net.N19",
        pin16: "net.N19",
        pin1: "net.N20",
        pin12: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-15.69} pcbY={-3.30} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N2",
        pin2: "net.N10",
        pin1: "net.N11",
      }} type="bjt" />
    <diode name="diode-5" footprint="sod323" pcbX={15.65} pcbY={-3.35} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-16.15} pcbY={4.99} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin3: "net.N8",
        pin1: "net.N14",
      }} type="jfet" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-5.08} pcbY={16.97} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
