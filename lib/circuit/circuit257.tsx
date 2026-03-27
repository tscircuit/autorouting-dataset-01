/** Randomly generated circuit 257. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="41.58mm" height="36.56mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-11.46} pcbY={14.20} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="sod323" pcbX={-5.86} pcbY={4.32} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={4.46} pcbY={13.95} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N1",
        pin1: "net.N5",
        pin3: "net.N6",
        pin2: "net.N12",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={12.22} pcbY={-4.03} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N7",
        pin1: "net.N10",
        pin3: "net.N12",
      }} type="npn" />
    <pinheader name="pinhead-2" footprint="pinrow4" pcbX={-5.34} pcbY={9.11} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N3",
        pin4: "net.N10",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={4.23} pcbY={-13.48} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N4",
        pin2: "net.N11",
        pin1: "net.N12",
      }} type="mosfet" />
    <pinheader name="pinhead-3" footprint="pinrow4" pcbX={-13.23} pcbY={-13.06} pcbRotation={0.00} layer="top" connections={{
        pin4: "net.N5",
        pin3: "net.N8",
        pin1: "net.N10",
        pin2: "net.N12",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-13.65} pcbY={2.42} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="sod323" pcbX={3.70} pcbY={4.70} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} />
    <pinheader name="pinhead-4" footprint="pinrow2" pcbX={-12.34} pcbY={-3.23} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-1" footprint="2512" pcbX={4.61} pcbY={-4.10} pcbRotation={90.00} layer="bottom" connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={14.09} pcbY={-13.15} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin3: "net.N7",
        pin1: "net.N11",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={-3.37} pcbY={-12.26} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N13",
      }} type="mosfet" />
    <pinheader name="pinhead-5" footprint="pinrow2" pcbX={11.42} pcbY={9.43} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="2512" pcbX={11.86} pcbY={4.71} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={-3.05} pcbY={-3.74} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
