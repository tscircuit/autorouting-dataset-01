/** Randomly generated circuit 175. */
export default () => (
  <board width="22.00mm" height="14.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.00} pcbY={2.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={-2.50} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0402" pcbX={6.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={6.00} pcbY={2.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
  </board>
)
