/** Randomly generated circuit 295. */
export default () => (
  <board width="36.00mm" height="72.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={12.60} pcbY={-0.89} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-2.52} pcbY={-10.69} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={12.80} pcbY={-34.36} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={5.27} pcbY={12.64} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-15.97} pcbY={-11.85} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={8.07} pcbY={27.13} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.64} pcbY={2.57} connections={{
        pin3: "net.N1",
        pin2: "net.N5",
        pin1: "net.N7",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-12.55} pcbY={15.79} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={3.52} pcbY={-4.60} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} />
  </board>
)
