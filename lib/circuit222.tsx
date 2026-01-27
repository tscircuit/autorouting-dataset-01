/** Randomly generated circuit 222. */
export default () => (
  <board width="25.00mm" height="25.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-7.00} pcbY={7.00} connections={{
        pin5: "net.N1",
        pin2: "net.N4",
        pin1: "net.N4",
        pin7: "net.N7",
        pin8: "net.N8",
        pin6: "net.N8",
        pin4: "net.N10",
        pin3: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-1.00} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-0.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={5.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={7.50} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.50} pcbY={-0.50} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={4.00} pcbY={-4.00} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={4.50} pcbY={-0.50} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-1.00} pcbY={7.00} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.50} pcbY={-7.00} connections={{
        pin3: "net.N2",
        pin1: "net.N5",
        pin2: "net.N8",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-8.00} pcbY={-1.50} connections={{
        pin2: "net.N6",
        pin3: "net.N6",
        pin1: "net.N7",
      }} type="npn" />
  </board>
)
