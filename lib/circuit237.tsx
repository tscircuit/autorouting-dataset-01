/** Randomly generated circuit 237. */
export default () => (
  <board width="25.00mm" height="25.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
        pin3: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={0.00} pcbY={6.00} connections={{
        pin3: "net.N6",
        pin1: "net.N7",
        pin2: "net.N7",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={-7.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-7.00} pcbY={2.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} />
    <diode name="diode-5" footprint="SOD-123" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N7",
      }} type="npn" />
    <diode name="diode-6" footprint="SOD-123" pcbX={7.00} pcbY={4.00} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} />
    <inductor name="inductor-3" footprint="0603" pcbX={-1.00} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.50} pcbY={1.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
