/** Randomly generated circuit 181. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={-4.50} pcbY={-4.50} connections={{
        pin15: "net.N4",
        pin10: "net.N4",
        pin11: "net.N6",
        pin8: "net.N6",
        pin12: "net.N8",
        pin5: "net.N9",
        pin4: "net.N10",
        pin2: "net.N10",
        pin3: "net.N11",
        pin9: "net.N11",
        pin13: "net.N13",
        pin6: "net.N14",
        pin14: "net.N15",
        pin7: "net.N15",
        pin16: "net.N16",
        pin1: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-7.00} pcbY={7.00} connections={{
        pin7: "net.N2",
        pin4: "net.N3",
        pin3: "net.N3",
        pin5: "net.N4",
        pin8: "net.N4",
        pin1: "net.N9",
        pin6: "net.N10",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.00} pcbY={6.00} connections={{
        pin2: "net.N3",
        pin3: "net.N9",
        pin1: "net.N9",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={6.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="soic8" pcbX={12.00} pcbY={9.00} connections={{
        pin4: "net.N1",
        pin1: "net.N2",
        pin7: "net.N5",
        pin5: "net.N7",
        pin3: "net.N10",
        pin8: "net.N11",
        pin2: "net.N16",
        pin6: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={-11.00} pcbY={-11.00} connections={{
        pin2: "net.N7",
        pin1: "net.N18",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-3.00} pcbY={-13.50} connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.00} pcbY={12.00} connections={{
        pin3: "net.N5",
        pin2: "net.N8",
        pin1: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N16",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={4.00} pcbY={-12.00} connections={{
        pin2: "net.N6",
        pin3: "net.N8",
        pin1: "net.N15",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={11.00} pcbY={-11.00} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} inductance="10uH" />
  </board>
)
