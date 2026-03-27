/** Randomly generated circuit 200. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="43.56mm" height="44.21mm">
    <diode name="diode-1" footprint="sod123" pcbX={-0.03} pcbY={7.14} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} />
    <resistor name="resistor-1" footprint="2512" pcbX={-15.21} pcbY={-15.74} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="sod323" pcbX={-14.56} pcbY={-9.11} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={7.55} pcbY={-12.07} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N6",
        pin1: "net.N12",
        pin4: "net.N14",
        pin2: "net.N16",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="1210" pcbX={-6.45} pcbY={-0.13} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} resistance="1k" />
    <diode name="diode-3" footprint="sod323" pcbX={-14.31} pcbY={14.11} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <chip name="chip-1" footprint="tssop8" pcbX={15.83} pcbY={16.45} pcbRotation={180.00} layer="bottom" connections={{
        pin3: "net.N1",
        pin7: "net.N1",
        pin2: "net.N9",
        pin1: "net.N10",
        pin6: "net.N11",
        pin4: "net.N11",
        pin5: "net.N14",
        pin8: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={11.68} pcbY={6.80} pcbRotation={0.00} layer="bottom" connections={{
        pin4: "net.N7",
        pin3: "net.N10",
        pin1: "net.N11",
        pin6: "net.N13",
        pin5: "net.N15",
        pin2: "net.N16",
      }} pinCount={6} pitch="2.54mm" />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={-5.88} pcbY={-17.09} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="0603" pcbX={7.83} pcbY={-1.03} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N16",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="axial_p0.2in" pcbX={15.54} pcbY={-6.67} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} inductance="10uH" />
    <pinheader name="pinhead-4" footprint="pinrow2" pcbX={15.83} pcbY={-15.20} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-5" footprint="pinrow4" pcbX={-2.77} pcbY={-7.31} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N3",
        pin3: "net.N4",
        pin2: "net.N8",
        pin1: "net.N9",
      }} pinCount={4} pitch="2.54mm" />
    <pinheader name="pinhead-6" footprint="pinrow2" pcbX={-15.12} pcbY={0.11} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-4" footprint="sod323" pcbX={2.22} pcbY={-14.58} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} />
    <resistor name="resistor-4" footprint="1206" pcbX={2.85} pcbY={15.42} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.40} pcbY={-0.26} pcbRotation={180.00} layer="top" connections={{
        pin3: "net.N2",
        pin2: "net.N5",
        pin1: "net.N7",
      }} type="bjt" />
  </board>
)
