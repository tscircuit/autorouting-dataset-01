/** Randomly generated circuit 243. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
        pin3: "net.N9",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={-5.00} pcbY={5.00} connections={{
        pin6: "net.N1",
        pin2: "net.N4",
        pin8: "net.N4",
        pin7: "net.N5",
        pin3: "net.N7",
        pin1: "net.N8",
        pin4: "net.N8",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={0.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={0.50} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-4.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={3.00} pcbY={-12.00} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin5: "net.N5",
        pin2: "net.N6",
        pin4: "net.N7",
        pin6: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={-7.50} pcbY={13.50} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.50} pcbY={15.00} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} />
    <resistor name="resistor-4" footprint="0402" pcbX={6.00} pcbY={-1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
  </board>
)
