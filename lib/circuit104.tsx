/** Randomly generated circuit 104. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-6.00} pcbY={-4.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={-6.00} pcbY={1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={7.00} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
  </board>
)
