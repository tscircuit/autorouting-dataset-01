/** Randomly generated circuit 276. */
export default () => (
  <board width="36.00mm" height="54.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.40} pcbY={19.84} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-2.58} pcbY={1.84} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={13.70} pcbY={26.41} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-14.64} pcbY={10.12} connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N3",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={11.58} pcbY={-1.80} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={-7.30} pcbY={20.14} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.46} pcbY={3.66} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={-5.56} pcbY={-12.87} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={14.46} pcbY={16.98} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
