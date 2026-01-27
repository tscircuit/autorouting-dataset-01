/** Randomly generated circuit 201. */
export default () => (
  <board width="22.00mm" height="38.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N8",
        pin3: "net.N9",
        pin1: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.00} pcbY={-7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={7.50} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.00} pcbY={-6.00} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N10",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-4.00} pcbY={-4.00} connections={{
        pin3: "net.N4",
        pin2: "net.N7",
        pin1: "net.N7",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={3.00} pcbY={12.00} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.00} pcbY={-12.00} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={7.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={-6.00} pcbY={-13.00} connections={{
        pin3: "net.N6",
        pin1: "net.N8",
        pin2: "net.N11",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={-6.00} pcbY={15.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-6" footprint="SOT-23" pcbX={-5.00} pcbY={-0.50} connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N11",
      }} type="npn" />
  </board>
)
