/** Randomly generated circuit 101. */
export default () => (
  <board width="15.00mm" height="24.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.00} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={3.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
  </board>
)
