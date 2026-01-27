/** Randomly generated circuit 141. */
export default () => (
  <board width="21.00mm" height="21.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <diode name="diode-5" footprint="SOD-123" pcbX={3.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={1.00} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-6" footprint="SOD-123" pcbX={-5.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
  </board>
)
