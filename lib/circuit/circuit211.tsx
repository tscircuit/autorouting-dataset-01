/** Randomly generated circuit 211. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="52.32mm" height="40.74mm">
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-10.34} pcbY={-12.54} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin4: "net.N2",
        pin3: "net.N6",
        pin2: "net.N7",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-1" footprint="sod323" pcbX={-18.82} pcbY={-13.26} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-20.46} pcbY={6.02} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin3: "net.N10",
        pin2: "net.N13",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-18.90} pcbY={-5.63} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N8",
        pin3: "net.N14",
      }} type="pnp" />
    <capacitor name="capacitor-1" footprint="1206" pcbX={1.56} pcbY={-2.61} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.16} pcbY={-5.64} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="2512" pcbX={-8.09} pcbY={7.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={-20.47} pcbY={13.04} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="2512" pcbX={2.14} pcbY={13.80} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-0.27} pcbY={4.74} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="1206" pcbX={19.74} pcbY={-1.51} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-10.45} pcbY={15.12} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="sod323" pcbX={0.59} pcbY={-6.55} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={20.04} pcbY={6.27} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-5" footprint="0402" pcbX={18.71} pcbY={-8.32} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="2512" pcbX={19.59} pcbY={15.70} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} inductance="10uH" />
    <inductor name="inductor-7" footprint="2512" pcbX={-8.09} pcbY={0.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod123" pcbX={7.93} pcbY={-7.09} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-2" footprint="1210" pcbX={-0.55} pcbY={-15.35} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="1206" pcbX={8.99} pcbY={5.34} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} resistance="1k" />
  </board>
)
