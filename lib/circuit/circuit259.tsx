/** Randomly generated circuit 259. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="45.83mm" height="38.15mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={16.08} pcbY={-10.10} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N12",
        pin3: "net.N15",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={-10.81} pcbY={-4.26} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin6: "net.N3",
        pin3: "net.N9",
        pin4: "net.N10",
        pin5: "net.N11",
        pin2: "net.N14",
      }} pinCount={6} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-8.24} pcbY={-13.76} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N4",
        pin2: "net.N5",
        pin1: "net.N5",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-1.19} pcbY={-13.50} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="2512" pcbX={16.34} pcbY={9.55} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-9.15} pcbY={0.84} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="1210" pcbX={15.30} pcbY={0.54} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0805" pcbX={-2.26} pcbY={15.26} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-16.84} pcbY={-11.32} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N4",
      }} type="jfet" />
    <diode name="diode-1" footprint="sod123" pcbX={-8.01} pcbY={14.25} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-15.25} pcbY={6.02} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="0402" pcbX={7.49} pcbY={-1.35} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-3.51} pcbY={7.98} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-7.97} pcbY={7.50} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} inductance="10uH" />
    <pinheader name="pinhead-3" footprint="pinrow6" pcbX={12.82} pcbY={-15.16} pcbRotation={0.00} layer="top" connections={{
        pin5: "net.N2",
        pin2: "net.N5",
        pin6: "net.N7",
        pin4: "net.N8",
        pin1: "net.N10",
        pin3: "net.N14",
      }} pinCount={6} pitch="2.54mm" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={6.96} pcbY={13.63} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin3: "net.N6",
        pin2: "net.N6",
      }} type="mosfet" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={1.99} pcbY={-1.86} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} />
  </board>
)
