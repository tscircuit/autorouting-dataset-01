/** Randomly generated circuit 163. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-10.50} pcbY={-4.50} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
        pin3: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-323" pcbX={7.50} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-2.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0805" pcbX={1.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-323" pcbX={6.00} pcbY={-1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <resistor name="resistor-3" footprint="0805" pcbX={2.00} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={8.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-3.50} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0805" pcbX={-4.00} pcbY={1.50} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={-11.00} pcbY={2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
