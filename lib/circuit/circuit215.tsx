/** Randomly generated circuit 215. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.53mm" height="40.98mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={13.87} pcbY={14.88} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N2",
      }} type="bjt" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.92} pcbY={-3.23} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-16.85} pcbY={-15.57} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-15.51} pcbY={2.62} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={14.09} pcbY={-6.12} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-2" footprint="pinrow4" pcbX={6.20} pcbY={-12.45} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin4: "net.N6",
        pin1: "net.N7",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-7.95} pcbY={-14.47} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-6.02} pcbY={5.92} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N6",
        pin3: "net.N8",
      }} type="mosfet" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={4.26} pcbY={2.66} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} />
    <capacitor name="capacitor-4" footprint="2512" pcbX={14.56} pcbY={2.74} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={-14.80} pcbY={12.93} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N7",
        pin3: "net.N7",
        pin4: "net.N9",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={16.89} pcbY={-12.14} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="axial_p0.2in" pcbX={-5.80} pcbY={14.95} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="1210" pcbX={-13.75} pcbY={-7.46} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={6.26} pcbY={13.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N12",
      }} type="npn" />
  </board>
)
