/** Randomly generated circuit 254. */
export default () => (
  <board width="32.00mm" height="58.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-6.50} pcbY={-6.50} connections={{
        pin8: "net.N1",
        pin2: "net.N5",
        pin4: "net.N6",
        pin7: "net.N8",
        pin6: "net.N9",
        pin1: "net.N10",
        pin5: "net.N13",
        pin3: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={6.00} connections={{
        pin3: "net.N9",
        pin1: "net.N14",
        pin2: "net.N16",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-323" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }} />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={-7.50} pcbY={16.50} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
        pin4: "net.N11",
        pin3: "net.N20",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-3" footprint="SOD-323" pcbX={-1.50} pcbY={3.50} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={-5.50} pcbY={11.50} connections={{
        pin6: "net.N7",
        pin1: "net.N11",
        pin4: "net.N13",
        pin5: "net.N16",
        pin2: "net.N19",
        pin3: "net.N21",
      }} pinCount={6} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0805" pcbX={3.00} pcbY={-6.00} connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-223" pcbX={7.50} pcbY={-15.00} connections={{
        pin3: "net.N9",
        pin2: "net.N16",
        pin1: "net.N17",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={7.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N21",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="SOD-323" pcbX={12.00} pcbY={7.50} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} />
    <resistor name="resistor-1" footprint="0805" pcbX={2.50} pcbY={3.50} connections={{
        pin2: "net.N8",
        pin1: "net.N19",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-223" pcbX={-9.00} pcbY={-17.00} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
        pin3: "net.N18",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={9.50} pcbY={-9.00} connections={{
        pin2: "net.N4",
        pin1: "net.N15",
        pin3: "net.N16",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={9.00} pcbY={15.00} connections={{
        pin2: "net.N14",
        pin1: "net.N17",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={3.00} pcbY={18.00} connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-5" footprint="pinheader2" pcbX={1.00} pcbY={-23.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={7.00} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
        pin3: "net.N12",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={0.00} pcbY={-3.00} connections={{
        pin2: "net.N10",
        pin1: "net.N15",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0402" pcbX={-1.00} pcbY={-15.00} connections={{
        pin1: "net.N14",
        pin2: "net.N20",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={10.00} pcbY={20.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
