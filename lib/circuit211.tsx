/** Randomly generated circuit 211. */
export default () => (
  <board width="50.00mm" height="50.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N23",
        pin2: "net.N24",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <chip name="chip-1" footprint="pinrow8" pcbX={8.00} pcbY={-8.00} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin4: "net.N9",
        pin8: "net.N10",
        pin2: "net.N11",
        pin7: "net.N20",
        pin6: "net.N23",
        pin5: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={5.00} pcbY={7.00} connections={{
        pin8: "net.N3",
        pin5: "net.N11",
        pin2: "net.N12",
        pin4: "net.N12",
        pin6: "net.N14",
        pin1: "net.N22",
        pin7: "net.N24",
        pin3: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-323" pcbX={6.00} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-12.00} pcbY={-12.00} connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }} />
    <chip name="chip-3" footprint="soic16" pcbX={-13.50} pcbY={13.50} connections={{
        pin16: "net.N3",
        pin1: "net.N4",
        pin7: "net.N6",
        pin14: "net.N8",
        pin4: "net.N8",
        pin11: "net.N10",
        pin15: "net.N11",
        pin5: "net.N12",
        pin2: "net.N13",
        pin12: "net.N14",
        pin3: "net.N15",
        pin13: "net.N16",
        pin6: "net.N21",
        pin9: "net.N21",
        pin10: "net.N22",
        pin8: "net.N23",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.00} pcbY={-4.50} connections={{
        pin3: "net.N10",
        pin1: "net.N17",
        pin2: "net.N18",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={0.50} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N21",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-5.00} pcbY={-9.00} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.00} pcbY={9.00} connections={{
        pin1: "net.N14",
        pin2: "net.N19",
        pin3: "net.N23",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={10.50} pcbY={16.50} connections={{
        pin1: "net.N1",
        pin4: "net.N20",
        pin3: "net.N20",
        pin2: "net.N22",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-5" footprint="SOD-323" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N22",
        pin1: "net.N24",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={4.00} pcbY={1.00} connections={{
        pin2: "net.N17",
        pin1: "net.N24",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-10.00} pcbY={1.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-7.50} pcbY={-5.50} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-4" footprint="dip8" pcbX={18.00} pcbY={4.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin3: "net.N6",
        pin7: "net.N7",
        pin5: "net.N8",
        pin6: "net.N14",
        pin8: "net.N18",
        pin4: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-6" footprint="SOD-123" pcbX={2.00} pcbY={-14.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} />
    <diode name="diode-7" footprint="SOD-123" pcbX={9.00} pcbY={-14.00} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} />
    <diode name="diode-8" footprint="SOD-323" pcbX={-1.50} pcbY={16.50} connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-18.00} pcbY={3.00} connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }} inductance="10uH" />
  </board>
)
