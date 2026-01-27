/** Randomly generated circuit 147. */
export default () => (
  <board width="24.00mm" height="12.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.32} pcbY={3.64} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N3",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.42} pcbY={-4.36} connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N2",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-10.70} pcbY={3.76} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.46} pcbY={0.36} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-4.31} pcbY={-2.48} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={2.81} pcbY={3.71} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} inductance="10uH" />
  </board>
)
