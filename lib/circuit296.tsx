/** Randomly generated circuit 296. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={0.50} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
  </board>
)
