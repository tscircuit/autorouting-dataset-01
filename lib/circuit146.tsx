/** Randomly generated circuit 146. */
export default () => (
  <board width="32.00mm" height="19.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.50} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={1.50} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={9.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={9.00} pcbY={4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
  </board>
)
