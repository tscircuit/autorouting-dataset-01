/** Randomly generated circuit 199. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-4.00} pcbY={4.00} connections={{
        pin4: "net.N2",
        pin2: "net.N3",
        pin1: "net.N3",
        pin6: "net.N4",
        pin5: "net.N4",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={0.00} connections={{
        pin1: "net.N10",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={6.00} pcbY={6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={5.00} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={13.50} pcbY={-6.00} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0603" pcbX={4.50} pcbY={0.50} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0402" pcbX={11.00} pcbY={-1.00} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={12.00} pcbY={4.00} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-5.50} pcbY={-6.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
  </board>
)
