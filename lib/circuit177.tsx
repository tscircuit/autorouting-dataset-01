/** Randomly generated circuit 177. */
export default () => (
  <board width="32.00mm" height="80.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={5.85} pcbY={-38.17} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.63} pcbY={-12.19} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-39.53} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.41} pcbY={8.48} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-8.06} pcbY={-28.17} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.93} pcbY={0.54} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={10.25} pcbY={21.60} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={-10.43} pcbY={22.22} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
  </board>
)
