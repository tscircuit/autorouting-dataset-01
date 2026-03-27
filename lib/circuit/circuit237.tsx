/** Randomly generated circuit 237. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="51.10mm" height="53.70mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-11.96} pcbY={8.53} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N15",
        pin3: "net.N28",
        pin1: "net.N32",
      }} type="npn" />
    <chip name="chip-1" footprint="lqfp48" pcbX={17.15} pcbY={2.19} pcbRotation={270.00} layer="top" connections={{
        pin41: "net.N1",
        pin27: "net.N3",
        pin28: "net.N3",
        pin2: "net.N4",
        pin15: "net.N4",
        pin29: "net.N6",
        pin42: "net.N6",
        pin22: "net.N7",
        pin47: "net.N7",
        pin32: "net.N7",
        pin43: "net.N9",
        pin26: "net.N14",
        pin21: "net.N15",
        pin45: "net.N15",
        pin44: "net.N16",
        pin23: "net.N16",
        pin13: "net.N16",
        pin18: "net.N18",
        pin12: "net.N19",
        pin1: "net.N21",
        pin19: "net.N21",
        pin35: "net.N22",
        pin31: "net.N24",
        pin10: "net.N25",
        pin39: "net.N25",
        pin14: "net.N25",
        pin40: "net.N26",
        pin38: "net.N27",
        pin5: "net.N28",
        pin8: "net.N28",
        pin20: "net.N28",
        pin34: "net.N29",
        pin16: "net.N30",
        pin30: "net.N30",
        pin17: "net.N31",
        pin4: "net.N32",
        pin48: "net.N33",
        pin9: "net.N34",
        pin11: "net.N36",
        pin3: "net.N36",
        pin24: "net.N37",
        pin33: "net.N38",
        pin46: "net.N38",
        pin25: "net.N38",
        pin7: "net.N39",
        pin37: "net.N40",
        pin6: "net.N41",
        pin36: "net.N42",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinrow2" pcbX={2.09} pcbY={-13.25} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N20",
        pin2: "net.N23",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-2" footprint="qfp16" pcbX={-18.93} pcbY={-13.35} pcbRotation={90.00} layer="bottom" connections={{
        pin12: "net.N2",
        pin7: "net.N2",
        pin5: "net.N5",
        pin13: "net.N8",
        pin14: "net.N11",
        pin8: "net.N14",
        pin6: "net.N17",
        pin9: "net.N19",
        pin15: "net.N19",
        pin4: "net.N24",
        pin16: "net.N26",
        pin1: "net.N27",
        pin3: "net.N27",
        pin11: "net.N29",
        pin2: "net.N37",
        pin10: "net.N39",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="1210" pcbX={-18.40} pcbY={21.28} pcbRotation={270.00} layer="top" connections={{
        pin1: "net.N26",
        pin2: "net.N35",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod123" pcbX={9.34} pcbY={-20.43} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N10",
        pin2: "net.N20",
      }} />
    <capacitor name="capacitor-1" footprint="2512" pcbX={5.07} pcbY={-3.63} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N13",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="1210" pcbX={-3.63} pcbY={9.95} pcbRotation={0.00} layer="bottom" connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={20.67} pcbY={18.39} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="1206" pcbX={-4.63} pcbY={-2.77} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N23",
        pin2: "net.N23",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.65} pcbY={-11.52} pcbRotation={180.00} layer="top" connections={{
        pin3: "net.N9",
        pin2: "net.N25",
        pin1: "net.N29",
      }} type="npn" />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={-18.05} pcbY={1.65} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N5",
        pin1: "net.N23",
        pin4: "net.N29",
        pin2: "net.N31",
        pin6: "net.N36",
        pin5: "net.N41",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-2" footprint="sod123" pcbX={7.11} pcbY={19.71} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N9",
        pin1: "net.N39",
      }} />
    <capacitor name="capacitor-2" footprint="2512" pcbX={5.07} pcbY={10.53} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={-8.31} pcbY={1.86} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N26",
        pin3: "net.N34",
        pin2: "net.N36",
        pin1: "net.N42",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="axial_p0.2in" pcbX={-1.31} pcbY={18.52} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N37",
      }} resistance="1k" />
    <diode name="diode-3" footprint="sod123" pcbX={-6.31} pcbY={-9.08} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N16",
      }} />
    <inductor name="inductor-3" footprint="0805" pcbX={18.97} pcbY={-10.93} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N30",
        pin1: "net.N34",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="soic8" pcbX={-6.88} pcbY={-19.35} pcbRotation={90.00} layer="top" connections={{
        pin5: "net.N3",
        pin3: "net.N4",
        pin7: "net.N8",
        pin4: "net.N17",
        pin1: "net.N21",
        pin2: "net.N22",
        pin8: "net.N42",
        pin6: "net.N42",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-4" footprint="pinrow4" pcbX={-17.22} pcbY={14.50} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N8",
        pin2: "net.N12",
        pin4: "net.N24",
        pin1: "net.N33",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-18.90} pcbY={-22.55} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N35",
        pin3: "net.N38",
      }} type="pnp" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-9.74} pcbY={20.03} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N11",
        pin2: "net.N34",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="1210" pcbX={15.54} pcbY={16.62} pcbRotation={90.00} layer="bottom" connections={{
        pin2: "net.N9",
        pin1: "net.N40",
      }} capacitance="0.1uF" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={19.85} pcbY={-21.43} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N31",
        pin1: "net.N31",
        pin2: "net.N39",
      }} type="mosfet" />
  </board>
)
