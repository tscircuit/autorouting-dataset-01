/** Randomly generated circuit 103. */
export default () => (
  <board width="30.00mm" height="18.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.00} pcbY={-5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={9.00} pcbY={-4.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={7.50} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={1.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={0.50} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
  </board>
)
