/** Randomly generated circuit 182. */
export default () => (
  <board width="12.00mm" height="36.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={1.64} pcbY={-4.65} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={2.60} pcbY={15.86} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={9.50} connections={{
        pin5: "net.N1",
        pin1: "net.N2",
        pin4: "net.N3",
        pin2: "net.N6",
        pin3: "net.N6",
        pin6: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={5.19} pcbY={-14.31} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-1.04} pcbY={-16.62} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.04} pcbY={-4.56} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
