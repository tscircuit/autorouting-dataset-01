/** Randomly generated circuit 122. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-3.00} pcbY={-4.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-1.50} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-323" pcbX={2.50} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
  </board>
)
