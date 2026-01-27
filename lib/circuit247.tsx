/** Randomly generated circuit 247. */
export default () => (
  <board width="17.00mm" height="17.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N2",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N3",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
  </board>
)
