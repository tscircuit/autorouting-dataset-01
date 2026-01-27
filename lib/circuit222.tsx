/** Randomly generated circuit 222. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-1.50} pcbY={-3.50} connections={{
        pin1: "net.N10",
        pin2: "net.N10",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={9.00} pcbY={9.00} connections={{
        pin3: "net.N8",
        pin2: "net.N15",
        pin1: "net.N15",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={1.50} pcbY={3.00} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={7.50} pcbY={-7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={9.00} pcbY={0.00} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.00} pcbY={-9.00} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={2.50} pcbY={-3.00} connections={{
        pin2: "net.N11",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0805" pcbX={-10.00} pcbY={10.00} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-323" pcbX={-4.00} pcbY={10.00} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-12.00} pcbY={-12.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-8.50} pcbY={-1.50} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N14",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0603" pcbX={4.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0603" pcbX={8.00} pcbY={-13.00} connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0402" pcbX={5.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={13.00} pcbY={-8.00} connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-6" footprint="0402" pcbX={-6.00} pcbY={-11.00} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-6" footprint="0402" pcbX={1.50} pcbY={6.00} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={6.50} pcbY={-4.50} connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
  </board>
)
