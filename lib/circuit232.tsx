/** Randomly generated circuit 232. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N3",
        pin1: "net.N12",
        pin2: "net.N15",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }} />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={1.00} pcbY={-4.00} connections={{
        pin1: "net.N8",
        pin4: "net.N13",
        pin3: "net.N14",
        pin2: "net.N19",
      }} pinCount={4} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0603" pcbX={-1.00} pcbY={6.00} connections={{
        pin1: "net.N11",
        pin2: "net.N17",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinheader4" pcbX={12.00} pcbY={9.00} connections={{
        pin4: "net.N4",
        pin3: "net.N8",
        pin2: "net.N12",
        pin1: "net.N19",
      }} pinCount={4} pitch="2.54mm" />
    <resistor name="resistor-1" footprint="0603" pcbX={-12.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={3.00} pcbY={3.50} connections={{
        pin1: "net.N12",
        pin2: "net.N16",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="pinrow8" pcbX={7.50} pcbY={-13.50} connections={{
        pin8: "net.N1",
        pin6: "net.N1",
        pin7: "net.N2",
        pin3: "net.N3",
        pin4: "net.N8",
        pin1: "net.N10",
        pin2: "net.N16",
        pin5: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={13.50} pcbY={-4.50} connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-15.00} pcbY={-15.00} connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0603" pcbX={9.00} pcbY={2.00} connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={-0.50} pcbY={10.50} connections={{
        pin2: "net.N3",
        pin3: "net.N7",
        pin1: "net.N13",
      }} type="npn" />
    <pinheader name="pinhead-3" footprint="pinheader2" pcbX={-6.00} pcbY={1.00} connections={{
        pin1: "net.N13",
        pin2: "net.N17",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-2" footprint="soic8" pcbX={-14.00} pcbY={15.00} connections={{
        pin4: "net.N5",
        pin7: "net.N6",
        pin1: "net.N6",
        pin8: "net.N7",
        pin5: "net.N9",
        pin3: "net.N11",
        pin2: "net.N14",
        pin6: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-8.50} pcbY={-12.00} connections={{
        pin3: "net.N2",
        pin1: "net.N5",
        pin2: "net.N15",
      }} type="npn" />
  </board>
)
