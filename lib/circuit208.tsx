/** Randomly generated circuit 208. */
export default () => (
  <board width="33.00mm" height="33.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N3",
        pin6: "net.N4",
        pin8: "net.N10",
        pin7: "net.N10",
        pin2: "net.N11",
        pin5: "net.N11",
        pin1: "net.N17",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0805" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={-5.50} pcbY={5.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
        pin3: "net.N6",
        pin4: "net.N15",
      }} pinCount={4} pitch="2.54mm" />
    <chip name="chip-3" footprint="soic16" pcbX={4.50} pcbY={-10.50} connections={{
        pin6: "net.N1",
        pin13: "net.N2",
        pin10: "net.N5",
        pin14: "net.N6",
        pin15: "net.N7",
        pin11: "net.N7",
        pin7: "net.N8",
        pin16: "net.N9",
        pin2: "net.N11",
        pin1: "net.N12",
        pin4: "net.N13",
        pin9: "net.N14",
        pin12: "net.N14",
        pin8: "net.N14",
        pin3: "net.N15",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={5.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
        pin3: "net.N15",
      }} type="npn" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={-6.00} pcbY={11.50} connections={{
        pin4: "net.N5",
        pin2: "net.N10",
        pin6: "net.N11",
        pin5: "net.N12",
        pin1: "net.N16",
        pin3: "net.N17",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-8.00} pcbY={-4.00} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-4.50} pcbY={-4.50} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-1.00} pcbY={-4.50} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={2.50} pcbY={-4.50} connections={{
        pin2: "net.N5",
        pin1: "net.N17",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0603" pcbX={8.00} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-1.00} connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={7.00} pcbY={13.00} connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={5.50} pcbY={-1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
  </board>
)
