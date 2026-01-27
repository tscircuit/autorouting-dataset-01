/** Randomly generated circuit 234. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N12",
        pin2: "net.N14",
        pin1: "net.N16",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.50} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N18",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={-5.00} pcbY={5.00} connections={{
        pin8: "net.N4",
        pin5: "net.N6",
        pin6: "net.N7",
        pin2: "net.N11",
        pin7: "net.N13",
        pin1: "net.N17",
        pin3: "net.N18",
        pin4: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={3.00} pcbY={-10.50} connections={{
        pin4: "net.N6",
        pin2: "net.N7",
        pin8: "net.N8",
        pin7: "net.N10",
        pin6: "net.N14",
        pin3: "net.N15",
        pin1: "net.N16",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N17",
        pin2: "net.N18",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={6.00} pcbY={7.50} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={7.00} pcbY={-2.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="pinrow6" pcbX={-13.00} pcbY={13.00} connections={{
        pin3: "net.N1",
        pin4: "net.N2",
        pin2: "net.N5",
        pin1: "net.N10",
        pin6: "net.N13",
        pin5: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.00} pcbY={-3.50} connections={{
        pin2: "net.N8",
        pin3: "net.N9",
        pin1: "net.N17",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-15.00} pcbY={-15.00} connections={{
        pin1: "net.N11",
        pin2: "net.N21",
      }} />
    <chip name="chip-4" footprint="soic16" pcbX={8.50} pcbY={2.50} connections={{
        pin5: "net.N1",
        pin3: "net.N1",
        pin4: "net.N3",
        pin16: "net.N4",
        pin8: "net.N10",
        pin14: "net.N10",
        pin15: "net.N11",
        pin10: "net.N11",
        pin13: "net.N12",
        pin12: "net.N12",
        pin11: "net.N15",
        pin7: "net.N15",
        pin6: "net.N17",
        pin1: "net.N19",
        pin9: "net.N19",
        pin2: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-9.00} pcbY={-2.00} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.50} pcbY={3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={0.00} pcbY={15.00} connections={{
        pin2: "net.N4",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={13.50} pcbY={-13.50} connections={{
        pin2: "net.N9",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={12.00} pcbY={-8.00} connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.00} pcbY={7.50} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-6" footprint="0603" pcbX={9.00} pcbY={15.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
