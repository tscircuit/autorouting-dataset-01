/** Randomly generated circuit 225. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin7: "net.N3",
        pin5: "net.N3",
        pin1: "net.N3",
        pin4: "net.N4",
        pin2: "net.N4",
        pin3: "net.N8",
        pin6: "net.N9",
        pin8: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.00} pcbY={-6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-9.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={12.00} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={12.00} pcbY={1.50} connections={{
        pin3: "net.N2",
        pin1: "net.N10",
        pin2: "net.N11",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.00} pcbY={5.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={9.00} pcbY={7.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-6.50} pcbY={-6.50} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
        pin3: "net.N10",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-5.00} pcbY={6.50} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={-2.00} pcbY={-6.50} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-0.50} pcbY={6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
