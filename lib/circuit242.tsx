/** Randomly generated circuit 242. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0603" pcbX={-10.50} pcbY={-10.50} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.50} pcbY={-10.50} connections={{
        pin3: "net.N2",
        pin2: "net.N6",
        pin1: "net.N11",
      }} type="npn" />
    <inductor name="inductor-5" footprint="0402" pcbX={10.50} pcbY={6.00} connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-13.50} pcbY={-3.00} connections={{
        pin3: "net.N3",
        pin2: "net.N13",
        pin1: "net.N14",
      }} type="npn" />
    <inductor name="inductor-6" footprint="0402" pcbX={0.00} pcbY={12.00} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.50} pcbY={1.50} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
        pin3: "net.N14",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={8.00} pcbY={13.00} connections={{
        pin1: "net.N1",
        pin6: "net.N5",
        pin4: "net.N6",
        pin2: "net.N7",
        pin7: "net.N9",
        pin3: "net.N12",
        pin5: "net.N13",
        pin8: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-5" footprint="0402" pcbX={-15.00} pcbY={4.50} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic8" pcbX={-9.50} pcbY={2.00} connections={{
        pin4: "net.N1",
        pin7: "net.N1",
        pin2: "net.N2",
        pin1: "net.N4",
        pin6: "net.N7",
        pin8: "net.N10",
        pin3: "net.N10",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
