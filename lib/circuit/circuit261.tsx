/** Randomly generated circuit 261. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="51.66mm" height="43.31mm">
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-8.55} pcbY={-14.55} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N5",
        pin4: "net.N7",
        pin2: "net.N9",
        pin1: "net.N15",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={8.64} pcbY={14.26} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N4",
        pin1: "net.N5",
        pin2: "net.N12",
      }} type="bjt" />
    <capacitor name="capacitor-1" footprint="2512" pcbX={-0.40} pcbY={0.05} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="1210" pcbX={-17.95} pcbY={16.05} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod323" pcbX={-7.42} pcbY={7.21} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }} />
    <inductor name="inductor-1" footprint="1206" pcbX={1.89} pcbY={-16.28} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0805" pcbX={21.40} pcbY={-7.11} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod323" pcbX={-10.87} pcbY={14.91} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }} />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={-18.96} pcbY={0.93} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin4: "net.N5",
        pin3: "net.N8",
        pin6: "net.N9",
        pin5: "net.N15",
      }} pinCount={6} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={3.02} pcbY={11.53} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N17",
        pin3: "net.N18",
      }} type="bjt" />
    <inductor name="inductor-2" footprint="0805" pcbX={18.45} pcbY={14.71} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={20.08} pcbY={1.79} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N14",
        pin3: "net.N16",
        pin2: "net.N18",
      }} type="bjt" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={0.60} pcbY={-7.45} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin3: "net.N10",
        pin2: "net.N11",
      }} type="mosfet" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={19.40} pcbY={-14.57} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-3.98} pcbY={15.42} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N17",
      }} />
    <chip name="chip-1" footprint="ssop8" pcbX={9.37} pcbY={-12.44} pcbRotation={0.00} layer="top" connections={{
        pin7: "net.N1",
        pin8: "net.N6",
        pin5: "net.N7",
        pin2: "net.N11",
        pin1: "net.N14",
        pin4: "net.N15",
        pin6: "net.N16",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="1210" pcbX={10.21} pcbY={1.05} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={-21.82} pcbY={-15.41} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} />
    <diode name="diode-5" footprint="sod123" pcbX={-9.10} pcbY={-0.42} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }} />
    <resistor name="resistor-3" footprint="1206" pcbX={11.36} pcbY={7.42} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} resistance="1k" />
  </board>
)
