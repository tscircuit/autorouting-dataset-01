/** Randomly generated circuit 118. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={9.00} pcbY={-4.50} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={-9.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={9.00} pcbY={1.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
  </board>
)
