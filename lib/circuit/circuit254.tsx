/** Randomly generated circuit 254. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="40.01mm" height="41.55mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={13.40} pcbY={-15.31} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin2: "net.N4",
      }} type="jfet" />
    <resistor name="resistor-1" footprint="1210" pcbX={2.44} pcbY={5.08} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.84} pcbY={14.05} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={11.96} pcbY={3.91} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N6",
      }} type="jfet" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.93} pcbY={4.35} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="1210" pcbX={-12.28} pcbY={7.16} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={-7.86} pcbY={-3.87} pcbRotation={0.00} layer="top" connections={{
        pin5: "net.N1",
        pin6: "net.N5",
        pin2: "net.N8",
        pin3: "net.N8",
        pin1: "net.N9",
        pin4: "net.N11",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-1" footprint="sod123" pcbX={3.14} pcbY={11.94} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-13.70} pcbY={15.96} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="1210" pcbX={2.85} pcbY={-14.07} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={14.38} pcbY={15.18} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin3: "net.N11",
        pin2: "net.N12",
      }} type="bjt" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={12.27} pcbY={-6.66} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-2" footprint="2512" pcbX={-3.99} pcbY={-14.20} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={6.96} pcbY={-4.49} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-11.45} pcbY={-13.35} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
