/** Randomly generated circuit 298. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N1",
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N3",
        pin7: "net.N4",
        pin8: "net.N5",
        pin5: "net.N5",
        pin6: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={-6.50} pcbY={-6.50} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-6.50} pcbY={6.50} connections={{
        pin1: "net.N2",
        pin3: "net.N2",
        pin2: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-6.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
  </board>
)
