/** Randomly generated circuit 221. */
export default () => (
  <board width="72.00mm" height="72.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={-9.56} pcbY={35.16} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-22.19} pcbY={23.22} connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={7.99} pcbY={-13.19} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-24.10} pcbY={-32.02} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={30.79} pcbY={21.72} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={30.25} pcbY={-24.03} connections={{
        pin4: "net.N1",
        pin6: "net.N2",
        pin9: "net.N2",
        pin7: "net.N3",
        pin1: "net.N3",
        pin13: "net.N3",
        pin15: "net.N5",
        pin16: "net.N6",
        pin10: "net.N6",
        pin5: "net.N9",
        pin2: "net.N10",
        pin14: "net.N11",
        pin8: "net.N11",
        pin11: "net.N12",
        pin3: "net.N13",
        pin12: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.68} pcbY={6.16} connections={{
        pin3: "net.N6",
        pin1: "net.N11",
        pin2: "net.N15",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={-3.26} pcbY={-13.87} connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={-16.12} pcbY={-18.41} connections={{
        pin8: "net.N3",
        pin4: "net.N4",
        pin2: "net.N8",
        pin5: "net.N9",
        pin3: "net.N11",
        pin7: "net.N12",
        pin1: "net.N14",
        pin6: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0402" pcbX={-5.30} pcbY={-1.54} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-29.87} pcbY={0.72} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="0603" pcbX={1.19} pcbY={-33.50} connections={{
        pin1: "net.N5",
        pin2: "net.N16",
      }} inductance="10uH" />
  </board>
)
