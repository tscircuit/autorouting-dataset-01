/** Randomly generated circuit 144. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={1.00} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.00} pcbY={3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N6",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-3.50} pcbY={-0.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.50} pcbY={-6.50} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
  </board>
)
