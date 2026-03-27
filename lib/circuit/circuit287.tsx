/** Randomly generated circuit 287. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="46.67mm" height="48.75mm">
    <capacitor name="capacitor-1" footprint="1210" pcbX={1.17} pcbY={-16.84} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-9.54} pcbY={20.07} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={9.82} pcbY={13.17} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="1206" pcbX={-5.95} pcbY={-7.94} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={8.66} pcbY={-15.42} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="axial_p0.2in" pcbX={-16.12} pcbY={15.65} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={13.24} pcbY={20.63} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N4",
        pin6: "net.N7",
        pin3: "net.N9",
        pin5: "net.N9",
        pin2: "net.N12",
        pin1: "net.N15",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={7.70} pcbY={4.77} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }} />
    <resistor name="resistor-3" footprint="0805" pcbX={17.19} pcbY={-18.18} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="axial_p0.2in" pcbX={-5.67} pcbY={2.21} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod123" pcbX={8.46} pcbY={-2.03} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={1.52} pcbY={-9.56} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N13",
        pin2: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0805" pcbX={17.66} pcbY={7.21} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={9.39} pcbY={-9.36} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="1206" pcbX={-17.88} pcbY={8.07} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="1206" pcbX={-15.95} pcbY={-0.46} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="1206" pcbX={-16.01} pcbY={-7.41} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-16.05} pcbY={-15.70} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-6" footprint="2512" pcbX={-1.13} pcbY={-2.18} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="2512" pcbX={17.76} pcbY={-6.16} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod323" pcbX={-8.61} pcbY={8.02} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }} />
    <capacitor name="capacitor-7" footprint="0402" pcbX={-9.96} pcbY={-17.34} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-8" footprint="0603" pcbX={-0.03} pcbY={10.36} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
