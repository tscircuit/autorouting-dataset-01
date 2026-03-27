/** Randomly generated circuit 279. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.78mm" height="43.40mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.12} pcbY={-0.87} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin2: "net.N12",
      }} type="mosfet" />
    <inductor name="inductor-1" footprint="0603" pcbX={8.87} pcbY={-15.38} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.26} pcbY={8.13} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N8",
        pin3: "net.N15",
      }} type="bjt" />
    <capacitor name="capacitor-1" footprint="2512" pcbX={-3.14} pcbY={4.95} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0805" pcbX={-6.53} pcbY={-7.44} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="axial_p0.2in" pcbX={15.15} pcbY={0.56} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="axial_p0.2in" pcbX={6.67} pcbY={-1.50} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={14.69} pcbY={-9.01} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N17",
      }} type="bjt" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={-14.20} pcbY={1.93} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={-6.90} pcbY={-0.09} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N17",
      }} />
    <resistor name="resistor-3" footprint="1210" pcbX={-14.07} pcbY={11.53} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-16.33} pcbY={17.04} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={-2.03} pcbY={-8.08} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N7",
      }} type="mosfet" />
    <inductor name="inductor-3" footprint="0402" pcbX={-0.20} pcbY={15.88} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} inductance="10uH" />
    <transistor name="transistor-5" footprint="SOT-223" pcbX={7.59} pcbY={-7.92} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N16",
        pin3: "net.N16",
      }} type="pnp" />
    <diode name="diode-2" footprint="sod123" pcbX={-6.63} pcbY={10.24} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} />
    <inductor name="inductor-4" footprint="0402" pcbX={8.13} pcbY={15.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N17",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={-15.60} pcbY={-8.87} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="0603" pcbX={-6.94} pcbY={15.15} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod123" pcbX={-5.52} pcbY={-15.99} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }} />
    <transistor name="transistor-6" footprint="SOT-23" pcbX={1.33} pcbY={-13.70} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N9",
        pin3: "net.N11",
        pin1: "net.N15",
      }} type="jfet" />
    <transistor name="transistor-7" footprint="SOT-23" pcbX={-14.94} pcbY={-17.40} pcbRotation={180.00} layer="bottom" connections={{
        pin3: "net.N2",
        pin2: "net.N5",
        pin1: "net.N16",
      }} type="npn" />
    <inductor name="inductor-7" footprint="0603" pcbX={14.04} pcbY={6.10} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }} inductance="10uH" />
  </board>
)
