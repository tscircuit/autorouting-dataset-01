/** Randomly generated circuit 275. */
export default () => (
  <board width="50.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
        pin3: "net.N12",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={4.50} pcbY={7.50} connections={{
        pin2: "net.N10",
        pin1: "net.N16",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={-2.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-9.00} pcbY={9.00} connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={-12.00} pcbY={1.00} connections={{
        pin8: "net.N3",
        pin3: "net.N4",
        pin6: "net.N5",
        pin4: "net.N7",
        pin2: "net.N8",
        pin7: "net.N10",
        pin5: "net.N13",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={12.00} pcbY={6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={10.00} pcbY={2.00} connections={{
        pin2: "net.N2",
        pin3: "net.N9",
        pin1: "net.N10",
        pin4: "net.N14",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={14.00} pcbY={-9.00} connections={{
        pin3: "net.N3",
        pin1: "net.N7",
        pin2: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={-15.00} pcbY={-9.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={2.00} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-18.00} pcbY={9.00} connections={{
        pin1: "net.N11",
        pin3: "net.N14",
        pin2: "net.N16",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-2.00} pcbY={9.00} connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }} />
    <inductor name="inductor-4" footprint="0603" pcbX={18.00} pcbY={8.00} connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }} inductance="10uH" />
  </board>
)
