/** Randomly generated circuit 297. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={7.50} pcbY={-6.00} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.00} pcbY={-6.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={9.00} pcbY={1.50} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={3.00} pcbY={5.50} connections={{
        pin5: "net.N2",
        pin1: "net.N2",
        pin2: "net.N3",
        pin4: "net.N3",
        pin6: "net.N5",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-11.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} />
  </board>
)
