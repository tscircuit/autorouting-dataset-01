/** Randomly generated circuit 202. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-9.00} pcbY={1.00} connections={{
        pin6: "net.N1",
        pin1: "net.N1",
        pin4: "net.N3",
        pin8: "net.N4",
        pin7: "net.N7",
        pin3: "net.N7",
        pin5: "net.N8",
        pin2: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.00} pcbY={-5.00} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={8.00} pcbY={-8.00} connections={{
        pin5: "net.N3",
        pin2: "net.N5",
        pin8: "net.N7",
        pin7: "net.N10",
        pin6: "net.N10",
        pin3: "net.N11",
        pin1: "net.N12",
        pin4: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-12.00} pcbY={12.00} connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-2.00} pcbY={3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={6.00} pcbY={-1.00} connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={9.00} pcbY={4.00} connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={10.50} pcbY={12.00} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={2.00} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-6" footprint="0402" pcbX={-3.50} pcbY={-5.50} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-6.00} pcbY={10.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-15.00} pcbY={-15.00} connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.00} pcbY={-15.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
  </board>
)
