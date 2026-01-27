/** Randomly generated circuit 135. */
export default () => (
  <board width="20.00mm" height="13.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.50} pcbY={-2.50} connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N2",
      }} type="npn" />
  </board>
)
