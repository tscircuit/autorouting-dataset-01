/** Randomly generated circuit 248. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="43.06mm" height="40.29mm">
    <diode name="diode-1" footprint="sod323" pcbX={-12.99} pcbY={6.61} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={-4.89} pcbY={2.96} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={3.37} pcbY={-4.06} pcbRotation={0.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N11",
      }} type="npn" />
    <resistor name="resistor-1" footprint="axial_p0.2in" pcbX={3.79} pcbY={3.58} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod323" pcbX={3.14} pcbY={12.65} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }} />
    <chip name="chip-1" footprint="tssop16" pcbX={-14.83} pcbY={-2.59} pcbRotation={90.00} layer="top" connections={{
        pin5: "net.N2",
        pin2: "net.N2",
        pin11: "net.N3",
        pin9: "net.N4",
        pin15: "net.N5",
        pin10: "net.N5",
        pin14: "net.N7",
        pin1: "net.N8",
        pin8: "net.N8",
        pin16: "net.N9",
        pin3: "net.N10",
        pin13: "net.N11",
        pin6: "net.N12",
        pin4: "net.N13",
        pin12: "net.N13",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.84} pcbY={-6.07} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="1206" pcbX={-5.10} pcbY={12.36} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="2512" pcbX={14.96} pcbY={-14.80} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="axial_p0.2in" pcbX={15.13} pcbY={-3.88} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N16",
      }} />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-5.34} pcbY={-14.36} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N10",
      }} type="bjt" />
    <diode name="diode-4" footprint="sod123" pcbX={3.77} pcbY={-14.59} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={13.94} pcbY={12.43} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N6",
        pin2: "net.N7",
        pin1: "net.N10",
      }} type="npn" />
    <resistor name="resistor-2" footprint="1206" pcbX={12.06} pcbY={6.25} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N14",
        pin1: "net.N15",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="1210" pcbX={-16.19} pcbY={-13.86} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }} resistance="1k" />
    <diode name="diode-5" footprint="sod123" pcbX={-14.21} pcbY={13.93} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} />
  </board>
)
