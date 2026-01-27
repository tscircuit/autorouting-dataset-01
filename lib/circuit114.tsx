/** Randomly generated circuit 114. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-9.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin3: "net.N6",
        pin1: "net.N7",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={7.50} pcbY={-6.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={7.50} pcbY={1.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-13.50} pcbY={1.50} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={-1.50} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={4.00} pcbY={7.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin3: "net.N2",
        pin1: "net.N2",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={2.00} pcbY={3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} inductance="10uH" />
  </board>
)
