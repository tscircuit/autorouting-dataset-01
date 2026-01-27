/** Randomly generated circuit 202. */
export default () => (
  <board width="20.00mm" height="30.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={3.00} pcbY={2.88} connections={{
        pin2: "net.N3",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={7.87} pcbY={-13.81} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.82} pcbY={-2.16} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-7.31} pcbY={-9.69} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-7.75} pcbY={14.44} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
  </board>
)
