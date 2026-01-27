/** Randomly generated circuit 289. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="dip8" pcbX={10.00} pcbY={-4.00} connections={{
        pin2: "net.N3",
        pin3: "net.N3",
        pin7: "net.N4",
        pin6: "net.N6",
        pin4: "net.N9",
        pin1: "net.N10",
        pin5: "net.N12",
        pin8: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={6.00} pcbY={6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-8.00} pcbY={2.00} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
        pin3: "net.N10",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-13.50} pcbY={-7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={5.00} pcbY={2.50} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={12.00} pcbY={5.00} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-6.50} pcbY={-6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-13.00} pcbY={8.00} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
  </board>
)
