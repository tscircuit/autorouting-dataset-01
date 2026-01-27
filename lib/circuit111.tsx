/** Randomly generated circuit 111. */
export default () => (
  <board width="96.00mm" height="72.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={25.28} pcbY={-4.46} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={24.01} pcbY={-20.19} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-35.74} pcbY={20.15} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-36.21} pcbY={2.38} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0402" pcbX={-20.63} pcbY={33.02} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-40.23} pcbY={-34.74} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-2.45} pcbY={15.34} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.77} pcbY={-24.15} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
        pin3: "net.N8",
      }} type="npn" />
    <inductor name="inductor-5" footprint="0603" pcbX={-42.42} pcbY={-5.97} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="0402" pcbX={43.71} pcbY={11.90} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={34.01} pcbY={-15.20} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={18.95} pcbY={30.55} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
