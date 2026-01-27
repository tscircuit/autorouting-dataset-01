/** Randomly generated circuit 261. */
export default () => (
  <board width="17.00mm" height="17.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N3",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N4",
      }} type="npn" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N3",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.00} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} inductance="10uH" />
  </board>
)
