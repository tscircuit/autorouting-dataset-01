/** Randomly generated circuit 122. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={1.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={1.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-4.50} pcbY={-1.50} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
  </board>
)
