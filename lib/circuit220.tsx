/** Randomly generated circuit 220. */
export default () => (
  <board width="46.00mm" height="46.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N5",
        pin1: "net.N6",
        pin5: "net.N7",
        pin2: "net.N8",
        pin7: "net.N10",
        pin6: "net.N15",
        pin8: "net.N17",
        pin3: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.50} pcbY={-6.50} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-10.50} pcbY={1.50} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.50} pcbY={10.50} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={9.00} connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={1.50} pcbY={-10.50} connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.50} pcbY={-3.50} connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={6.00} pcbY={10.00} connections={{
        pin10: "net.N1",
        pin13: "net.N2",
        pin15: "net.N3",
        pin4: "net.N6",
        pin6: "net.N8",
        pin7: "net.N8",
        pin11: "net.N9",
        pin8: "net.N9",
        pin2: "net.N14",
        pin9: "net.N15",
        pin16: "net.N15",
        pin14: "net.N16",
        pin3: "net.N16",
        pin5: "net.N18",
        pin1: "net.N19",
        pin12: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-2.50} pcbY={-6.50} connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={13.50} pcbY={-1.50} connections={{
        pin6: "net.N1",
        pin7: "net.N3",
        pin1: "net.N4",
        pin3: "net.N4",
        pin8: "net.N5",
        pin4: "net.N5",
        pin2: "net.N14",
        pin5: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={2.00} pcbY={-6.50} connections={{
        pin1: "net.N11",
        pin2: "net.N16",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={-13.50} pcbY={-13.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-15.00} pcbY={-6.00} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
        pin3: "net.N17",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.50} pcbY={-6.50} connections={{
        pin2: "net.N10",
        pin3: "net.N13",
        pin1: "net.N18",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-7.00} pcbY={-12.00} connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }} inductance="10uH" />
    <resistor name="resistor-5" footprint="0402" pcbX={-4.00} pcbY={14.00} connections={{
        pin1: "net.N12",
        pin2: "net.N19",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-16.00} pcbY={16.00} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-18.00} pcbY={1.50} connections={{
        pin1: "net.N17",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
  </board>
)
