/** Randomly generated circuit 106. */
export default () => (
  <board width="26.00mm" height="78.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.41} pcbY={-35.93} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={10.34} pcbY={-22.35} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-10.21} pcbY={-7.91} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-11.22} pcbY={23.31} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={2.14} pcbY={-6.09} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.09} pcbY={33.36} connections={{
        pin1: "net.N1",
        pin3: "net.N7",
        pin2: "net.N7",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-0.83} pcbY={6.66} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-1.22} pcbY={0.54} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-6.84} pcbY={-19.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.51} pcbY={21.69} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={11.74} pcbY={7.38} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-6.58} pcbY={-2.71} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={10.80} pcbY={15.55} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} inductance="10uH" />
  </board>
)
