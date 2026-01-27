/** Randomly generated circuit 100. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin3: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={0.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.50} pcbY={-6.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-3.50} pcbY={-7.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-4.00} pcbY={9.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
  </board>
)
