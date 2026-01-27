/** Randomly generated circuit 174. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.03} pcbY={-5.22} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
        pin3: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={5.48} pcbY={-1.59} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-0.47} pcbY={2.96} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.82} pcbY={2.16} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
        pin3: "net.N5",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-5.28} pcbY={5.28} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N5",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-6.37} pcbY={-3.48} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-4.23} pcbY={1.71} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N6",
      }} type="npn" />
  </board>
)
