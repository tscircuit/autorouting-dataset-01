/** Randomly generated circuit 245. */
export default () => (
  <board width="38.00mm" height="38.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
        pin3: "net.N14",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-4.00} pcbY={4.00} connections={{
        pin4: "net.N1",
        pin3: "net.N7",
        pin2: "net.N8",
        pin6: "net.N15",
        pin1: "net.N16",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic16" pcbX={9.00} pcbY={-9.00} connections={{
        pin5: "net.N2",
        pin16: "net.N3",
        pin3: "net.N3",
        pin7: "net.N7",
        pin15: "net.N7",
        pin6: "net.N8",
        pin1: "net.N9",
        pin11: "net.N10",
        pin8: "net.N10",
        pin9: "net.N11",
        pin4: "net.N11",
        pin10: "net.N11",
        pin13: "net.N12",
        pin2: "net.N13",
        pin14: "net.N14",
        pin12: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={9.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.00} pcbY={6.00} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N14",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.00} pcbY={-3.50} connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-9.00} pcbY={-9.00} connections={{
        pin3: "net.N1",
        pin1: "net.N12",
        pin2: "net.N15",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-12.00} pcbY={12.00} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={-4.50} pcbY={12.00} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.00} pcbY={-9.00} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <chip name="chip-3" footprint="pinrow6" pcbX={3.50} pcbY={10.00} connections={{
        pin3: "net.N2",
        pin2: "net.N5",
        pin4: "net.N8",
        pin6: "net.N10",
        pin1: "net.N13",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={3.50} pcbY={-3.50} connections={{
        pin2: "net.N8",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-10.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
