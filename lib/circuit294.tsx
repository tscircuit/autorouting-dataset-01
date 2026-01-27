/** Randomly generated circuit 294. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-6.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={3.50} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.00} pcbY={-11.00} connections={{
        pin3: "net.N13",
        pin2: "net.N14",
        pin1: "net.N15",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-7.50} pcbY={12.00} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={0.00} pcbY={12.00} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={4.00} pcbY={-14.00} connections={{
        pin13: "net.N1",
        pin10: "net.N1",
        pin6: "net.N2",
        pin11: "net.N3",
        pin14: "net.N4",
        pin4: "net.N5",
        pin12: "net.N6",
        pin9: "net.N7",
        pin8: "net.N9",
        pin1: "net.N10",
        pin15: "net.N11",
        pin5: "net.N13",
        pin16: "net.N13",
        pin7: "net.N14",
        pin2: "net.N16",
        pin3: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={4.00} pcbY={1.00} connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={7.00} pcbY={6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={7.00} pcbY={-4.00} connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }} capacitance="0.1uF" />
  </board>
)
