/** Randomly generated circuit 255. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-7.50} pcbY={3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={5.00} pcbY={-6.00} connections={{
        pin6: "net.N3",
        pin5: "net.N3",
        pin1: "net.N5",
        pin3: "net.N5",
        pin4: "net.N6",
        pin2: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={2.50} pcbY={4.50} connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin5: "net.N7",
        pin4: "net.N7",
        pin6: "net.N7",
        pin8: "net.N11",
        pin1: "net.N11",
        pin7: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0402" pcbX={-8.00} pcbY={8.00} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-4.00} pcbY={-2.00} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={4.00} pcbY={-2.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.00} pcbY={6.50} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} />
  </board>
)
