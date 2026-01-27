/** Randomly generated circuit 125. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin4: "net.N2",
        pin7: "net.N3",
        pin6: "net.N3",
        pin5: "net.N4",
        pin8: "net.N5",
        pin1: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-7.50} pcbY={-3.50} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-6.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
  </board>
)
