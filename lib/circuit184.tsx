/** Randomly generated circuit 184. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={0.50} pcbY={-4.50} connections={{
        pin5: "net.N2",
        pin4: "net.N3",
        pin1: "net.N3",
        pin2: "net.N4",
        pin3: "net.N4",
        pin6: "net.N5",
        pin7: "net.N7",
        pin8: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={9.00} pcbY={4.50} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={10.50} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={-9.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
