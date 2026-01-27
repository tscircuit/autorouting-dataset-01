/** Randomly generated circuit 252. */
export default () => (
  <board width="44.00mm" height="25.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={-1.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin3: "net.N2",
        pin2: "net.N3",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={5.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={9.00} pcbY={-8.00} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
        pin3: "net.N11",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={-10.50} pcbY={-9.00} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={-13.50} pcbY={-1.50} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={9.00} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin3: "net.N8",
        pin2: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.50} pcbY={0.00} connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0603" pcbX={13.50} pcbY={6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-5.50} pcbY={3.50} connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin1: "net.N13",
      }} type="npn" />
    <inductor name="inductor-5" footprint="0603" pcbX={-5.00} pcbY={-8.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={-16.50} pcbY={6.00} connections={{
        pin2: "net.N4",
        pin3: "net.N9",
        pin1: "net.N12",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={16.00} pcbY={-8.00} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} />
  </board>
)
