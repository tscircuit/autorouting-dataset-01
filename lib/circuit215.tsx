/** Randomly generated circuit 215. */
export default () => (
  <board width="26.00mm" height="16.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-6.00} pcbY={-4.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-9.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={7.00} pcbY={1.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N2",
      }} type="npn" />
  </board>
)
