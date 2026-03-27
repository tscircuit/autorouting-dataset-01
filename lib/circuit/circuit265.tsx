/** Randomly generated circuit 265. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="46.38mm" height="46.56mm">
    <diode name="diode-1" footprint="sod123" pcbX={-6.93} pcbY={0.95} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} />
    <diode name="diode-2" footprint="sod123" pcbX={-9.46} pcbY={7.12} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-1" footprint="1210" pcbX={0.10} pcbY={-8.25} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-3" footprint="sod323" pcbX={7.19} pcbY={-17.22} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-1.13} pcbY={8.08} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={18.89} pcbY={0.66} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin3: "net.N6",
        pin2: "net.N8",
      }} type="pnp" />
    <resistor name="resistor-2" footprint="1210" pcbX={14.95} pcbY={16.28} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-14.94} pcbY={7.76} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={-16.62} pcbY={0.46} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={15.13} pcbY={-17.52} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-7.84} pcbY={16.25} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={8.45} pcbY={-8.73} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N12",
        pin1: "net.N14",
        pin2: "net.N14",
      }} type="bjt" />
    <resistor name="resistor-3" footprint="2512" pcbX={-1.76} pcbY={-16.52} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0805" pcbX={-14.46} pcbY={-9.66} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="axial_p0.2in" pcbX={6.66} pcbY={19.21} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={2.96} pcbY={15.04} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={5.03} pcbY={1.84} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N2",
        pin4: "net.N6",
        pin2: "net.N7",
        pin1: "net.N8",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-4" footprint="1210" pcbX={8.12} pcbY={6.43} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="1210" pcbX={-17.46} pcbY={17.43} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={18.17} pcbY={7.18} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
