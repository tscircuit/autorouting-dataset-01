/** Randomly generated circuit 126. */
export default () => (
  <board width="36.00mm" height="48.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.91} pcbY={13.05} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.71} pcbY={20.66} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={3.71} pcbY={-18.31} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.84} pcbY={21.25} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-1.56} pcbY={7.21} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.35} pcbY={18.55} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} />
  </board>
)
