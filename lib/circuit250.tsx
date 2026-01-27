/** Randomly generated circuit 250. */
export default () => (
  <board width="30.00mm" height="18.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-7.50} pcbY={-4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-9.00} pcbY={4.50} connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={7.50} pcbY={-4.50} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N7",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={9.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
        pin3: "net.N6",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={0.50} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={1.00} pcbY={3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} inductance="10uH" />
  </board>
)
