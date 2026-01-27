/** Randomly generated circuit 139. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0805" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.00} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={10.50} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-123" pcbX={8.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <diode name="diode-3" footprint="SOD-323" pcbX={0.50} pcbY={3.50} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <inductor name="inductor-3" footprint="0805" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={4.00} pcbY={-2.50} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
