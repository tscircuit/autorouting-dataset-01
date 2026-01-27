/** Randomly generated circuit 294. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-4.50} pcbY={7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.00} pcbY={-10.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={1.00} pcbY={10.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={3.00} pcbY={-3.50} connections={{
        pin3: "net.N3",
        pin2: "net.N5",
        pin1: "net.N7",
      }} type="npn" />
  </board>
)
