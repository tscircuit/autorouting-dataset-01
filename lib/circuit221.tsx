/** Randomly generated circuit 221. */
export default () => (
  <board width="32.00mm" height="32.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
        pin3: "net.N14",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={-7.00} pcbY={7.00} connections={{
        pin7: "net.N1",
        pin2: "net.N3",
        pin6: "net.N4",
        pin1: "net.N9",
        pin8: "net.N9",
        pin5: "net.N10",
        pin3: "net.N15",
        pin4: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={4.00} pcbY={9.00} connections={{
        pin8: "net.N1",
        pin4: "net.N4",
        pin7: "net.N5",
        pin6: "net.N8",
        pin2: "net.N10",
        pin3: "net.N11",
        pin5: "net.N12",
        pin1: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-4.50} pcbY={0.00} connections={{
        pin1: "net.N14",
        pin2: "net.N14",
        pin3: "net.N15",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={6.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} resistance="1k" />
    <chip name="chip-3" footprint="soic16" pcbX={-8.00} pcbY={-11.00} connections={{
        pin16: "net.N1",
        pin3: "net.N2",
        pin10: "net.N3",
        pin13: "net.N4",
        pin2: "net.N4",
        pin11: "net.N5",
        pin5: "net.N6",
        pin9: "net.N6",
        pin8: "net.N6",
        pin14: "net.N9",
        pin12: "net.N10",
        pin4: "net.N11",
        pin6: "net.N11",
        pin7: "net.N13",
        pin1: "net.N15",
        pin15: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={6.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={-11.00} pcbY={-4.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
