/** Randomly generated circuit 259. */
export default () => (
  <board width="22.00mm" height="38.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="dip8" pcbX={-4.00} pcbY={-6.50} connections={{
        pin2: "net.N1",
        pin5: "net.N2",
        pin8: "net.N2",
        pin6: "net.N3",
        pin7: "net.N6",
        pin3: "net.N9",
        pin4: "net.N10",
        pin1: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
        pin3: "net.N16",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-1.50} pcbY={3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-6.00} pcbY={13.50} connections={{
        pin1: "net.N15",
        pin2: "net.N16",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={1.50} pcbY={15.00} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={2.50} pcbY={-3.00} connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-6.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={3.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.00} pcbY={-9.00} connections={{
        pin1: "net.N11",
        pin3: "net.N15",
        pin2: "net.N16",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={-1.50} pcbY={6.00} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="pinrow6" pcbX={-3.00} pcbY={-14.00} connections={{
        pin3: "net.N3",
        pin5: "net.N4",
        pin6: "net.N7",
        pin1: "net.N8",
        pin2: "net.N11",
        pin4: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
