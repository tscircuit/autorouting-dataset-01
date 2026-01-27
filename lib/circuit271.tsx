/** Randomly generated circuit 271. */
export default () => (
  <board width="20.00mm" height="34.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin3: "net.N5",
        pin1: "net.N6",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-6.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.00} pcbY={7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={-6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={6.00} pcbY={7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={3.00} pcbY={-13.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <inductor name="inductor-3" footprint="0603" pcbX={-4.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
