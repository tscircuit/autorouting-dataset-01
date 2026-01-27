/** Randomly generated circuit 231. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={0.00} pcbY={-3.50} connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N7",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={7.00} pcbY={-7.00} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={3.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0603" pcbX={7.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.50} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
  </board>
)
