/** Randomly generated circuit 225. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="42.25mm" height="47.64mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={0.50} pcbY={9.66} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N13",
        pin3: "net.N19",
      }} type="jfet" />
    <resistor name="resistor-1" footprint="0603" pcbX={-14.76} pcbY={9.85} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N23",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod123" pcbX={13.42} pcbY={17.09} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-0.20} pcbY={5.06} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N14",
        pin3: "net.N23",
      }} type="pnp" />
    <capacitor name="capacitor-1" footprint="1206" pcbX={8.62} pcbY={4.01} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-14.34} pcbY={16.06} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <chip name="chip-1" footprint="ssop16" pcbX={-15.53} pcbY={-16.12} pcbRotation={0.00} layer="top" connections={{
        pin5: "net.N2",
        pin8: "net.N6",
        pin9: "net.N6",
        pin16: "net.N8",
        pin12: "net.N9",
        pin10: "net.N10",
        pin15: "net.N11",
        pin7: "net.N12",
        pin6: "net.N14",
        pin1: "net.N14",
        pin2: "net.N16",
        pin4: "net.N21",
        pin11: "net.N24",
        pin14: "net.N25",
        pin3: "net.N26",
        pin13: "net.N26",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-13.57} pcbY={0.14} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N12",
        pin2: "net.N19",
        pin4: "net.N21",
        pin1: "net.N25",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-2" footprint="sod123" pcbX={-2.82} pcbY={-19.76} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }} />
    <chip name="chip-2" footprint="qfp32" pcbX={14.22} pcbY={-4.79} pcbRotation={0.00} layer="top" connections={{
        pin10: "net.N1",
        pin20: "net.N1",
        pin14: "net.N1",
        pin12: "net.N2",
        pin15: "net.N3",
        pin13: "net.N3",
        pin23: "net.N3",
        pin3: "net.N5",
        pin5: "net.N8",
        pin27: "net.N9",
        pin21: "net.N11",
        pin24: "net.N12",
        pin19: "net.N12",
        pin11: "net.N13",
        pin28: "net.N15",
        pin8: "net.N16",
        pin6: "net.N16",
        pin1: "net.N17",
        pin18: "net.N18",
        pin22: "net.N18",
        pin32: "net.N19",
        pin25: "net.N20",
        pin16: "net.N20",
        pin4: "net.N22",
        pin30: "net.N22",
        pin29: "net.N24",
        pin7: "net.N24",
        pin31: "net.N25",
        pin26: "net.N25",
        pin2: "net.N27",
        pin9: "net.N27",
        pin17: "net.N27",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0402" pcbX={-8.65} pcbY={18.15} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N15",
        pin1: "net.N26",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={-5.90} pcbY={-6.96} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N19",
        pin2: "net.N27",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-3" footprint="sod323" pcbX={-3.43} pcbY={-12.94} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N24",
      }} />
    <diode name="diode-4" footprint="sod323" pcbX={-6.67} pcbY={9.59} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }} />
    <capacitor name="capacitor-2" footprint="1206" pcbX={6.37} pcbY={-15.94} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0805" pcbX={13.62} pcbY={7.52} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N20",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0603" pcbX={-1.78} pcbY={-2.71} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={15.18} pcbY={-18.19} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N17",
        pin1: "net.N26",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={7.11} pcbY={10.19} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin3: "net.N7",
        pin1: "net.N13",
      }} type="mosfet" />
    <resistor name="resistor-6" footprint="0805" pcbX={3.62} pcbY={-8.62} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N4",
        pin2: "net.N22",
      }} resistance="1k" />
  </board>
)
