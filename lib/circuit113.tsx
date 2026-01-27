/** Randomly generated circuit 113. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={-1.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
  </board>
)
