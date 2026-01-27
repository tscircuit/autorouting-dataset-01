/** Randomly generated circuit 185. */
export default () => (
  <board width="32.00mm" height="19.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.00} pcbY={-5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={-9.00} pcbY={3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={9.00} pcbY={-4.50} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N6",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={9.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-3.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-1.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-323" pcbX={1.00} pcbY={3.00} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} />
  </board>
)
