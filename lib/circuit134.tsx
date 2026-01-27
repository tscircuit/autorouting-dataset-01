/** Randomly generated circuit 134. */
export default () => (
  <board width="32.00mm" height="32.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin3: "net.N8",
        pin2: "net.N13",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={-5.00} pcbY={5.00} connections={{
        pin4: "net.N2",
        pin1: "net.N5",
        pin2: "net.N6",
        pin7: "net.N7",
        pin6: "net.N8",
        pin3: "net.N10",
        pin8: "net.N12",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={-1.00} pcbY={-6.50} connections={{
        pin5: "net.N2",
        pin8: "net.N3",
        pin6: "net.N5",
        pin7: "net.N8",
        pin1: "net.N9",
        pin3: "net.N11",
        pin4: "net.N13",
        pin2: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.50} pcbY={3.50} connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={7.00} pcbY={2.00} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={6.00} pcbY={8.00} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="pinrow6" pcbX={-8.00} pcbY={10.50} connections={{
        pin2: "net.N1",
        pin4: "net.N2",
        pin5: "net.N2",
        pin6: "net.N4",
        pin1: "net.N6",
        pin3: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N6",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={9.00} pcbY={-9.00} connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={4.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
