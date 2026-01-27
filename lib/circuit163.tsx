/** Randomly generated circuit 163. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-8.00} pcbY={-5.00} connections={{
        pin1: "net.N4",
        pin4: "net.N4",
        pin7: "net.N7",
        pin2: "net.N8",
        pin8: "net.N8",
        pin6: "net.N9",
        pin3: "net.N11",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={4.50} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-3.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={7.50} pcbY={-6.00} connections={{
        pin1: "net.N11",
        pin2: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.00} pcbY={-5.00} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={6.00} pcbY={-1.00} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={10.00} pcbY={5.00} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N5",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0603" pcbX={-3.50} pcbY={-0.50} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0402" pcbX={12.00} pcbY={-1.00} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={3.50} pcbY={2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="0603" pcbX={3.50} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-5" footprint="0402" pcbX={13.00} pcbY={-6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} resistance="1k" />
  </board>
)
