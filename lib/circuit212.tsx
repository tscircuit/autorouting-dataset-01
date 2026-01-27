/** Randomly generated circuit 212. */
export default () => (
  <board width="30.00mm" height="30.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic8" pcbX={0.00} pcbY={-4.50} connections={{
        pin6: "net.N2",
        pin1: "net.N4",
        pin7: "net.N4",
        pin8: "net.N6",
        pin3: "net.N7",
        pin4: "net.N7",
        pin2: "net.N7",
        pin5: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-1.50} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="soic8" pcbX={6.00} pcbY={7.00} connections={{
        pin4: "net.N1",
        pin7: "net.N4",
        pin5: "net.N5",
        pin6: "net.N5",
        pin1: "net.N6",
        pin2: "net.N7",
        pin3: "net.N9",
        pin8: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={8.00} pcbY={-8.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={8.00} pcbY={-2.00} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={4.00} pcbY={1.50} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
