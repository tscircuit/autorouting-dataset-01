/** Randomly generated circuit 293. */
export default () => (
  <board width="32.00mm" height="32.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin1: "net.N1",
        pin2: "net.N3",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.50} pcbY={-7.50} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N7",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-7.00} pcbY={-2.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={7.00} pcbY={-2.00} connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin1: "net.N8",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={8.00} pcbY={4.00} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={10.50} pcbY={12.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0603" pcbX={-2.50} pcbY={-3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
