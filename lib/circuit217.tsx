/** Randomly generated circuit 217. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-7.50} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={1.50} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={7.50} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={7.50} pcbY={1.50} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0402" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
