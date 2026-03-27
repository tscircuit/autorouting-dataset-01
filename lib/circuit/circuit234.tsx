/** Randomly generated circuit 234. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="38.61mm" height="37.93mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={12.02} pcbY={12.58} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin3: "net.N6",
        pin2: "net.N6",
      }} type="bjt" />
    <inductor name="inductor-1" footprint="axial_p0.2in" pcbX={-13.07} pcbY={-11.04} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={14.05} pcbY={-5.38} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0805" pcbX={-1.39} pcbY={-13.21} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={11.44} pcbY={0.43} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="1206" pcbX={-13.44} pcbY={-4.28} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={4.79} pcbY={11.83} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={3.83} pcbY={6.52} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N4",
        pin4: "net.N7",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-5.54} pcbY={6.13} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N10",
        pin3: "net.N12",
      }} type="pnp" />
    <inductor name="inductor-4" footprint="0805" pcbX={-3.08} pcbY={14.14} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="2512" pcbX={-3.74} pcbY={-4.76} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod323" pcbX={4.43} pcbY={-13.40} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-14.16} pcbY={12.71} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin3: "net.N9",
        pin1: "net.N11",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={12.15} pcbY={-12.01} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod323" pcbX={4.18} pcbY={-4.14} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} />
  </board>
)
