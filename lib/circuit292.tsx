/** Randomly generated circuit 292. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.00} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={7.50} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-9.00} pcbY={-10.50} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
