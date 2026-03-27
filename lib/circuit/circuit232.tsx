/** Randomly generated circuit 232. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.30mm" height="47.51mm">
    <resistor name="resistor-1" footprint="2512" pcbX={18.62} pcbY={-17.18} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N26",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-18.45} pcbY={-12.89} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N27",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-0.49} pcbY={-8.38} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N11",
        pin1: "net.N19",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-0.38} pcbY={-17.44} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N20",
        pin2: "net.N26",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={18.66} pcbY={13.47} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={9.38} pcbY={-6.77} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N26",
        pin3: "net.N27",
      }} type="mosfet" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-7.24} pcbY={0.75} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-6.97} pcbY={-16.16} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N13",
        pin3: "net.N24",
      }} type="jfet" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={7.68} pcbY={-17.46} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N23",
        pin1: "net.N23",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={0.68} pcbY={0.12} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N17",
        pin1: "net.N22",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="2512" pcbX={-17.01} pcbY={-18.05} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} resistance="1k" />
    <pinheader name="pinhead-4" footprint="pinrow4" pcbX={11.15} pcbY={20.00} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N5",
        pin1: "net.N10",
        pin3: "net.N19",
        pin2: "net.N19",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-4" footprint="0402" pcbX={0.29} pcbY={8.76} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={-12.27} pcbY={17.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={17.57} pcbY={-0.45} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N21",
      }} />
    <diode name="diode-2" footprint="sod123" pcbX={-1.58} pcbY={15.97} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} />
    <resistor name="resistor-5" footprint="1210" pcbX={-8.91} pcbY={-7.77} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-6.67} pcbY={7.48} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="qfn16" pcbX={10.44} pcbY={7.44} pcbRotation={90.00} layer="top" connections={{
        pin8: "net.N1",
        pin3: "net.N6",
        pin5: "net.N6",
        pin11: "net.N7",
        pin4: "net.N7",
        pin14: "net.N11",
        pin6: "net.N12",
        pin1: "net.N14",
        pin12: "net.N15",
        pin2: "net.N18",
        pin15: "net.N18",
        pin10: "net.N20",
        pin9: "net.N21",
        pin7: "net.N22",
        pin16: "net.N25",
        pin13: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-6" footprint="1206" pcbX={-18.68} pcbY={12.97} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N3",
        pin1: "net.N23",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-18.60} pcbY={0.35} pcbRotation={0.00} layer="top" connections={{
        pin7: "net.N1",
        pin15: "net.N4",
        pin9: "net.N6",
        pin1: "net.N6",
        pin13: "net.N8",
        pin14: "net.N12",
        pin12: "net.N13",
        pin16: "net.N14",
        pin8: "net.N16",
        pin11: "net.N16",
        pin10: "net.N17",
        pin5: "net.N18",
        pin4: "net.N20",
        pin3: "net.N24",
        pin6: "net.N25",
        pin2: "net.N27",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={8.68} pcbY={-0.85} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N24",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="sod123" pcbX={17.80} pcbY={-7.50} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N21",
      }} />
  </board>
)
