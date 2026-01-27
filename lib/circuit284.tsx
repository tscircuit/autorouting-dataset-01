/** Randomly generated circuit 284. */
export default () => (
  <board width="64.00mm" height="35.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N12",
        pin1: "net.N23",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0805" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N15",
        pin1: "net.N19",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={4.50} pcbY={-7.50} connections={{
        pin2: "net.N11",
        pin1: "net.N23",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={7.50} pcbY={9.00} connections={{
        pin2: "net.N14",
        pin1: "net.N20",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-2" footprint="pinheader4" pcbX={-12.00} pcbY={-12.00} connections={{
        pin2: "net.N7",
        pin1: "net.N7",
        pin4: "net.N14",
        pin3: "net.N17",
      }} pinCount={4} pitch="2.54mm" />
    <inductor name="inductor-2" footprint="0805" pcbX={9.00} pcbY={0.00} connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-8.00} pcbY={8.00} connections={{
        pin1: "net.N6",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-12.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin3: "net.N6",
        pin1: "net.N10",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0805" pcbX={1.00} pcbY={-3.50} connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={0.50} pcbY={3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={13.50} pcbY={-13.50} connections={{
        pin2: "net.N10",
        pin1: "net.N23",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-16.50} pcbY={4.50} connections={{
        pin1: "net.N1",
        pin2: "net.N25",
      }} />
    <inductor name="inductor-4" footprint="0805" pcbX={-16.50} pcbY={12.00} connections={{
        pin1: "net.N6",
        pin2: "net.N25",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0603" pcbX={18.00} pcbY={-6.00} connections={{
        pin1: "net.N21",
        pin2: "net.N22",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-2.00} pcbY={9.00} connections={{
        pin2: "net.N3",
        pin1: "net.N22",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={11.00} pcbY={-8.00} connections={{
        pin2: "net.N13",
        pin1: "net.N15",
        pin3: "net.N24",
      }} type="npn" />
    <chip name="chip-1" footprint="soic16" pcbX={20.00} pcbY={1.00} connections={{
        pin11: "net.N2",
        pin5: "net.N2",
        pin7: "net.N4",
        pin15: "net.N4",
        pin4: "net.N5",
        pin2: "net.N8",
        pin1: "net.N9",
        pin12: "net.N9",
        pin6: "net.N11",
        pin13: "net.N12",
        pin10: "net.N13",
        pin14: "net.N16",
        pin8: "net.N18",
        pin9: "net.N20",
        pin16: "net.N20",
        pin3: "net.N22",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={18.00} pcbY={10.50} connections={{
        pin1: "net.N16",
        pin2: "net.N25",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0805" pcbX={-9.00} pcbY={3.00} connections={{
        pin2: "net.N16",
        pin1: "net.N24",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-7" footprint="0805" pcbX={4.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-8" footprint="0805" pcbX={4.50} pcbY={3.50} connections={{
        pin1: "net.N10",
        pin2: "net.N21",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-4" footprint="pinheader2" pcbX={-20.00} pcbY={-5.00} connections={{
        pin1: "net.N17",
        pin2: "net.N18",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-5" footprint="pinheader4" pcbX={0.50} pcbY={-11.50} connections={{
        pin1: "net.N8",
        pin3: "net.N8",
        pin4: "net.N18",
        pin2: "net.N18",
      }} pinCount={4} pitch="2.54mm" />
    <inductor name="inductor-6" footprint="0402" pcbX={22.50} pcbY={-13.50} connections={{
        pin1: "net.N10",
        pin2: "net.N25",
      }} inductance="10uH" />
  </board>
)
