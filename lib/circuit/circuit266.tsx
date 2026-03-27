/** Randomly generated circuit 266. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="51.05mm" height="42.02mm">
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={-6.82} pcbY={13.51} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N7",
        pin5: "net.N8",
        pin1: "net.N10",
        pin4: "net.N12",
        pin2: "net.N16",
        pin6: "net.N20",
      }} pinCount={6} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={0.00} pcbY={-15.11} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N13",
      }} type="mosfet" />
    <inductor name="inductor-1" footprint="1206" pcbX={19.20} pcbY={13.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N18",
        pin1: "net.N20",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="ssop8" pcbX={10.41} pcbY={-15.85} pcbRotation={0.00} layer="bottom" connections={{
        pin4: "net.N14",
        pin2: "net.N15",
        pin1: "net.N16",
        pin5: "net.N16",
        pin8: "net.N17",
        pin6: "net.N17",
        pin3: "net.N18",
        pin7: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-20.72} pcbY={13.55} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N12",
        pin3: "net.N20",
      }} type="pnp" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-10.06} pcbY={-15.94} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N19",
      }} />
    <capacitor name="capacitor-1" footprint="1206" pcbX={-1.66} pcbY={17.14} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N15",
        pin1: "net.N19",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={6.51} pcbY={8.18} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin3: "net.N4",
        pin1: "net.N17",
      }} type="bjt" />
    <diode name="diode-2" footprint="sod123" pcbX={-17.17} pcbY={-1.10} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} />
    <inductor name="inductor-2" footprint="1206" pcbX={-17.77} pcbY={6.88} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="1210" pcbX={-9.09} pcbY={-3.88} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0805" pcbX={8.73} pcbY={15.69} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="2512" pcbX={1.81} pcbY={0.89} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N20",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={17.35} pcbY={7.25} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-8.76} pcbY={3.45} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin3: "net.N11",
        pin1: "net.N13",
      }} type="bjt" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={17.24} pcbY={-2.48} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={17.81} pcbY={-6.94} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin4: "net.N5",
        pin1: "net.N5",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={19.29} pcbY={1.93} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <resistor name="resistor-2" footprint="2512" pcbX={-18.95} pcbY={-7.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="1210" pcbX={9.72} pcbY={-1.16} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
  </board>
)
