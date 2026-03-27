/** Randomly generated circuit 206. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="47.02mm" height="46.56mm">
    <resistor name="resistor-1" footprint="1210" pcbX={-9.23} pcbY={17.56} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="1206" pcbX={16.92} pcbY={16.27} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0805" pcbX={-12.60} pcbY={-17.12} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={16.94} pcbY={-16.36} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="1210" pcbX={11.73} pcbY={1.29} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N20",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="1210" pcbX={17.00} pcbY={-7.88} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="1206" pcbX={5.33} pcbY={-16.48} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="sod323" pcbX={-18.05} pcbY={-8.09} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N11",
      }} />
    <capacitor name="capacitor-3" footprint="1210" pcbX={-10.47} pcbY={-9.11} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="axial_p0.2in" pcbX={-2.93} pcbY={-16.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-11.52} pcbY={-0.18} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N1",
        pin1: "net.N10",
        pin2: "net.N12",
      }} type="bjt" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={9.09} pcbY={15.23} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin3: "net.N14",
        pin2: "net.N19",
      }} type="pnp" />
    <resistor name="resistor-4" footprint="0603" pcbX={-17.25} pcbY={-15.93} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod123" pcbX={7.56} pcbY={-7.11} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N20",
      }} />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-0.62} pcbY={-8.42} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N14",
        pin3: "net.N20",
      }} type="jfet" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-0.97} pcbY={18.00} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }} />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={-18.06} pcbY={15.24} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N8",
        pin3: "net.N10",
        pin1: "net.N17",
      }} type="npn" />
    <chip name="chip-1" footprint="tssop8" pcbX={0.75} pcbY={-1.59} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin2: "net.N7",
        pin8: "net.N9",
        pin3: "net.N10",
        pin4: "net.N15",
        pin1: "net.N16",
        pin7: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="1206" pcbX={17.94} pcbY={9.51} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="axial_p0.2in" pcbX={-7.89} pcbY={9.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }} resistance="1k" />
    <resistor name="resistor-6" footprint="0402" pcbX={-17.92} pcbY={8.96} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0603" pcbX={8.45} pcbY={7.42} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }} inductance="10uH" />
    <resistor name="resistor-7" footprint="0805" pcbX={1.79} pcbY={8.01} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N9",
        pin1: "net.N18",
      }} resistance="1k" />
  </board>
)
