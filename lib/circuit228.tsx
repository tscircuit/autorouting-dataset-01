/** Randomly generated circuit 228. */
export default () => (
  <board width="38.00mm" height="38.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.00} pcbY={6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.00} pcbY={-6.00} connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-6.00} pcbY={0.00} connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={6.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={7.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-9.50} pcbY={-9.50} connections={{
        pin11: "net.N2",
        pin7: "net.N3",
        pin16: "net.N4",
        pin8: "net.N5",
        pin5: "net.N6",
        pin9: "net.N6",
        pin2: "net.N7",
        pin13: "net.N9",
        pin3: "net.N12",
        pin4: "net.N13",
        pin6: "net.N13",
        pin1: "net.N15",
        pin12: "net.N15",
        pin14: "net.N16",
        pin10: "net.N17",
        pin15: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N5",
        pin3: "net.N8",
        pin2: "net.N9",
      }} type="npn" />
    <chip name="chip-2" footprint="soic8" pcbX={7.00} pcbY={-5.50} connections={{
        pin8: "net.N1",
        pin1: "net.N7",
        pin3: "net.N9",
        pin4: "net.N10",
        pin2: "net.N11",
        pin6: "net.N11",
        pin5: "net.N16",
        pin7: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0402" pcbX={-13.50} pcbY={0.00} connections={{
        pin1: "net.N18",
        pin2: "net.N18",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={1.50} pcbY={13.50} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={9.00} pcbY={13.50} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-7.50} pcbY={3.50} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
        pin3: "net.N14",
      }} type="npn" />
  </board>
)
