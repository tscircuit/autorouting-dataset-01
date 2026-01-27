/** Randomly generated circuit 262. */
export default () => (
  <board width="27.00mm" height="27.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin1: "net.N6",
        pin2: "net.N7",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <chip name="chip-1" footprint="pinrow8" pcbX={-4.00} pcbY={4.00} connections={{
        pin6: "net.N3",
        pin7: "net.N4",
        pin3: "net.N5",
        pin2: "net.N7",
        pin5: "net.N8",
        pin8: "net.N9",
        pin4: "net.N10",
        pin1: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={4.50} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-123" pcbX={7.00} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-7.00} pcbY={-1.50} connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N8",
      }} type="npn" />
    <chip name="chip-7" footprint="pinrow6" pcbX={-5.50} pcbY={9.00} connections={{
        pin1: "net.N3",
        pin6: "net.N4",
        pin5: "net.N6",
        pin4: "net.N8",
        pin2: "net.N9",
        pin3: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={9.00} pcbY={4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={-0.50} pcbY={-3.50} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
  </board>
)
