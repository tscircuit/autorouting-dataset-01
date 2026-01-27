/** Randomly generated circuit 282. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.00} pcbY={9.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
  </board>
)
