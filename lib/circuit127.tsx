/** Randomly generated circuit 127. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.01} pcbY={2.62} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.44} pcbY={-5.49} connections={{
        pin1: "net.N1",
        pin3: "net.N1",
        pin2: "net.N2",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-5.99} pcbY={-3.26} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={5.01} pcbY={-4.10} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={3.78} pcbY={2.64} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={1.96} pcbY={-1.38} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-1.59} pcbY={-1.72} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
