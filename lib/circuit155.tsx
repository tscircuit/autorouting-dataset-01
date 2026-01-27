/** Randomly generated circuit 155. */
export default () => (
  <board width="21.00mm" height="21.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={1.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={6.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-4.00} pcbY={-2.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
  </board>
)
