/** Randomly generated circuit 236. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={4} width="43.66mm" height="35.89mm">
    <capacitor name="capacitor-1" footprint="1206" pcbX={-5.22} pcbY={12.52} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0805" pcbX={13.97} pcbY={-3.86} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={13.48} pcbY={3.65} pcbRotation={90.00} layer="top" connections={{
        pin3: "net.N1",
        pin2: "net.N11",
        pin1: "net.N12",
      }} type="mosfet" />
    <diode name="diode-1" footprint="sod323" pcbX={13.49} pcbY={-11.81} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.82} pcbY={-3.12} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N3",
        pin2: "net.N6",
        pin3: "net.N11",
      }} type="mosfet" />
    <pinheader name="pinhead-1" footprint="pinrow4" pcbX={-4.51} pcbY={-13.67} pcbRotation={0.00} layer="top" connections={{
        pin3: "net.N4",
        pin2: "net.N7",
        pin1: "net.N8",
        pin4: "net.N9",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-2" footprint="sod323" pcbX={-15.00} pcbY={-5.24} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <pinheader name="pinhead-2" footprint="pinrow2" pcbX={15.91} pcbY={12.22} pcbRotation={180.00} layer="top" connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-5.72} pcbY={-3.80} pcbRotation={90.00} layer="bottom" connections={{
        pin3: "net.N6",
        pin1: "net.N7",
        pin2: "net.N9",
      }} type="mosfet" />
    <resistor name="resistor-1" footprint="0402" pcbX={3.15} pcbY={11.99} pcbRotation={90.00} layer="top" connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="1206" pcbX={-16.06} pcbY={2.42} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="1206" pcbX={-5.58} pcbY={4.51} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="sod323" pcbX={-12.93} pcbY={10.74} pcbRotation={0.00} layer="top" connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} />
    <pinheader name="pinhead-3" footprint="pinrow2" pcbX={3.01} pcbY={3.45} pcbRotation={0.00} layer="top" connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="0402" pcbX={-14.87} pcbY={-9.94} pcbRotation={0.00} layer="bottom" connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0805" pcbX={6.08} pcbY={-12.38} pcbRotation={90.00} layer="top" connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
  </board>
)
