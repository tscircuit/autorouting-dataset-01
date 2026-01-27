/** Randomly generated circuit 257. */
export default () => (
  <board width="29.00mm" height="29.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-6.00} pcbY={-1.00} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={0.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-6.50} pcbY={-10.00} connections={{
        pin2: "net.N1",
        pin6: "net.N2",
        pin3: "net.N2",
        pin1: "net.N5",
        pin4: "net.N6",
        pin5: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-1.50} pcbY={-3.50} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} />
    <inductor name="inductor-2" footprint="0805" pcbX={10.50} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={8.00} pcbY={5.00} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0402" pcbX={9.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0402" pcbX={8.00} pcbY={10.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0805" pcbX={3.00} pcbY={-3.50} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
