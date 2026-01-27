/** Randomly generated circuit 274. */
export default () => (
  <board width="17.00mm" height="17.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin3: "net.N4",
        pin1: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={2.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={2.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
  </board>
)
