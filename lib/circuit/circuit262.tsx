/** Randomly generated circuit 262. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="46.90mm" height="41.41mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.69} pcbY={3.80} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N11",
        pin3: "net.N24",
      }} type="mosfet" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.03} pcbY={13.60} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N17",
      }} type="mosfet" />
    <chip name="chip-1" footprint="tssop20" pcbX={-5.18} pcbY={-15.30} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin18: "net.N2",
        pin6: "net.N3",
        pin11: "net.N5",
        pin4: "net.N6",
        pin2: "net.N6",
        pin8: "net.N7",
        pin3: "net.N8",
        pin7: "net.N11",
        pin12: "net.N13",
        pin17: "net.N13",
        pin9: "net.N14",
        pin20: "net.N15",
        pin14: "net.N15",
        pin15: "net.N18",
        pin19: "net.N19",
        pin10: "net.N21",
        pin13: "net.N22",
        pin16: "net.N22",
        pin5: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={14.34} pcbY={-5.30} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N16",
        pin3: "net.N17",
      }} type="bjt" />
    <diode name="diode-1" footprint="axial_p0.2in" pcbX={-15.55} pcbY={-4.56} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }} />
    <chip name="chip-2" footprint="soic8_p1.27mm" pcbX={16.81} pcbY={5.65} pcbRotation={270.00} layer="top" connections={{
        pin4: "net.N2",
        pin5: "net.N3",
        pin6: "net.N7",
        pin1: "net.N7",
        pin2: "net.N8",
        pin3: "net.N14",
        pin7: "net.N19",
        pin8: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="axial_p0.2in" pcbX={-5.59} pcbY={-3.20} pcbRotation={180.00} layer="bottom" connections={{
        pin2: "net.N16",
        pin1: "net.N20",
      }} resistance="1k" />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={4.37} pcbY={3.92} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N11",
        pin1: "net.N20",
      }} />
    <inductor name="inductor-1" footprint="1210" pcbX={-17.18} pcbY={-14.60} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="ssop8" pcbX={17.45} pcbY={15.46} pcbRotation={180.00} layer="bottom" connections={{
        pin4: "net.N1",
        pin5: "net.N4",
        pin1: "net.N5",
        pin3: "net.N12",
        pin2: "net.N12",
        pin7: "net.N14",
        pin8: "net.N22",
        pin6: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={-16.56} pcbY={13.64} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N8",
        pin1: "net.N9",
        pin2: "net.N11",
      }} type="mosfet" />
    <transistor name="transistor-5" footprint="SOT-223" pcbX={8.57} pcbY={-16.40} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin3: "net.N17",
        pin2: "net.N24",
      }} type="bjt" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={15.89} pcbY={-11.35} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N10",
        pin3: "net.N19",
        pin4: "net.N23",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="0603" pcbX={3.89} pcbY={-3.42} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-7.40} pcbY={14.79} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N20",
        pin1: "net.N21",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0805" pcbX={-14.92} pcbY={4.71} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N18",
      }} inductance="10uH" />
  </board>
)
