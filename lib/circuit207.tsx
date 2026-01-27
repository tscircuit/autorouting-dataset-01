/** Randomly generated circuit 207. */
export default () => (
  <board width="20.00mm" height="34.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-6.00} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-6.00} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={1.50} pcbY={7.50} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
        pin3: "net.N11",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.00} pcbY={-6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N5",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.50} pcbY={-2.50} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
        pin3: "net.N9",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-2.00} pcbY={-10.00} connections={{
        pin3: "net.N1",
        pin4: "net.N1",
        pin2: "net.N4",
        pin5: "net.N8",
        pin1: "net.N9",
        pin6: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={4.50} pcbY={0.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-6.00} pcbY={13.00} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
  </board>
)
