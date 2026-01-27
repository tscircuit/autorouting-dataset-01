/** Randomly generated circuit 151. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-0.50} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={6.00} pcbY={-1.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={9.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin3: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-9.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.50} pcbY={2.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={-11.00} pcbY={-7.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} inductance="10uH" />
  </board>
)
