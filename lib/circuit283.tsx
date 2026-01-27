/** Randomly generated circuit 283. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={1.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-5.00} pcbY={-10.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
