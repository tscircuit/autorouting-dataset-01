/** Randomly generated circuit 257. */
export default () => (
  <board width="14.00mm" height="42.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.45} pcbY={-7.26} connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N5",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={-0.04} pcbY={6.21} connections={{
        pin4: "net.N1",
        pin1: "net.N2",
        pin7: "net.N2",
        pin5: "net.N2",
        pin6: "net.N4",
        pin3: "net.N6",
        pin2: "net.N6",
        pin8: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-4.29} pcbY={-17.37} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={4.76} pcbY={-11.93} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.15} pcbY={-8.04} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.31} pcbY={0.90} connections={{
        pin3: "net.N1",
        pin2: "net.N6",
        pin1: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.47} pcbY={2.82} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
