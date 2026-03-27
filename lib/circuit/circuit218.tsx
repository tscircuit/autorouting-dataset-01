/** Randomly generated circuit 218. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="45.13mm" height="36.76mm">
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={4.63} pcbY={-3.87} pcbRotation={270.00} layer="bottom" connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={-4.56} pcbY={10.84} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} />
    <resistor name="resistor-1" footprint="axial_p0.2in" pcbX={15.34} pcbY={-3.87} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="1206" pcbX={-6.08} pcbY={4.71} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="sod123" pcbX={-13.25} pcbY={11.67} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-2" footprint="2512" pcbX={-16.33} pcbY={-10.59} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={4.53} pcbY={12.14} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-3" footprint="1210" pcbX={15.11} pcbY={2.06} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.33} pcbY={-11.64} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N8",
        pin3: "net.N10",
      }} type="mosfet" />
    <diode name="diode-5" footprint="axial_p0.2in" pcbX={5.83} pcbY={4.07} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={14.09} pcbY={13.58} pcbRotation={270.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N5",
        pin3: "net.N10",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0805" pcbX={13.96} pcbY={-13.01} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-16.93} pcbY={4.25} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N10",
        pin3: "net.N11",
        pin1: "net.N11",
      }} type="mosfet" />
    <resistor name="resistor-4" footprint="1206" pcbX={5.00} pcbY={-11.99} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-2.92} pcbY={-2.61} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
  </board>
)
