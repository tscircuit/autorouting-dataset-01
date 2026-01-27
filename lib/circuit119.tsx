/** Randomly generated circuit 119. */
export default () => (
  <board width="30.00mm" height="10.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.79} pcbY={-1.36} connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N3",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-11.09} pcbY={3.72} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.14} pcbY={-2.22} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.62} pcbY={2.41} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={9.78} pcbY={0.78} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
