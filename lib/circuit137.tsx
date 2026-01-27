/** Randomly generated circuit 137. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N2",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={0.00} pcbY={3.50} connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N4",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.50} pcbY={-0.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
  </board>
)
