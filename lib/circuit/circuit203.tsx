/** Randomly generated circuit 203. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="52.21mm" height="41.68mm">
    <capacitor name="capacitor-1" footprint="1206" pcbX={-19.27} pcbY={8.62} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={15.96} pcbY={6.39} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod123" pcbX={-18.54} pcbY={0.82} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-2" footprint="1206" pcbX={11.30} pcbY={-8.70} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-21.43} pcbY={-14.27} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.50} pcbY={-6.98} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N12",
      }} type="jfet" />
    <resistor name="resistor-2" footprint="0603" pcbX={9.27} pcbY={15.44} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod123" pcbX={-9.15} pcbY={6.08} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-8.19} pcbY={-14.91} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin4: "net.N7",
        pin1: "net.N9",
        pin3: "net.N11",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={9.26} pcbY={7.26} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="2512" pcbX={-0.55} pcbY={16.16} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="axial_p0.2in" pcbX={-17.65} pcbY={-5.98} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-1.53} pcbY={-0.61} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={8.20} pcbY={-13.65} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={10.09} pcbY={0.45} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={3.39} pcbY={-13.98} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-5" footprint="1206" pcbX={19.33} pcbY={1.19} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="2512" pcbX={-10.21} pcbY={14.26} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0402" pcbX={1.39} pcbY={-7.08} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} resistance="1k" />
    <resistor name="resistor-6" footprint="0805" pcbX={-1.09} pcbY={5.79} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} resistance="1k" />
  </board>
)
