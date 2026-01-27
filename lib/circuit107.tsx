/** Randomly generated circuit 107. */
export default () => (
  <board width="14.00mm" height="22.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.50} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={0.50} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N4",
      }} type="npn" />
  </board>
)
