/** Randomly generated circuit 266. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <diode name="diode-1" footprint="SOD-323" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.00} pcbY={-3.50} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={6.00} pcbY={7.50} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="pinrow8" pcbX={-7.00} pcbY={7.00} connections={{
        pin7: "net.N3",
        pin8: "net.N6",
        pin5: "net.N8",
        pin2: "net.N10",
        pin3: "net.N10",
        pin4: "net.N11",
        pin1: "net.N11",
        pin6: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-9.00} pcbY={-9.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={3.50} pcbY={-7.50} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin4: "net.N9",
        pin6: "net.N9",
        pin5: "net.N9",
        pin1: "net.N10",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={6.00} pcbY={2.00} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-9.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-9.50} pcbY={1.50} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N12",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={13.50} pcbY={1.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={12.00} pcbY={7.00} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} inductance="10uH" />
  </board>
)
