/** Randomly generated circuit 291. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin6: "net.N3",
        pin1: "net.N4",
        pin2: "net.N14",
        pin5: "net.N17",
        pin4: "net.N18",
        pin3: "net.N20",
        pin7: "net.N21",
        pin8: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-9.00} pcbY={-9.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-7.50} pcbY={7.50} connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin5: "net.N15",
        pin1: "net.N19",
        pin4: "net.N21",
        pin6: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={-1.00} pcbY={-8.00} connections={{
        pin15: "net.N1",
        pin6: "net.N2",
        pin11: "net.N3",
        pin7: "net.N5",
        pin16: "net.N6",
        pin14: "net.N11",
        pin12: "net.N12",
        pin1: "net.N13",
        pin3: "net.N14",
        pin10: "net.N14",
        pin9: "net.N16",
        pin2: "net.N19",
        pin13: "net.N20",
        pin8: "net.N22",
        pin5: "net.N23",
        pin4: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={3.00} pcbY={9.00} connections={{
        pin1: "net.N12",
        pin3: "net.N12",
        pin2: "net.N24",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={12.00} pcbY={-12.00} connections={{
        pin1: "net.N8",
        pin2: "net.N16",
        pin3: "net.N17",
      }} type="npn" />
    <chip name="chip-4" footprint="dip8" pcbX={-10.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin5: "net.N5",
        pin4: "net.N10",
        pin2: "net.N10",
        pin6: "net.N10",
        pin8: "net.N19",
        pin1: "net.N22",
        pin7: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={7.50} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N23",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={10.00} pcbY={-2.00} connections={{
        pin1: "net.N3",
        pin3: "net.N16",
        pin2: "net.N21",
      }} type="npn" />
    <chip name="chip-5" footprint="soic16" pcbX={-10.00} pcbY={13.00} connections={{
        pin8: "net.N1",
        pin9: "net.N4",
        pin4: "net.N5",
        pin12: "net.N6",
        pin6: "net.N6",
        pin10: "net.N7",
        pin3: "net.N9",
        pin16: "net.N9",
        pin1: "net.N11",
        pin15: "net.N13",
        pin13: "net.N13",
        pin2: "net.N15",
        pin5: "net.N16",
        pin7: "net.N17",
        pin14: "net.N17",
        pin11: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={10.00} pcbY={4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={12.00} pcbY={12.00} connections={{
        pin2: "net.N2",
        pin1: "net.N22",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-14.00} pcbY={-14.00} connections={{
        pin2: "net.N8",
        pin1: "net.N18",
      }} resistance="1k" />
  </board>
)
