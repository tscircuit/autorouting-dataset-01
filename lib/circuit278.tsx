/** Randomly generated circuit 278. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N3",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0603" pcbX={-1.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.50} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
  </board>
)
