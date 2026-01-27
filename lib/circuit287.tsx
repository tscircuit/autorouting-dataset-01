/** Randomly generated circuit 287. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin6: "net.N2",
        pin2: "net.N4",
        pin7: "net.N7",
        pin3: "net.N8",
        pin5: "net.N9",
        pin8: "net.N10",
        pin4: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.00} pcbY={9.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-1.50} pcbY={-9.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-1.50} pcbY={9.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={4.00} pcbY={-7.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={4.00} pcbY={7.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0402" pcbX={-4.50} pcbY={4.50} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-1.00} pcbY={4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
