/** Randomly generated circuit 244. */
export default () => (
  <board width="144.00mm" height="144.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={44.95} pcbY={-5.14} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-48.74} pcbY={-50.92} connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-48.34} pcbY={-16.43} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-62.90} pcbY={60.98} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-32.82} pcbY={31.35} connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={48.16} pcbY={-49.17} connections={{
        pin3: "net.N3",
        pin1: "net.N5",
        pin5: "net.N6",
        pin6: "net.N8",
        pin4: "net.N12",
        pin2: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={5.54} pcbY={-66.82} connections={{
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N14",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={7.15} pcbY={-56.86} connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-22.76} pcbY={-40.50} connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={-6.32} pcbY={-5.58} connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={7.69} pcbY={-24.77} connections={{
        pin1: "net.N7",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={63.90} pcbY={2.95} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-51.87} pcbY={-4.86} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-49.87} pcbY={51.61} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic8" pcbX={-49.05} pcbY={-69.28} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
        pin7: "net.N4",
        pin5: "net.N5",
        pin4: "net.N8",
        pin8: "net.N9",
        pin6: "net.N12",
        pin3: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0402" pcbX={11.07} pcbY={50.11} connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="pinrow6" pcbX={38.59} pcbY={-59.34} connections={{
        pin4: "net.N1",
        pin5: "net.N8",
        pin3: "net.N10",
        pin1: "net.N11",
        pin6: "net.N13",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-17.49} pcbY={-1.42} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
        pin3: "net.N13",
      }} type="npn" />
  </board>
)
