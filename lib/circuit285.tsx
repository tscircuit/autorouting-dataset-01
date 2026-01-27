/** Randomly generated circuit 285. */
export default () => (
  <board width="44.00mm" height="25.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={-7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
        pin3: "net.N13",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.00} pcbY={6.00} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N7",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={3.00} pcbY={-5.00} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={10.50} pcbY={-9.00} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={6.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={9.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={-13.50} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0603" pcbX={-13.50} pcbY={7.50} connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={12.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-16.50} pcbY={-7.50} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={16.00} pcbY={2.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
        pin3: "net.N10",
      }} type="npn" />
    <inductor name="inductor-6" footprint="0603" pcbX={15.00} pcbY={8.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-2.50} pcbY={-7.00} connections={{
        pin1: "net.N6",
        pin3: "net.N9",
        pin2: "net.N11",
      }} type="npn" />
    <inductor name="inductor-7" footprint="0603" pcbX={7.00} pcbY={-7.00} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
  </board>
)
