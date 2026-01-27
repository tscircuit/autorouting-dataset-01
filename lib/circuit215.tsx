/** Randomly generated circuit 215. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={3.00} pcbY={-6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={9.00} pcbY={1.00} connections={{
        pin3: "net.N4",
        pin1: "net.N8",
        pin2: "net.N9",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={0.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0805" pcbX={-12.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-4.50} pcbY={-0.50} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={8.50} pcbY={-5.50} connections={{
        pin6: "net.N4",
        pin2: "net.N5",
        pin5: "net.N6",
        pin7: "net.N7",
        pin1: "net.N7",
        pin3: "net.N8",
        pin8: "net.N10",
        pin4: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={5.00} pcbY={6.00} connections={{
        pin3: "net.N3",
        pin2: "net.N7",
        pin1: "net.N13",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0805" pcbX={-13.50} pcbY={1.50} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-9.00} pcbY={5.50} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
