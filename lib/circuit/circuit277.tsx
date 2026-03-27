/** Randomly generated circuit 277. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.86mm" height="42.15mm">
    <capacitor name="capacitor-1" footprint="1206" pcbX={-14.03} pcbY={13.39} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N23",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.94} pcbY={-7.40} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N6",
        pin1: "net.N14",
        pin2: "net.N22",
      }} type="bjt" />
    <resistor name="resistor-1" footprint="0805" pcbX={-7.35} pcbY={6.05} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N12",
        pin2: "net.N22",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-16.60} pcbY={7.36} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N12",
        pin1: "net.N16",
        pin2: "net.N17",
      }} type="bjt" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-0.37} pcbY={15.04} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N23",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={-15.83} pcbY={-15.42} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-5.82} pcbY={-17.38} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N18",
        pin2: "net.N18",
      }} />
    <capacitor name="capacitor-4" footprint="1210" pcbX={-14.12} pcbY={1.23} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="sod123" pcbX={4.28} pcbY={-8.47} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={15.80} pcbY={8.65} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod323" pcbX={-0.72} pcbY={-2.76} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} />
    <resistor name="resistor-2" footprint="0805" pcbX={5.93} pcbY={5.96} pcbRotation={270.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }} resistance="1k" />
    <diode name="diode-4" footprint="sod323" pcbX={-8.89} pcbY={14.39} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={14.20} pcbY={16.16} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N7",
        pin3: "net.N10",
      }} type="bjt" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={16.41} pcbY={-9.62} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="0402" pcbX={0.54} pcbY={-11.89} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0805" pcbX={6.46} pcbY={15.22} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} resistance="1k" />
    <chip name="chip-1" footprint="qfn32" pcbX={15.53} pcbY={-0.97} pcbRotation={180.00} layer="top" connections={{
        pin14: "net.N1",
        pin21: "net.N1",
        pin24: "net.N2",
        pin8: "net.N3",
        pin18: "net.N3",
        pin20: "net.N4",
        pin29: "net.N4",
        pin28: "net.N5",
        pin6: "net.N6",
        pin3: "net.N7",
        pin32: "net.N7",
        pin9: "net.N8",
        pin16: "net.N8",
        pin11: "net.N10",
        pin4: "net.N10",
        pin19: "net.N11",
        pin30: "net.N11",
        pin2: "net.N11",
        pin31: "net.N12",
        pin22: "net.N13",
        pin25: "net.N13",
        pin17: "net.N15",
        pin5: "net.N16",
        pin26: "net.N16",
        pin1: "net.N16",
        pin27: "net.N17",
        pin13: "net.N18",
        pin15: "net.N19",
        pin7: "net.N19",
        pin23: "net.N21",
        pin10: "net.N21",
        pin12: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
