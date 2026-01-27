/** Randomly generated circuit 176. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={-4.50} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={7.50} pcbY={-4.50} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-2.00} pcbY={-5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-0.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin3: "net.N2",
        pin2: "net.N4",
      }} type="npn" />
  </board>
)
