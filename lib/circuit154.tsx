/** Randomly generated circuit 154. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.00} pcbY={7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N3",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={4.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={4.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
        pin3: "net.N2",
      }} type="npn" />
  </board>
)
