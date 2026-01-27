/** Randomly generated circuit 180. */
export default () => (
  <board width="13.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-2.50} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
  </board>
)
