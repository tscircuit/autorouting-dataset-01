/** Randomly generated circuit 272. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
  </board>
)
