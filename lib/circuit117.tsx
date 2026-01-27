/** Randomly generated circuit 117. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-7.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-6.00} pcbY={2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.50} pcbY={3.50} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N5",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
  </board>
)
