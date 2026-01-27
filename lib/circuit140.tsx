/** Randomly generated circuit 140. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-1.50} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
  </board>
)
