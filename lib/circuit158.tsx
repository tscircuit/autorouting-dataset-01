/** Randomly generated circuit 158. */
export default () => (
  <board width="20.00mm" height="13.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0805" pcbX={-4.50} pcbY={-2.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0805" pcbX={-4.50} pcbY={1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
  </board>
)
