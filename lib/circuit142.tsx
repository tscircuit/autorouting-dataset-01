/** Randomly generated circuit 142. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0805" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-6.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-323" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.00} pcbY={6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <resistor name="resistor-3" footprint="0603" pcbX={-9.00} pcbY={10.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0805" pcbX={-1.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0603" pcbX={2.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
  </board>
)
