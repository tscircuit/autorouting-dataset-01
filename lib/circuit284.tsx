/** Randomly generated circuit 284. */
export default () => (
  <board width="46.00mm" height="26.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.00} pcbY={-7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={5.00} pcbY={4.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin6: "net.N7",
        pin4: "net.N12",
        pin3: "net.N14",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-13.50} pcbY={4.50} connections={{
        pin6: "net.N1",
        pin1: "net.N1",
        pin8: "net.N3",
        pin7: "net.N5",
        pin2: "net.N7",
        pin3: "net.N8",
        pin5: "net.N12",
        pin4: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={10.50} pcbY={-9.00} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-13.50} pcbY={-9.00} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-0.50} pcbY={-3.50} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-4" footprint="0603" pcbX={18.00} pcbY={-1.50} connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={18.00} pcbY={-9.00} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={18.00} pcbY={6.00} connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={6.00} pcbY={-2.00} connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-7" footprint="0603" pcbX={-6.00} pcbY={9.00} connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-1.50} pcbY={-6.50} connections={{
        pin2: "net.N15",
        pin1: "net.N15",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={7.50} pcbY={-5.50} connections={{
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N16",
      }} type="npn" />
  </board>
)
