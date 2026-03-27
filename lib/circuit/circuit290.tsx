/** Randomly generated circuit 290. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.45mm" height="43.88mm">
    <inductor name="inductor-1" footprint="1206" pcbX={14.56} pcbY={-15.35} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-15.13} pcbY={-14.38} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N4",
        pin4: "net.N5",
        pin3: "net.N8",
        pin2: "net.N11",
      }} pinCount={4} pitch="2.54mm" />
    <inductor name="inductor-2" footprint="axial_p0.2in" pcbX={13.59} pcbY={5.14} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={2.83} pcbY={-6.08} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.88} pcbY={15.09} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N3",
      }} type="bjt" />
    <pinheader name="pinhead-2" footprint="pinrow4" pcbX={-6.51} pcbY={8.34} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N7",
        pin4: "net.N8",
        pin3: "net.N10",
        pin1: "net.N11",
      }} pinCount={4} pitch="2.54mm" />
    <inductor name="inductor-3" footprint="2512" pcbX={14.65} pcbY={-7.80} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-4.33} pcbY={-6.52} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-4.27} pcbY={15.42} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N3",
        pin3: "net.N6",
        pin2: "net.N9",
      }} type="pnp" />
    <diode name="diode-2" footprint="sod323" pcbX={-14.63} pcbY={1.36} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} />
    <inductor name="inductor-4" footprint="0603" pcbX={4.78} pcbY={14.86} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={4.44} pcbY={-12.75} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-3.03} pcbY={-13.23} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={5.07} pcbY={3.21} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N12",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-14.16} pcbY={-2.34} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="1210" pcbX={16.03} pcbY={13.71} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} inductance="10uH" />
  </board>
)
