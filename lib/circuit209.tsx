/** Randomly generated circuit 209. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={3.79} pcbY={-2.85} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-4.59} pcbY={0.06} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-4.09} pcbY={3.75} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-2.32} pcbY={-3.07} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={0.18} pcbY={4.99} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={1.42} pcbY={1.61} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.87} pcbY={-2.33} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
