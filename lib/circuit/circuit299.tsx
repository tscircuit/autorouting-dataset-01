/** Randomly generated circuit 299. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="45.54mm" height="39.78mm">
    <diode name="diode-1" footprint="sod323" pcbX={-8.49} pcbY={13.40} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
    <diode name="diode-2" footprint="sod323" pcbX={6.56} pcbY={13.90} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={14.58} pcbY={12.50} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.79} pcbY={6.84} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={-16.02} pcbY={-13.31} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0805" pcbX={1.52} pcbY={-4.46} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod123" pcbX={-14.53} pcbY={-0.02} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.37} pcbY={-7.63} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin2: "net.N9",
      }} type="bjt" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={9.47} pcbY={-6.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-16.99} pcbY={-5.25} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N14",
      }} type="jfet" />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={9.13} pcbY={-16.14} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N3",
        pin2: "net.N3",
        pin3: "net.N12",
        pin5: "net.N13",
        pin1: "net.N14",
        pin4: "net.N15",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-5" footprint="sod323" pcbX={-7.06} pcbY={-0.10} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={1.39} pcbY={7.22} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N11",
        pin1: "net.N13",
        pin2: "net.N15",
      }} type="jfet" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-8.45} pcbY={8.89} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-3" footprint="1210" pcbX={-17.75} pcbY={14.49} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={-8.59} pcbY={-14.19} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} resistance="1k" />
    <diode name="diode-6" footprint="sod123" pcbX={17.67} pcbY={5.94} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={16.95} pcbY={-8.91} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} resistance="1k" />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={-0.56} pcbY={14.61} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
