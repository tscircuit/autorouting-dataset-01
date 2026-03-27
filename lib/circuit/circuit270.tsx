/** Randomly generated circuit 270. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="48.83mm" height="45.46mm">
    <inductor name="inductor-1" footprint="0805" pcbX={0.89} pcbY={6.74} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N17",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={18.17} pcbY={7.38} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N22",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-11.14} pcbY={8.11} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N23",
        pin3: "net.N30",
        pin2: "net.N33",
      }} type="jfet" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.81} pcbY={-16.39} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N19",
        pin1: "net.N20",
        pin3: "net.N31",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-7.07} pcbY={15.17} pcbRotation={270.00} layer="top" connections={{
        pin3: "net.N9",
        pin2: "net.N12",
        pin1: "net.N30",
        pin4: "net.N34",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-2" footprint="sod123" pcbX={-19.04} pcbY={7.13} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N20",
      }} />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-15.47} pcbY={18.23} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N11",
        pin1: "net.N25",
        pin2: "net.N26",
      }} type="bjt" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={-3.23} pcbY={-14.14} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N23",
        pin1: "net.N24",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={18.45} pcbY={-6.60} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-2.08} pcbY={2.55} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-1" footprint="qfn32" pcbX={-18.52} pcbY={-7.96} pcbRotation={90.00} layer="top" connections={{
        pin19: "net.N2",
        pin16: "net.N2",
        pin24: "net.N3",
        pin23: "net.N5",
        pin9: "net.N8",
        pin15: "net.N10",
        pin28: "net.N11",
        pin17: "net.N12",
        pin21: "net.N13",
        pin30: "net.N14",
        pin8: "net.N14",
        pin13: "net.N14",
        pin31: "net.N15",
        pin12: "net.N16",
        pin20: "net.N16",
        pin32: "net.N18",
        pin10: "net.N20",
        pin14: "net.N22",
        pin25: "net.N22",
        pin11: "net.N24",
        pin26: "net.N25",
        pin5: "net.N26",
        pin18: "net.N28",
        pin1: "net.N28",
        pin7: "net.N28",
        pin29: "net.N29",
        pin6: "net.N29",
        pin3: "net.N30",
        pin4: "net.N30",
        pin2: "net.N33",
        pin22: "net.N34",
        pin27: "net.N35",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={15.92} pcbY={15.07} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="2512" pcbX={8.30} pcbY={-7.25} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N13",
        pin1: "net.N34",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="qfn32" pcbX={18.52} pcbY={-16.83} pcbRotation={0.00} layer="top" connections={{
        pin6: "net.N1",
        pin32: "net.N2",
        pin20: "net.N3",
        pin18: "net.N3",
        pin23: "net.N4",
        pin30: "net.N5",
        pin17: "net.N6",
        pin27: "net.N7",
        pin15: "net.N8",
        pin5: "net.N10",
        pin26: "net.N12",
        pin10: "net.N13",
        pin29: "net.N17",
        pin25: "net.N17",
        pin12: "net.N18",
        pin1: "net.N18",
        pin19: "net.N18",
        pin24: "net.N19",
        pin22: "net.N21",
        pin11: "net.N23",
        pin21: "net.N24",
        pin2: "net.N25",
        pin7: "net.N26",
        pin3: "net.N27",
        pin13: "net.N29",
        pin4: "net.N31",
        pin14: "net.N32",
        pin28: "net.N33",
        pin8: "net.N34",
        pin31: "net.N35",
        pin16: "net.N36",
        pin9: "net.N36",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="1210" pcbX={0.71} pcbY={15.50} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N21",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={9.13} pcbY={9.33} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N8",
        pin3: "net.N32",
      }} type="npn" />
    <diode name="diode-4" footprint="axial_p0.2in" pcbX={-10.91} pcbY={-2.94} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N8",
        pin1: "net.N28",
      }} />
    <transistor name="transistor-5" footprint="SOT-223" pcbX={6.88} pcbY={-0.27} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N4",
        pin1: "net.N19",
        pin3: "net.N27",
      }} type="pnp" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.83} pcbY={-8.08} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N14",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={17.47} pcbY={-0.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N16",
      }} resistance="1k" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={-9.79} pcbY={-18.61} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N1",
        pin1: "net.N7",
        pin3: "net.N24",
        pin2: "net.N36",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-5" footprint="axial_p0.2in" pcbX={-4.97} pcbY={-2.91} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }} />
  </board>
)
