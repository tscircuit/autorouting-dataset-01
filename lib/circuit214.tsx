/** Randomly generated circuit 214. */
export default () => (
  <board width="46.00mm" height="26.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin3: "net.N1",
        pin1: "net.N10",
        pin2: "net.N10",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-1.50} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={-7.50} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={6.00} pcbY={7.50} connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={7.50} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.00} pcbY={-9.00} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={3.00} pcbY={3.50} connections={{
        pin3: "net.N8",
        pin2: "net.N14",
        pin1: "net.N14",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.50} pcbY={-4.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <resistor name="resistor-4" footprint="0402" pcbX={3.50} pcbY={-0.50} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-13.50} pcbY={-1.50} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-13.50} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-5" footprint="0402" pcbX={13.50} pcbY={7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="SOD-123" pcbX={14.00} pcbY={-9.00} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} />
  </board>
)
