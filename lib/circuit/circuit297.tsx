/** Randomly generated circuit 297. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="45.72mm" height="48.90mm">
    <resistor name="resistor-1" footprint="2512" pcbX={15.88} pcbY={5.12} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N19",
        pin1: "net.N23",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="1210" pcbX={-15.06} pcbY={18.65} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N14",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={-0.17} pcbY={-17.15} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} />
    <chip name="chip-1" footprint="tssop16" pcbX={-1.75} pcbY={-1.00} pcbRotation={0.00} layer="top" connections={{
        pin8: "net.N1",
        pin6: "net.N3",
        pin11: "net.N4",
        pin12: "net.N6",
        pin3: "net.N10",
        pin7: "net.N13",
        pin5: "net.N15",
        pin10: "net.N17",
        pin15: "net.N17",
        pin9: "net.N19",
        pin2: "net.N20",
        pin4: "net.N23",
        pin1: "net.N24",
        pin16: "net.N25",
        pin13: "net.N27",
        pin14: "net.N28",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.72} pcbY={16.65} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N7",
        pin3: "net.N27",
      }} type="npn" />
    <chip name="chip-2" footprint="tssop16" pcbX={16.91} pcbY={18.63} pcbRotation={0.00} layer="top" connections={{
        pin9: "net.N4",
        pin12: "net.N4",
        pin11: "net.N4",
        pin13: "net.N7",
        pin2: "net.N11",
        pin8: "net.N14",
        pin15: "net.N16",
        pin7: "net.N17",
        pin6: "net.N24",
        pin5: "net.N25",
        pin1: "net.N26",
        pin14: "net.N26",
        pin3: "net.N26",
        pin4: "net.N27",
        pin10: "net.N29",
        pin16: "net.N29",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="1210" pcbX={16.29} pcbY={-6.51} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0805" pcbX={1.29} pcbY={-9.08} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N20",
        pin1: "net.N22",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="1206" pcbX={8.16} pcbY={9.77} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N29",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="1210" pcbX={8.38} pcbY={-19.16} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N20",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="qfp16" pcbX={3.05} pcbY={18.55} pcbRotation={0.00} layer="bottom" connections={{
        pin4: "net.N2",
        pin15: "net.N3",
        pin13: "net.N5",
        pin2: "net.N6",
        pin1: "net.N6",
        pin12: "net.N8",
        pin9: "net.N8",
        pin6: "net.N10",
        pin16: "net.N12",
        pin11: "net.N15",
        pin14: "net.N18",
        pin8: "net.N19",
        pin5: "net.N21",
        pin10: "net.N24",
        pin3: "net.N28",
        pin7: "net.N29",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="2512" pcbX={16.29} pcbY={-16.53} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N19",
        pin1: "net.N22",
      }} resistance="1k" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={-2.12} pcbY={6.95} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N22",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow6" pcbX={7.96} pcbY={-6.02} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N3",
        pin4: "net.N3",
        pin2: "net.N9",
        pin6: "net.N13",
        pin5: "net.N18",
        pin1: "net.N23",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="2512" pcbX={-14.57} pcbY={-18.42} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N15",
        pin1: "net.N23",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-12.48} pcbY={6.35} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N20",
        pin1: "net.N22",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-14.98} pcbY={-1.29} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N12",
        pin3: "net.N21",
      }} type="bjt" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={-14.34} pcbY={9.38} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N18",
        pin1: "net.N26",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="2512" pcbX={-15.99} pcbY={-9.17} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N28",
      }} capacitance="0.1uF" />
  </board>
)
