/** Randomly generated circuit 238. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="49.54mm" height="42.57mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-9.07} pcbY={6.64} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0805" pcbX={18.75} pcbY={13.77} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="1206" pcbX={0.02} pcbY={16.02} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="1206" pcbX={-6.93} pcbY={13.27} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod123" pcbX={8.16} pcbY={15.62} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N24",
        pin1: "net.N28",
      }} />
    <diode name="diode-2" footprint="axial_p0.2in" pcbX={19.31} pcbY={-8.30} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N15",
        pin1: "net.N19",
      }} />
    <resistor name="resistor-2" footprint="1210" pcbX={0.48} pcbY={2.09} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-0.04} pcbY={7.90} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N16",
        pin2: "net.N22",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="1206" pcbX={-17.49} pcbY={14.14} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N20",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="axial_p0.2in" pcbX={-16.47} pcbY={7.43} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }} resistance="1k" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-18.58} pcbY={-8.41} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N19",
        pin2: "net.N28",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="tssop8" pcbX={15.69} pcbY={1.84} pcbRotation={0.00} layer="top" connections={{
        pin7: "net.N1",
        pin3: "net.N2",
        pin1: "net.N5",
        pin6: "net.N11",
        pin2: "net.N12",
        pin8: "net.N14",
        pin5: "net.N20",
        pin4: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={17.21} pcbY={-15.31} pcbRotation={180.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N14",
        pin4: "net.N21",
        pin3: "net.N24",
      }} pinCount={4} pitch="2.54mm" />
    <chip name="chip-2" footprint="lqfp48" pcbX={0.25} pcbY={-10.64} pcbRotation={0.00} layer="top" connections={{
        pin11: "net.N2",
        pin19: "net.N2",
        pin3: "net.N3",
        pin47: "net.N3",
        pin34: "net.N4",
        pin7: "net.N4",
        pin31: "net.N5",
        pin20: "net.N5",
        pin26: "net.N6",
        pin24: "net.N6",
        pin15: "net.N7",
        pin22: "net.N7",
        pin44: "net.N8",
        pin36: "net.N9",
        pin16: "net.N9",
        pin8: "net.N9",
        pin13: "net.N9",
        pin9: "net.N10",
        pin48: "net.N11",
        pin23: "net.N12",
        pin30: "net.N12",
        pin33: "net.N12",
        pin42: "net.N13",
        pin12: "net.N13",
        pin40: "net.N14",
        pin14: "net.N15",
        pin37: "net.N15",
        pin18: "net.N16",
        pin39: "net.N16",
        pin5: "net.N17",
        pin17: "net.N17",
        pin28: "net.N18",
        pin41: "net.N18",
        pin25: "net.N18",
        pin27: "net.N18",
        pin43: "net.N22",
        pin32: "net.N23",
        pin38: "net.N23",
        pin10: "net.N24",
        pin2: "net.N25",
        pin4: "net.N26",
        pin21: "net.N26",
        pin46: "net.N26",
        pin45: "net.N27",
        pin29: "net.N27",
        pin1: "net.N27",
        pin35: "net.N28",
        pin6: "net.N28",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="sod123" pcbX={-12.75} pcbY={-7.20} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N19",
        pin2: "net.N21",
      }} />
    <resistor name="resistor-5" footprint="1210" pcbX={-19.39} pcbY={-1.62} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N25",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.96} pcbY={-16.25} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N21",
        pin3: "net.N22",
      }} type="pnp" />
  </board>
)
