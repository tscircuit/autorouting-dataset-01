/** Randomly generated circuit 153. */
export default () => (
  <board width="30.00mm" height="20.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={12.89} pcbY={-1.02} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-1.54} pcbY={-4.89} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-0.27} pcbY={1.22} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={6.61} pcbY={-5.01} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-9.84} pcbY={0.84} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
  </board>
)
