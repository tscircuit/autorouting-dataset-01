/** Randomly generated circuit 276. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-7.50} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={0.00} pcbY={7.50} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={2.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={9.00} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N7",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={12.00} pcbY={-7.00} connections={{
        pin6: "net.N1",
        pin2: "net.N1",
        pin4: "net.N6",
        pin1: "net.N10",
        pin3: "net.N11",
        pin5: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-13.50} pcbY={-7.50} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.00} pcbY={3.50} connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0603" pcbX={-10.00} pcbY={8.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-3.50} pcbY={-1.50} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={-11.00} pcbY={-2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0402" pcbX={-13.00} pcbY={3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-5" footprint="0402" pcbX={-16.00} pcbY={8.00} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} resistance="1k" />
  </board>
)
