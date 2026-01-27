/** Randomly generated circuit 269. */
export default () => (
  <board width="27.00mm" height="27.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin1: "net.N9",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin3: "net.N1",
        pin2: "net.N8",
        pin1: "net.N9",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-7.50} pcbY={9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.00} pcbY={3.50} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-323" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} />
    <inductor name="inductor-3" footprint="0805" pcbX={6.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={7.00} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0603" pcbX={1.00} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={-9.00} pcbY={-9.00} connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-5.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.00} pcbY={-9.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
