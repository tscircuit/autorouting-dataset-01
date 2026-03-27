/** Randomly generated circuit 286. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="46.94mm" height="42.41mm">
    <resistor name="resistor-1" footprint="0603" pcbX={13.74} pcbY={6.61} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={15.74} pcbY={-15.44} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="2512" pcbX={-16.32} pcbY={-14.63} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="1210" pcbX={-16.50} pcbY={4.63} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N16",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="qfp16" pcbX={17.57} pcbY={-3.79} pcbRotation={0.00} layer="top" connections={{
        pin9: "net.N2",
        pin10: "net.N3",
        pin4: "net.N3",
        pin11: "net.N4",
        pin12: "net.N4",
        pin7: "net.N6",
        pin3: "net.N7",
        pin1: "net.N8",
        pin2: "net.N9",
        pin15: "net.N9",
        pin13: "net.N12",
        pin8: "net.N14",
        pin16: "net.N15",
        pin5: "net.N15",
        pin6: "net.N15",
        pin14: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="1206" pcbX={-5.63} pcbY={5.10} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="1206" pcbX={13.98} pcbY={14.60} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="2512" pcbX={4.34} pcbY={4.39} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <inductor name="inductor-5" footprint="0603" pcbX={3.12} pcbY={-12.64} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="1210" pcbX={-5.56} pcbY={-4.27} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={3.29} pcbY={12.29} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N8",
        pin3: "net.N11",
      }} type="npn" />
    <diode name="diode-1" footprint="sod123" pcbX={3.57} pcbY={-4.05} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-6.79} pcbY={-14.91} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin3: "net.N13",
        pin2: "net.N13",
      }} type="jfet" />
    <resistor name="resistor-2" footprint="1210" pcbX={-5.95} pcbY={16.15} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod123" pcbX={-14.63} pcbY={13.26} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-16.04} pcbY={-3.11} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} />
  </board>
)
