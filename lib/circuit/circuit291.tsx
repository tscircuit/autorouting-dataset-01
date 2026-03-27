/** Randomly generated circuit 291. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.80mm" height="47.32mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-10.56} pcbY={0.68} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N15",
        pin3: "net.N19",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-17.56} pcbY={19.40} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} resistance="1k" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={1.50} pcbY={0.30} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-17.99} pcbY={-10.45} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N12",
        pin2: "net.N13",
        pin1: "net.N16",
      }} type="jfet" />
    <diode name="diode-2" footprint="sod323" pcbX={8.24} pcbY={7.28} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} />
    <capacitor name="capacitor-1" footprint="1206" pcbX={18.67} pcbY={18.13} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={10.53} pcbY={-1.59} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-18.17} pcbY={0.19} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N15",
      }} type="jfet" />
    <diode name="diode-3" footprint="sod123" pcbX={15.26} pcbY={7.08} pcbRotation={270.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} />
    <resistor name="resistor-2" footprint="2512" pcbX={-10.07} pcbY={-7.81} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N18",
      }} resistance="1k" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={2.23} pcbY={16.46} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N19",
      }} type="mosfet" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-17.89} pcbY={-17.51} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={18.80} pcbY={-9.42} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-9.27} pcbY={-18.16} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={10.52} pcbY={17.47} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N17",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-10.25} pcbY={8.75} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-5" footprint="SOT-223" pcbX={0.07} pcbY={8.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin3: "net.N10",
        pin1: "net.N20",
      }} type="pnp" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={-19.15} pcbY={10.06} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N6",
        pin4: "net.N11",
        pin3: "net.N17",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={0.76} pcbY={-11.43} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N9",
        pin2: "net.N20",
      }} />
    <capacitor name="capacitor-4" footprint="1206" pcbX={19.32} pcbY={-17.02} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <diode name="diode-5" footprint="sod123" pcbX={7.04} pcbY={-17.13} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }} />
    <resistor name="resistor-4" footprint="2512" pcbX={8.53} pcbY={-6.04} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="axial_p0.2in" pcbX={20.58} pcbY={1.41} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} resistance="1k" />
    <resistor name="resistor-6" footprint="1210" pcbX={-8.11} pcbY={17.08} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N18",
      }} resistance="1k" />
  </board>
)
