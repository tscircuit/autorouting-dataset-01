/** Randomly generated circuit 205. */
export default () => (
  <board width="38.00mm" height="38.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N5",
        pin5: "net.N7",
        pin7: "net.N8",
        pin2: "net.N11",
        pin3: "net.N11",
        pin1: "net.N12",
        pin8: "net.N15",
        pin6: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.50} pcbY={-6.50} connections={{
        pin2: "net.N3",
        pin3: "net.N5",
        pin1: "net.N13",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.50} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.50} pcbY={6.50} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.00} pcbY={-10.50} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.00} pcbY={9.00} connections={{
        pin2: "net.N8",
        pin1: "net.N16",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={8.00} pcbY={9.00} connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-2.00} pcbY={-6.50} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={10.50} pcbY={-3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} resistance="1k" />
    <chip name="chip-2" footprint="dip8" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N3",
        pin5: "net.N4",
        pin6: "net.N8",
        pin4: "net.N9",
        pin7: "net.N10",
        pin2: "net.N14",
        pin3: "net.N16",
        pin8: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={10.00} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
        pin3: "net.N17",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={-12.00} pcbY={-12.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-12.00} pcbY={12.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
        pin3: "net.N14",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0402" pcbX={-12.00} pcbY={-1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-5" footprint="SOD-123" pcbX={-6.00} pcbY={-12.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
  </board>
)
