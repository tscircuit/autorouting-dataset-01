/** Randomly generated circuit 179. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={7.00} pcbY={-4.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={7.00} pcbY={1.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={0.00} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
  </board>
)
