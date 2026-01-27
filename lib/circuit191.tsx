/** Randomly generated circuit 191. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin7: "net.N1",
        pin6: "net.N1",
        pin5: "net.N3",
        pin1: "net.N4",
        pin4: "net.N4",
        pin8: "net.N4",
        pin3: "net.N5",
        pin2: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.50} pcbY={-6.50} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-6.50} pcbY={6.50} connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N2",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-1.50} pcbY={-6.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
  </board>
)
