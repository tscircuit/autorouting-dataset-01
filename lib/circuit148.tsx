/** Randomly generated circuit 148. */
export default () => (
  <board width="16.00mm" height="16.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N1",
        pin5: "net.N2",
        pin4: "net.N2",
        pin6: "net.N3",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-4.00} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
  </board>
)
