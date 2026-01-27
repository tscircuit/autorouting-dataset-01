/** Randomly generated circuit 286. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N3",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-4.00} pcbY={9.00} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
