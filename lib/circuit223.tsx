/** Randomly generated circuit 223. */
export default () => (
  <board width="23.00mm" height="40.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={6.00} pcbY={-2.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-1.50} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={-7.50} pcbY={12.00} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N11",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0402" pcbX={-7.00} pcbY={-13.00} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.00} pcbY={15.00} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-5" footprint="0402" pcbX={2.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-6" footprint="0402" pcbX={1.50} pcbY={-15.00} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={7.50} pcbY={15.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
