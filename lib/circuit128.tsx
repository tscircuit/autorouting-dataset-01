/** Randomly generated circuit 128. */
export default () => (
  <board width="78.00mm" height="104.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-33.86} pcbY={15.02} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={5.04} pcbY={-7.37} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={1.64} pcbY={23.93} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={28.06} pcbY={14.27} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.67} pcbY={-42.70} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
        pin3: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-13.93} pcbY={-7.62} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.81} pcbY={44.56} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N7",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-8.68} pcbY={14.44} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-33.78} pcbY={51.64} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={27.63} pcbY={37.30} connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin2: "net.N6",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-36.83} pcbY={-21.94} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-6" footprint="0402" pcbX={-26.19} pcbY={14.80} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={9.23} pcbY={14.05} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} />
  </board>
)
