/** Randomly generated circuit 113. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0805" pcbX={1.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-323" pcbX={0.50} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
  </board>
)
