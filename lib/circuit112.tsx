/** Randomly generated circuit 112. */
export default () => (
  <board width="80.00mm" height="48.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={28.98} pcbY={-23.10} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={28.73} pcbY={-4.17} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.38} pcbY={-6.57} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-32.39} pcbY={-21.11} connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={12.26} pcbY={-6.97} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-27.07} pcbY={12.65} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={-14.96} pcbY={14.06} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={27.18} pcbY={9.57} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
  </board>
)
