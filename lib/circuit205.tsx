/** Randomly generated circuit 205. */
export default () => (
  <board width="128.00mm" height="96.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={38.70} pcbY={-16.57} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={29.62} pcbY={1.96} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-58.80} pcbY={24.11} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={56.79} pcbY={-21.01} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-4.44} pcbY={-27.36} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={50.14} pcbY={6.50} connections={{
        pin5: "net.N1",
        pin4: "net.N1",
        pin6: "net.N1",
        pin1: "net.N4",
        pin2: "net.N4",
        pin3: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-45.25} pcbY={-25.85} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={24.93} pcbY={-47.06} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={-39.05} pcbY={-39.50} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={54.70} pcbY={-13.16} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={18.16} pcbY={-33.83} connections={{
        pin1: "net.N10",
        pin2: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.37} pcbY={21.67} connections={{
        pin1: "net.N3",
        pin3: "net.N7",
        pin2: "net.N9",
      }} type="npn" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-3.04} pcbY={1.30} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={27.60} pcbY={13.45} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-46.80} pcbY={10.33} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={41.05} pcbY={38.27} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
