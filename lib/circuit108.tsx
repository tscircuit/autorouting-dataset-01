/** Randomly generated circuit 108. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N4",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
