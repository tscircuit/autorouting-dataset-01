/** Randomly generated circuit 253. */
export default () => (
  <board width="16.00mm" height="16.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.00} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
  </board>
)
