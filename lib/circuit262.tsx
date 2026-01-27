/** Randomly generated circuit 262. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.00} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={1.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <transistor name="transistor-7" footprint="SOT-23" pcbX={-5.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
  </board>
)
