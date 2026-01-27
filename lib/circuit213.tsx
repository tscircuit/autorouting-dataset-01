/** Randomly generated circuit 213. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin3: "net.N2",
        pin2: "net.N9",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={1.50} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-8.00} pcbY={8.00} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={-10.50} pcbY={-10.50} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-12.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin3: "net.N9",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-5" footprint="0603" pcbX={10.50} pcbY={7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-3.00} pcbY={6.00} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} />
    <resistor name="resistor-6" footprint="0603" pcbX={5.50} pcbY={-4.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
  </board>
)
