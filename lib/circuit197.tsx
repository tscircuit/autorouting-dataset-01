/** Randomly generated circuit 197. */
export default () => (
  <board width="20.00mm" height="13.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-6.00} pcbY={2.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} capacitance="0.1uF" />
  </board>
)
