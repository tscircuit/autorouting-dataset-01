/** Randomly generated circuit 188. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.50} pcbY={-7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-4.00} pcbY={6.00} connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.00} pcbY={-6.00} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={4.50} pcbY={7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={1.00} pcbY={-11.00} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={0.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={4.00} pcbY={3.50} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-4.50} pcbY={-0.50} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
