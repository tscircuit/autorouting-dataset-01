/** Randomly generated circuit 267. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.00} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N2",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-2.50} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-0.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={7.50} pcbY={-4.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={6.00} pcbY={1.00} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
