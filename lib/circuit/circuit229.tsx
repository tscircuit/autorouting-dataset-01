/** Randomly generated circuit 229. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.03mm" height="41.83mm">
    <capacitor name="capacitor-1" footprint="2512" pcbX={-6.14} pcbY={-8.76} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-9.48} pcbY={7.54} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={19.34} pcbY={14.31} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N5",
      }} type="mosfet" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={17.23} pcbY={0.07} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N15",
        pin2: "net.N20",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={2.79} pcbY={14.14} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin3: "net.N6",
        pin1: "net.N17",
      }} type="jfet" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-1.48} pcbY={1.10} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={15.48} pcbY={-13.44} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-1" footprint="qfn16" pcbX={-19.62} pcbY={-7.45} pcbRotation={0.00} layer="bottom" connections={{
        pin11: "net.N1",
        pin13: "net.N2",
        pin5: "net.N4",
        pin6: "net.N4",
        pin15: "net.N7",
        pin12: "net.N8",
        pin14: "net.N11",
        pin8: "net.N12",
        pin16: "net.N13",
        pin9: "net.N13",
        pin3: "net.N15",
        pin2: "net.N15",
        pin4: "net.N17",
        pin10: "net.N18",
        pin7: "net.N18",
        pin1: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={1.21} pcbY={-16.33} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={15.68} pcbY={6.77} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N19",
        pin2: "net.N20",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="1210" pcbX={4.47} pcbY={-8.57} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod123" pcbX={-20.91} pcbY={15.37} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N12",
      }} />
    <chip name="chip-2" footprint="soic8_p1.27mm" pcbX={-8.66} pcbY={15.11} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N2",
        pin6: "net.N5",
        pin3: "net.N6",
        pin8: "net.N9",
        pin7: "net.N14",
        pin1: "net.N16",
        pin4: "net.N19",
        pin5: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={13.52} pcbY={-7.65} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="0603" pcbX={12.06} pcbY={14.51} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N21",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-8.57} pcbY={-0.48} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin3: "net.N10",
        pin1: "net.N15",
      }} type="bjt" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-16.70} pcbY={5.95} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N11",
        pin3: "net.N21",
      }} type="pnp" />
    <inductor name="inductor-1" footprint="0402" pcbX={7.41} pcbY={1.09} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={-8.15} pcbY={-15.55} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
  </board>
)
