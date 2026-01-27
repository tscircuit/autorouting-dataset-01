/** Randomly generated circuit 284. */
export default () => (
  <board width="30.00mm" height="60.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.88} pcbY={11.79} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={4.60} pcbY={-7.44} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-11.50} pcbY={8.40} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={3.98} pcbY={-25.24} connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.27} pcbY={-10.96} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.11} pcbY={28.06} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N12",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-6.30} pcbY={-27.38} connections={{
        pin1: "net.N1",
        pin3: "net.N8",
        pin2: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-8.17} pcbY={3.81} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-2.39} pcbY={3.49} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-13.61} pcbY={-16.46} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={2.04} pcbY={18.77} connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={10.36} pcbY={7.69} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={11.39} pcbY={-20.15} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-12.28} pcbY={22.03} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-11.48} pcbY={-9.38} connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} />
  </board>
)
