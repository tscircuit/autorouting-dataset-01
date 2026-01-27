/** Randomly generated circuit 256. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
        pin3: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-7.50} pcbY={1.50} connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={5.00} pcbY={7.00} connections={{
        pin4: "net.N1",
        pin1: "net.N4",
        pin7: "net.N6",
        pin6: "net.N9",
        pin5: "net.N10",
        pin3: "net.N11",
        pin2: "net.N16",
        pin8: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.50} pcbY={10.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.00} pcbY={-2.00} connections={{
        pin3: "net.N7",
        pin1: "net.N13",
        pin2: "net.N15",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={10.50} pcbY={-10.50} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-4.00} pcbY={8.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-12.00} pcbY={-12.00} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.00} pcbY={-15.00} connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin1: "net.N12",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={-15.00} pcbY={-4.50} connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-13.00} pcbY={1.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-4" footprint="0402" pcbX={2.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={15.00} pcbY={6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }} />
  </board>
)
