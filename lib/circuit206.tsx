/** Randomly generated circuit 206. */
export default () => (
  <board width="21.00mm" height="36.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.00} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={1.50} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={2.00} pcbY={4.00} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N6",
        pin5: "net.N8",
        pin4: "net.N8",
        pin6: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.50} pcbY={12.00} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-13.00} connections={{
        pin3: "net.N4",
        pin2: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={-6.00} pcbY={-2.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-2.50} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={6.00} pcbY={-2.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={1.00} pcbY={-3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={5.50} pcbY={-5.50} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="0603" pcbX={-6.00} pcbY={13.00} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.00} pcbY={-13.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
  </board>
)
