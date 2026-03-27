/** Randomly generated circuit 245. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="45.12mm" height="45.46mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.88} pcbY={17.78} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N16",
        pin3: "net.N17",
      }} type="pnp" />
    <chip name="chip-1" footprint="soic16" pcbX={14.81} pcbY={-8.33} pcbRotation={270.00} layer="top" connections={{
        pin7: "net.N2",
        pin12: "net.N3",
        pin8: "net.N4",
        pin6: "net.N5",
        pin15: "net.N6",
        pin5: "net.N8",
        pin9: "net.N9",
        pin13: "net.N10",
        pin14: "net.N12",
        pin2: "net.N13",
        pin11: "net.N15",
        pin3: "net.N15",
        pin4: "net.N16",
        pin1: "net.N17",
        pin10: "net.N17",
        pin16: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-1.55} pcbY={15.44} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="1210" pcbX={-0.55} pcbY={0.82} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={17.76} pcbY={12.08} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N5",
        pin2: "net.N7",
        pin1: "net.N11",
      }} type="bjt" />
    <resistor name="resistor-1" footprint="2512" pcbX={-1.51} pcbY={-16.57} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-10.38} pcbY={-0.26} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N3",
        pin1: "net.N9",
        pin2: "net.N18",
      }} type="mosfet" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={-6.17} pcbY={-7.25} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N13",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-1.28} pcbY={9.25} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="1206" pcbX={16.98} pcbY={-18.86} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} resistance="1k" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-7.37} pcbY={9.00} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} />
    <inductor name="inductor-2" footprint="axial_p0.2in" pcbX={7.72} pcbY={5.87} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="sod323" pcbX={17.57} pcbY={4.55} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-15.90} pcbY={-8.74} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N12",
      }} type="jfet" />
    <inductor name="inductor-3" footprint="0402" pcbX={-16.96} pcbY={-0.10} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="1206" pcbX={-15.65} pcbY={8.10} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="2512" pcbX={7.28} pcbY={16.16} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-5" footprint="SOT-223" pcbX={-17.57} pcbY={-17.34} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N1",
        pin2: "net.N8",
        pin1: "net.N10",
      }} type="bjt" />
  </board>
)
