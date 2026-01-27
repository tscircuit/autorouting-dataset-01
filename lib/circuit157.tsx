/** Randomly generated circuit 157. */
export default () => (
  <board width="15.00mm" height="15.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={0.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.00} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} />
  </board>
)
