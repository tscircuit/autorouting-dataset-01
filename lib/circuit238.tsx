/** Randomly generated circuit 238. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N7",
        pin1: "net.N21",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N16",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-6.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N6",
        pin1: "net.N11",
        pin4: "net.N15",
        pin5: "net.N20",
        pin6: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.50} pcbY={-3.00} connections={{
        pin1: "net.N11",
        pin2: "net.N16",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={2.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={12.00} pcbY={-12.00} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin7: "net.N8",
        pin5: "net.N10",
        pin1: "net.N12",
        pin4: "net.N13",
        pin8: "net.N16",
        pin6: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={-12.00} pcbY={-12.00} connections={{
        pin1: "net.N1",
        pin7: "net.N2",
        pin14: "net.N5",
        pin9: "net.N7",
        pin2: "net.N7",
        pin11: "net.N10",
        pin3: "net.N10",
        pin8: "net.N10",
        pin13: "net.N11",
        pin10: "net.N14",
        pin5: "net.N14",
        pin15: "net.N14",
        pin4: "net.N15",
        pin6: "net.N17",
        pin12: "net.N19",
        pin16: "net.N22",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={7.00} pcbY={-3.00} connections={{
        pin1: "net.N11",
        pin3: "net.N17",
        pin2: "net.N18",
      }} type="npn" />
    <chip name="chip-4" footprint="pinrow6" pcbX={9.00} pcbY={9.00} connections={{
        pin6: "net.N1",
        pin2: "net.N8",
        pin4: "net.N14",
        pin1: "net.N17",
        pin5: "net.N19",
        pin3: "net.N22",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={0.00} pcbY={-10.50} connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-12.00} pcbY={-3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={8.00} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-15.00} pcbY={15.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-9.00} pcbY={12.00} connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="0603" pcbX={-3.00} pcbY={12.00} connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }} resistance="1k" />
  </board>
)
