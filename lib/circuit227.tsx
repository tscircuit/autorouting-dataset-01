/** Randomly generated circuit 227. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={-1.00} pcbY={-4.00} connections={{
        pin5: "net.N1",
        pin1: "net.N2",
        pin6: "net.N3",
        pin4: "net.N3",
        pin2: "net.N4",
        pin3: "net.N4",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N4",
      }} type="npn" />
  </board>
)
