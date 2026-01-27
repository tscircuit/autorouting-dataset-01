/** Randomly generated circuit 164. */
export default () => (
  <board width="20.00mm" height="34.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin3: "net.N6",
        pin1: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.50} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N5",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={0.00} pcbY={-3.50} connections={{
        pin3: "net.N3",
        pin1: "net.N6",
        pin2: "net.N7",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-6.00} pcbY={12.00} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={2.00} pcbY={12.00} connections={{
        pin4: "net.N1",
        pin1: "net.N2",
        pin8: "net.N3",
        pin2: "net.N4",
        pin3: "net.N5",
        pin6: "net.N7",
        pin7: "net.N9",
        pin5: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-12.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={1.00} pcbY={-13.00} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
  </board>
)
