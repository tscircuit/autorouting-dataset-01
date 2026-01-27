/** Randomly generated circuit 177. */
export default () => (
  <board width="11.00mm" height="16.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-1.50} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-1.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
  </board>
)
