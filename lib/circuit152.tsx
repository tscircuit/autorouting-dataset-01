/** Randomly generated circuit 152. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={7.50} pcbY={-6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={9.00} pcbY={1.50} connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N7",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={-6.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={3.50} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={5.00} pcbY={5.00} connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
    <inductor name="inductor-4" footprint="0603" pcbX={-11.00} pcbY={-6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
  </board>
)
