/** Randomly generated circuit 111. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
        pin3: "net.N5",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N6",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={6.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-6.50} pcbY={-6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
        pin3: "net.N6",
      }} type="npn" />
  </board>
)
