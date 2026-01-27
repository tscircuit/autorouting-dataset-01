/** Randomly generated circuit 240. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={-10.50} pcbY={10.50} connections={{
        pin4: "net.N2",
        pin3: "net.N2",
        pin8: "net.N3",
        pin2: "net.N4",
        pin5: "net.N7",
        pin7: "net.N8",
        pin6: "net.N10",
        pin1: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.50} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.00} pcbY={2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={-2.00} connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={10.50} pcbY={6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-1.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin3: "net.N3",
        pin2: "net.N7",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={-13.50} pcbY={-1.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={10.50} pcbY={13.50} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin3: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={-3.00} pcbY={-9.00} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} inductance="10uH" />
  </board>
)
