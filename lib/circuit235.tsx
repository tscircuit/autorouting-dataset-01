/** Randomly generated circuit 235. */
export default () => (
  <board width="32.00mm" height="19.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.00} pcbY={-5.00} connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N5",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={7.50} pcbY={-6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={9.00} pcbY={1.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
        pin3: "net.N6",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-2.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0402" pcbX={1.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-11.00} pcbY={1.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={1.50} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-11.00} pcbY={6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
