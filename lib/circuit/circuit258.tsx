/** Randomly generated circuit 258. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="46.56mm" height="36.88mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-13.30} pcbY={4.57} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} resistance="1k" />
    <chip name="chip-1" footprint="qfn24" pcbX={16.72} pcbY={8.62} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N1",
        pin14: "net.N3",
        pin10: "net.N3",
        pin24: "net.N4",
        pin19: "net.N5",
        pin8: "net.N6",
        pin4: "net.N6",
        pin22: "net.N6",
        pin7: "net.N8",
        pin2: "net.N9",
        pin9: "net.N9",
        pin11: "net.N9",
        pin20: "net.N10",
        pin12: "net.N10",
        pin23: "net.N12",
        pin16: "net.N12",
        pin18: "net.N13",
        pin5: "net.N14",
        pin3: "net.N14",
        pin1: "net.N16",
        pin17: "net.N16",
        pin13: "net.N19",
        pin21: "net.N19",
        pin15: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={3.74} pcbY={13.05} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="sod323" pcbX={-6.43} pcbY={13.10} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} />
    <capacitor name="capacitor-1" footprint="1210" pcbX={17.42} pcbY={-4.81} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="axial_p0.2in" pcbX={6.96} pcbY={-4.18} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-16.95} pcbY={-11.75} pcbRotation={270.00} layer="bottom" connections={{
        pin2: "net.N11",
        pin1: "net.N20",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="1210" pcbX={-16.73} pcbY={-4.52} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={5.00} pcbY={4.45} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin3: "net.N11",
        pin1: "net.N19",
      }} type="jfet" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-15.10} pcbY={11.97} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N2",
        pin3: "net.N4",
        pin1: "net.N18",
      }} type="pnp" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-4.27} pcbY={6.64} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="0805" pcbX={-6.26} pcbY={-4.08} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N8",
        pin1: "net.N17",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="2512" pcbX={6.61} pcbY={-10.64} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-6.33} pcbY={-11.82} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N16",
        pin2: "net.N18",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={14.50} pcbY={-13.64} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N15",
      }} type="pnp" />
  </board>
)
