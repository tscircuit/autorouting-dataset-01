/** Randomly generated circuit 282. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="44.29mm" height="40.82mm">
    <diode name="diode-1" footprint="sod123" pcbX={-4.76} pcbY={4.29} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} />
    <resistor name="resistor-1" footprint="1210" pcbX={-15.46} pcbY={-11.26} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod323" pcbX={-16.35} pcbY={-5.48} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-1" footprint="1206" pcbX={14.60} pcbY={4.51} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-7.46} pcbY={14.55} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N6",
        pin3: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={4.13} pcbY={3.16} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.34} pcbY={-6.03} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="2512" pcbX={15.57} pcbY={-3.38} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0805" pcbX={4.77} pcbY={-11.95} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="1210" pcbX={-15.18} pcbY={13.23} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="2512" pcbX={15.57} pcbY={13.87} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={2.42} pcbY={12.73} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="axial_p0.2in" pcbX={-5.17} pcbY={-12.10} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={15.79} pcbY={-14.66} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-6" footprint="0402" pcbX={-13.66} pcbY={2.66} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-6.54} pcbY={-5.11} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
