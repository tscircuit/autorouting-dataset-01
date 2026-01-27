/** Randomly generated circuit 200. */
export default () => (
  <board width="22.00mm" height="38.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin3: "net.N13",
        pin1: "net.N15",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N11",
        pin2: "net.N17",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N12",
        pin2: "net.N16",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-3.00} pcbY={11.00} connections={{
        pin2: "net.N1",
        pin10: "net.N2",
        pin4: "net.N3",
        pin13: "net.N5",
        pin14: "net.N5",
        pin9: "net.N6",
        pin15: "net.N7",
        pin5: "net.N8",
        pin6: "net.N9",
        pin3: "net.N10",
        pin8: "net.N11",
        pin1: "net.N13",
        pin16: "net.N14",
        pin11: "net.N14",
        pin7: "net.N15",
        pin12: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.50} pcbY={3.50} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-6.00} pcbY={-9.00} connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={4.50} pcbY={3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={3.00} pcbY={-12.00} connections={{
        pin1: "net.N13",
        pin2: "net.N18",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={7.00} pcbY={9.00} connections={{
        pin2: "net.N3",
        pin1: "net.N18",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.00} pcbY={-2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
        pin3: "net.N12",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0402" pcbX={-6.50} pcbY={6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic8" pcbX={-5.50} pcbY={-14.00} connections={{
        pin6: "net.N1",
        pin1: "net.N2",
        pin3: "net.N5",
        pin8: "net.N7",
        pin7: "net.N16",
        pin2: "net.N16",
        pin4: "net.N17",
        pin5: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-1.00} pcbY={-8.50} connections={{
        pin3: "net.N3",
        pin1: "net.N14",
        pin2: "net.N18",
      }} type="npn" />
  </board>
)
