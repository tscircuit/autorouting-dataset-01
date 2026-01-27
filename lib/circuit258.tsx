/** Randomly generated circuit 258. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-9.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-9.00} pcbY={1.50} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
        pin3: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-2.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N7",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={9.00} pcbY={-6.00} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N5",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={9.00} pcbY={1.50} connections={{
        pin1: "net.N1",
        pin3: "net.N6",
        pin2: "net.N7",
      }} type="npn" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={1.50} pcbY={-3.50} connections={{
        pin3: "net.N3",
        pin2: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={2.50} pcbY={3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
