/** Randomly generated circuit 230. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="38.55mm" height="43.68mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={4.27} pcbY={13.02} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={-12.93} pcbY={-15.40} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={12.75} pcbY={-3.37} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={2.79} pcbY={-5.14} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="1210" pcbX={-4.55} pcbY={-14.77} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={13.68} pcbY={-12.84} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="2512" pcbX={-13.04} pcbY={4.07} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={11.33} pcbY={6.06} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0805" pcbX={-2.59} pcbY={13.43} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={13.89} pcbY={15.90} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={5.73} pcbY={-14.53} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-4.77} pcbY={-4.25} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0805" pcbX={4.96} pcbY={4.75} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-7" footprint="1210" pcbX={-13.96} pcbY={-6.85} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-3.55} pcbY={5.51} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N3",
        pin3: "net.N8",
        pin1: "net.N8",
      }} type="mosfet" />
    <capacitor name="capacitor-8" footprint="0805" pcbX={-12.73} pcbY={16.08} pcbRotation={270.00} layer="bottom" connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
