/** Randomly generated circuit 231. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-7.00} pcbY={7.00} connections={{
        pin1: "net.N2",
        pin3: "net.N7",
        pin2: "net.N14",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.00} pcbY={6.00} connections={{
        pin3: "net.N4",
        pin1: "net.N14",
        pin2: "net.N15",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={5.00} pcbY={-9.00} connections={{
        pin3: "net.N1",
        pin2: "net.N10",
        pin1: "net.N13",
        pin4: "net.N13",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-3" footprint="SOD-123" pcbX={7.00} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={10.50} pcbY={4.50} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0805" pcbX={2.50} pcbY={-3.50} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-4" footprint="SOD-323" pcbX={-8.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N16",
      }} />
    <resistor name="resistor-2" footprint="0805" pcbX={10.50} pcbY={12.00} connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={-13.50} pcbY={-13.50} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-12.00} pcbY={15.00} connections={{
        pin3: "net.N1",
        pin11: "net.N3",
        pin4: "net.N3",
        pin6: "net.N4",
        pin9: "net.N5",
        pin1: "net.N6",
        pin12: "net.N6",
        pin5: "net.N8",
        pin14: "net.N8",
        pin2: "net.N9",
        pin13: "net.N11",
        pin16: "net.N14",
        pin7: "net.N15",
        pin8: "net.N15",
        pin10: "net.N16",
        pin15: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={0.00} pcbY={16.50} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={-7.00} pcbY={-12.00} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0603" pcbX={-13.00} pcbY={-8.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} resistance="1k" />
  </board>
)
