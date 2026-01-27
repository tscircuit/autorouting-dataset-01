/** Randomly generated circuit 102. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-6.50} pcbY={6.50} connections={{
        pin4: "net.N1",
        pin3: "net.N4",
        pin5: "net.N4",
        pin7: "net.N5",
        pin2: "net.N5",
        pin6: "net.N6",
        pin1: "net.N6",
        pin8: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.00} pcbY={-5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={2.00} pcbY={4.50} connections={{
        pin6: "net.N2",
        pin1: "net.N3",
        pin3: "net.N4",
        pin4: "net.N5",
        pin2: "net.N8",
        pin5: "net.N8",
        pin7: "net.N10",
        pin8: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={9.00} pcbY={-9.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={4.00} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
