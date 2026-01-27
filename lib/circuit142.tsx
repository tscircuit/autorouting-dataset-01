/** Randomly generated circuit 142. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-0.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0603" pcbX={-1.00} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={2.50} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.50} pcbY={-2.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N6",
      }} type="npn" />
  </board>
)
