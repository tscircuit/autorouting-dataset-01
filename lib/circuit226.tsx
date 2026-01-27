/** Randomly generated circuit 226. */
export default () => (
  <board width="78.00mm" height="78.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.94} pcbY={18.24} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-2.15} pcbY={-2.59} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={23.92} pcbY={-23.39} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={18.71} pcbY={33.17} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.87} pcbY={8.02} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={31.83} pcbY={25.32} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N7",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.03} pcbY={-34.62} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-32.12} pcbY={7.44} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-23.08} pcbY={-19.74} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={27.45} pcbY={-7.73} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={8.18} pcbY={21.16} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-7" footprint="0603" pcbX={30.92} pcbY={12.44} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-17.78} pcbY={20.96} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} resistance="1k" />
  </board>
)
