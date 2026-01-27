/** Randomly generated circuit 156. */
export default () => (
  <board width="30.00mm" height="30.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-4.50} pcbY={-4.50} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N9",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0805" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={1.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={6.00} pcbY={0.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={-7.00} pcbY={-10.00} connections={{
        pin6: "net.N2",
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N8",
        pin5: "net.N10",
        pin4: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={5.50} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={7.00} pcbY={9.00} connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.00} pcbY={0.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N9",
      }} type="npn" />
  </board>
)
