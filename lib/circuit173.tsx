/** Randomly generated circuit 173. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-9.00} pcbY={-9.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
        pin6: "net.N2",
        pin5: "net.N4",
        pin3: "net.N6",
        pin4: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-7.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-2.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={5.50} pcbY={-5.50} connections={{
        pin5: "net.N1",
        pin4: "net.N3",
        pin2: "net.N5",
        pin1: "net.N5",
        pin6: "net.N9",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={4.00} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={0.00} pcbY={12.00} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.00} pcbY={11.00} connections={{
        pin1: "net.N4",
        pin3: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-3.50} pcbY={0.50} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={10.00} pcbY={1.00} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={1.00} pcbY={-12.00} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} inductance="10uH" />
  </board>
)
