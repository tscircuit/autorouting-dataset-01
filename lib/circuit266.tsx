/** Randomly generated circuit 266. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.00} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.50} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.00} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
