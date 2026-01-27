/** Randomly generated circuit 230. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N1",
        pin3: "net.N2",
        pin7: "net.N3",
        pin6: "net.N4",
        pin8: "net.N4",
        pin5: "net.N4",
        pin2: "net.N5",
        pin1: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.00} pcbY={-6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={-4.00} pcbY={9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.50} pcbY={-6.50} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N6",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={0.50} pcbY={6.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N3",
      }} type="npn" />
  </board>
)
