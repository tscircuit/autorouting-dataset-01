/** Randomly generated circuit 116. */
export default () => (
  <board width="16.00mm" height="16.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin4: "net.N1",
        pin3: "net.N2",
        pin6: "net.N2",
        pin5: "net.N3",
        pin2: "net.N3",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-4.00} connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
