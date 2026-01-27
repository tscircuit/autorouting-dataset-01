/** Randomly generated circuit 180. */
export default () => (
  <board width="13.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-2.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={2.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
  </board>
)
