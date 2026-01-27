/** Randomly generated circuit 254. */
export default () => (
  <board width="23.00mm" height="40.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
        pin3: "net.N6",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N6",
        pin3: "net.N8",
        pin1: "net.N10",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={6.00} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={-6.00} pcbY={-13.50} connections={{
        pin8: "net.N1",
        pin5: "net.N2",
        pin6: "net.N2",
        pin4: "net.N5",
        pin3: "net.N8",
        pin2: "net.N9",
        pin7: "net.N9",
        pin1: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.50} pcbY={-3.50} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={1.00} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-5.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin3: "net.N5",
        pin2: "net.N11",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={4.50} pcbY={0.00} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={7.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={6.00} pcbY={-4.50} connections={{
        pin1: "net.N11",
        pin2: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-7.00} pcbY={9.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin3: "net.N7",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.00} pcbY={13.50} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={4.50} pcbY={-15.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
  </board>
)
