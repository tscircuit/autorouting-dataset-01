/** Randomly generated circuit 269. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-5.00} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={2.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-5.00} pcbY={0.50} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
        pin3: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={4.50} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
