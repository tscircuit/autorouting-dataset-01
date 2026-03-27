/** Randomly generated circuit 274. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="48.86mm" height="41.85mm">
    <resistor name="resistor-1" footprint="1210" pcbX={0.95} pcbY={-7.22} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={16.37} pcbY={16.63} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin1: "net.N5",
      }} type="mosfet" />
    <resistor name="resistor-2" footprint="0402" pcbX={4.03} pcbY={7.72} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-5.40} pcbY={-6.33} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-17.22} pcbY={13.39} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin3: "net.N8",
        pin2: "net.N12",
      }} type="bjt" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={14.91} pcbY={10.57} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin4: "net.N8",
        pin1: "net.N14",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={15.57} pcbY={1.14} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={17.19} pcbY={-11.10} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-8.43} pcbY={14.61} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-18.76} pcbY={1.63} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N7",
        pin2: "net.N10",
        pin1: "net.N11",
      }} type="jfet" />
    <capacitor name="capacitor-3" footprint="1210" pcbX={-3.33} pcbY={6.80} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="axial_p0.2in" pcbX={-13.13} pcbY={-9.93} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="sod323" pcbX={17.07} pcbY={-6.89} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} />
    <diode name="diode-2" footprint="sod123" pcbX={-0.85} pcbY={16.12} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} />
    <resistor name="resistor-4" footprint="0402" pcbX={-8.36} pcbY={-15.49} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} resistance="1k" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={-19.63} pcbY={-14.41} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N6",
        pin3: "net.N10",
      }} type="pnp" />
    <capacitor name="capacitor-4" footprint="1210" pcbX={2.65} pcbY={-1.87} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-2" footprint="pinrow4" pcbX={9.81} pcbY={-17.18} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N1",
        pin4: "net.N4",
        pin2: "net.N13",
        pin1: "net.N13",
      }} pinCount={4} pitch="2.54mm" />
  </board>
)
