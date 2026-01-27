/** Randomly generated circuit 158. */
export default () => (
  <board width="20.00mm" height="13.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.50} pcbY={-2.50} connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N2",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.50} pcbY={1.00} connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
  </board>
)
