/** Randomly generated circuit 298. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.73} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.01} pcbY={-10.47} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={2.33} pcbY={-6.45} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.11} pcbY={-4.52} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={9.64} pcbY={0.15} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={9.14} pcbY={9.62} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N7",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={2.00} pcbY={-2.23} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.63} pcbY={1.43} connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-2.14} pcbY={2.92} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N5",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.97} pcbY={-9.66} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-8.10} pcbY={2.60} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} />
  </board>
)
