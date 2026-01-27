/** Randomly generated circuit 204. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin3: "net.N2",
        pin1: "net.N2",
        pin2: "net.N4",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={1.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={9.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={1.00} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={9.00} pcbY={1.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-13.50} pcbY={-6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <chip name="chip-2" footprint="soic8" pcbX={-10.50} pcbY={-1.00} connections={{
        pin6: "net.N2",
        pin3: "net.N4",
        pin1: "net.N4",
        pin7: "net.N4",
        pin2: "net.N6",
        pin8: "net.N7",
        pin4: "net.N8",
        pin5: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={3.50} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} inductance="10uH" />
  </board>
)
