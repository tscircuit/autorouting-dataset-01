/** Randomly generated circuit 272. */
export default () => (
  <board width="25.00mm" height="25.00mm">
    <diode name="diode-1" footprint="SOD-323" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin3: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={1.00} pcbY={-7.00} connections={{
        pin2: "net.N3",
        pin6: "net.N4",
        pin5: "net.N5",
        pin1: "net.N6",
        pin3: "net.N7",
        pin4: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={6.00} pcbY={7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-323" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
  </board>
)
