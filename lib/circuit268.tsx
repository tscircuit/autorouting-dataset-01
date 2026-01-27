/** Randomly generated circuit 268. */
export default () => (
  <board width="17.00mm" height="17.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-4.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-0.50} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
  </board>
)
