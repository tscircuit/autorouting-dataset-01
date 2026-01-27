/** Randomly generated circuit 120. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin7: "net.N3",
        pin6: "net.N5",
        pin4: "net.N10",
        pin2: "net.N12",
        pin5: "net.N15",
        pin8: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N11",
        pin2: "net.N17",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-10.50} pcbY={-1.50} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={9.00} connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-9.00} pcbY={4.00} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.00} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.50} pcbY={-6.00} connections={{
        pin2: "net.N16",
        pin1: "net.N18",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-0.50} pcbY={8.00} connections={{
        pin1: "net.N1",
        pin12: "net.N4",
        pin5: "net.N4",
        pin6: "net.N6",
        pin4: "net.N8",
        pin3: "net.N9",
        pin13: "net.N9",
        pin7: "net.N11",
        pin9: "net.N12",
        pin10: "net.N13",
        pin15: "net.N13",
        pin2: "net.N14",
        pin16: "net.N17",
        pin11: "net.N17",
        pin14: "net.N18",
        pin8: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.00} pcbY={-9.00} connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={7.50} pcbY={-5.50} connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={8.50} pcbY={-0.50} connections={{
        pin8: "net.N2",
        pin3: "net.N5",
        pin6: "net.N7",
        pin2: "net.N7",
        pin5: "net.N11",
        pin4: "net.N12",
        pin7: "net.N15",
        pin1: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={10.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={-7.00} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} resistance="1k" />
  </board>
)
