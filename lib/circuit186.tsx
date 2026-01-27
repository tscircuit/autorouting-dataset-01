/** Randomly generated circuit 186. */
export default () => (
  <board width="36.00mm" height="48.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={6.82} pcbY={13.92} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.12} pcbY={19.61} connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N3",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-8.14} pcbY={-1.13} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.98} pcbY={-6.01} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={12.14} pcbY={-6.00} connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N4",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.38} pcbY={-18.40} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
  </board>
)
