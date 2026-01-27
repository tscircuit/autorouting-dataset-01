/** Randomly generated circuit 131. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} />
  </board>
)
