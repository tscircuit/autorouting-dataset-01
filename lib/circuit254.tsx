/** Randomly generated circuit 254. */
export default () => (
  <board width="100.00mm" height="40.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={25.43} pcbY={-10.55} connections={{
        pin2: "net.N4",
        pin4: "net.N4",
        pin1: "net.N6",
        pin3: "net.N10",
        pin6: "net.N11",
        pin5: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={8.12} pcbY={-8.43} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} />
    <chip name="chip-2" footprint="soic8" pcbX={-42.17} pcbY={-9.02} connections={{
        pin5: "net.N1",
        pin6: "net.N1",
        pin7: "net.N2",
        pin1: "net.N5",
        pin2: "net.N6",
        pin8: "net.N9",
        pin3: "net.N11",
        pin4: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={20.04} pcbY={0.43} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={44.64} pcbY={-3.82} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.11} pcbY={-17.66} connections={{
        pin3: "net.N3",
        pin1: "net.N5",
        pin2: "net.N10",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-16.88} pcbY={8.36} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={2.14} pcbY={-15.29} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="dip8" pcbX={-31.54} pcbY={14.14} connections={{
        pin6: "net.N3",
        pin7: "net.N4",
        pin3: "net.N5",
        pin2: "net.N7",
        pin5: "net.N7",
        pin4: "net.N8",
        pin8: "net.N10",
        pin1: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={-7.68} pcbY={-9.14} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }} inductance="10uH" />
  </board>
)
