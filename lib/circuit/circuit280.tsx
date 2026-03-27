/** Randomly generated circuit 280. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="52.86mm" height="57.14mm">
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-18.87} pcbY={19.82} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin4: "net.N5",
        pin1: "net.N15",
        pin3: "net.N28",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={8.29} pcbY={-2.99} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N47",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.13} pcbY={8.49} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N21",
        pin3: "net.N24",
        pin2: "net.N37",
      }} type="mosfet" />
    <resistor name="resistor-1" footprint="1206" pcbX={-14.17} pcbY={-21.86} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="sod123" pcbX={18.59} pcbY={-10.85} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N39",
      }} />
    <resistor name="resistor-2" footprint="axial_p0.2in" pcbX={1.53} pcbY={-4.51} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N34",
        pin1: "net.N54",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={22.00} pcbY={11.40} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N21",
        pin2: "net.N49",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="bga32" pcbX={-21.24} pcbY={-19.45} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N2",
        pin30: "net.N6",
        pin20: "net.N7",
        pin19: "net.N8",
        pin17: "net.N11",
        pin24: "net.N12",
        pin10: "net.N12",
        pin28: "net.N16",
        pin8: "net.N17",
        pin9: "net.N21",
        pin15: "net.N22",
        pin12: "net.N29",
        pin1: "net.N30",
        pin26: "net.N32",
        pin21: "net.N32",
        pin22: "net.N33",
        pin18: "net.N34",
        pin25: "net.N35",
        pin2: "net.N36",
        pin23: "net.N36",
        pin13: "net.N36",
        pin14: "net.N39",
        pin29: "net.N40",
        pin6: "net.N40",
        pin16: "net.N42",
        pin32: "net.N43",
        pin11: "net.N45",
        pin5: "net.N52",
        pin4: "net.N53",
        pin31: "net.N53",
        pin27: "net.N55",
        pin7: "net.N60",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="qfp32" pcbX={7.68} pcbY={10.45} pcbRotation={0.00} layer="top" connections={{
        pin13: "net.N2",
        pin30: "net.N3",
        pin11: "net.N5",
        pin20: "net.N9",
        pin2: "net.N10",
        pin9: "net.N14",
        pin4: "net.N15",
        pin28: "net.N15",
        pin12: "net.N19",
        pin1: "net.N22",
        pin23: "net.N23",
        pin8: "net.N26",
        pin32: "net.N26",
        pin26: "net.N26",
        pin18: "net.N27",
        pin19: "net.N31",
        pin6: "net.N37",
        pin25: "net.N39",
        pin17: "net.N41",
        pin16: "net.N42",
        pin7: "net.N44",
        pin21: "net.N44",
        pin10: "net.N46",
        pin31: "net.N47",
        pin5: "net.N50",
        pin24: "net.N51",
        pin22: "net.N51",
        pin15: "net.N56",
        pin3: "net.N57",
        pin14: "net.N57",
        pin29: "net.N58",
        pin27: "net.N60",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="sod123" pcbX={21.16} pcbY={-19.68} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N18",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.53} pcbY={9.66} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N30",
        pin1: "net.N52",
        pin3: "net.N56",
      }} type="jfet" />
    <inductor name="inductor-1" footprint="axial_p0.2in" pcbX={-11.09} pcbY={-5.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N23",
        pin2: "net.N29",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="tssop20" pcbX={21.02} pcbY={22.62} pcbRotation={270.00} layer="top" connections={{
        pin10: "net.N5",
        pin14: "net.N7",
        pin7: "net.N10",
        pin11: "net.N11",
        pin13: "net.N13",
        pin4: "net.N16",
        pin16: "net.N17",
        pin19: "net.N18",
        pin3: "net.N20",
        pin8: "net.N21",
        pin2: "net.N24",
        pin17: "net.N27",
        pin5: "net.N30",
        pin1: "net.N30",
        pin12: "net.N39",
        pin15: "net.N46",
        pin18: "net.N48",
        pin9: "net.N51",
        pin6: "net.N52",
        pin20: "net.N60",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="1206" pcbX={-20.38} pcbY={-11.37} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N23",
        pin1: "net.N25",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinrow6" pcbX={-16.33} pcbY={0.94} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N8",
        pin1: "net.N8",
        pin4: "net.N23",
        pin2: "net.N25",
        pin6: "net.N43",
        pin5: "net.N47",
      }} pinCount={6} pitch="2.54mm" />
    <chip name="chip-4" footprint="tssop8" pcbX={18.26} pcbY={-3.35} pcbRotation={0.00} layer="top" connections={{
        pin5: "net.N1",
        pin2: "net.N7",
        pin1: "net.N25",
        pin6: "net.N29",
        pin8: "net.N38",
        pin3: "net.N38",
        pin7: "net.N49",
        pin4: "net.N58",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="1206" pcbX={-7.28} pcbY={20.36} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N54",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={-20.80} pcbY={10.57} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N50",
      }} resistance="1k" />
    <chip name="chip-5" footprint="tqfp32" pcbX={0.88} pcbY={-19.39} pcbRotation={0.00} layer="top" connections={{
        pin32: "net.N2",
        pin25: "net.N4",
        pin20: "net.N10",
        pin2: "net.N11",
        pin22: "net.N13",
        pin30: "net.N14",
        pin8: "net.N16",
        pin21: "net.N17",
        pin29: "net.N18",
        pin1: "net.N19",
        pin28: "net.N19",
        pin27: "net.N19",
        pin11: "net.N20",
        pin31: "net.N22",
        pin5: "net.N26",
        pin14: "net.N28",
        pin6: "net.N31",
        pin19: "net.N33",
        pin23: "net.N35",
        pin16: "net.N36",
        pin3: "net.N38",
        pin12: "net.N41",
        pin9: "net.N43",
        pin4: "net.N44",
        pin13: "net.N45",
        pin7: "net.N45",
        pin24: "net.N47",
        pin10: "net.N48",
        pin26: "net.N49",
        pin18: "net.N51",
        pin17: "net.N58",
        pin15: "net.N59",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={10.30} pcbY={21.12} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N5",
        pin3: "net.N55",
        pin2: "net.N59",
      }} type="mosfet" />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={2.76} pcbY={21.11} pcbRotation={180.00} layer="top" connections={{
        pin1: "net.N29",
        pin2: "net.N57",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-4" footprint="pinrow4" pcbX={14.81} pcbY={-21.01} pcbRotation={270.00} layer="top" connections={{
        pin2: "net.N10",
        pin1: "net.N32",
        pin3: "net.N38",
        pin4: "net.N40",
      }} pinCount={4} pitch="2.54mm" />
  </board>
)
