/** Randomly generated circuit 128. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <inductor name="inductor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N5",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-323" pcbX={1.50} pcbY={7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-7.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} />
  </board>
)
