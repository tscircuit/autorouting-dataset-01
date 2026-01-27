/** Randomly generated circuit 171. */
export default () => (
  <board width="13.00mm" height="20.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin3: "net.N1",
        pin2: "net.N2",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-2.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-2.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={2.00} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
  </board>
)
