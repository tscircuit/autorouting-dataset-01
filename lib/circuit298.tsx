/** Randomly generated circuit 298. */
export default () => (
  <board width="33.00mm" height="33.00mm">
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin6: "net.N3",
        pin5: "net.N5",
        pin2: "net.N5",
        pin3: "net.N11",
        pin4: "net.N14",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-4.00} pcbY={-4.00} connections={{
        pin2: "net.N10",
        pin1: "net.N15",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={-6.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.00} pcbY={9.00} connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={4.50} pcbY={-9.00} connections={{
        pin2: "net.N11",
        pin1: "net.N16",
      }} />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-12.00} pcbY={-12.00} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-5.50} pcbY={-8.50} connections={{
        pin1: "net.N2",
        pin3: "net.N14",
        pin2: "net.N16",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-1.50} pcbY={4.00} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} />
    <capacitor name="capacitor-3" footprint="0603" pcbX={0.00} pcbY={-4.00} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="SOD-323" pcbX={9.00} pcbY={6.00} connections={{
        pin1: "net.N9",
        pin2: "net.N16",
      }} />
    <chip name="chip-1" footprint="soic16" pcbX={-8.50} pcbY={11.00} connections={{
        pin4: "net.N2",
        pin13: "net.N3",
        pin14: "net.N3",
        pin1: "net.N3",
        pin6: "net.N4",
        pin12: "net.N6",
        pin5: "net.N7",
        pin2: "net.N9",
        pin11: "net.N10",
        pin10: "net.N12",
        pin9: "net.N13",
        pin7: "net.N14",
        pin3: "net.N15",
        pin8: "net.N16",
        pin16: "net.N17",
        pin15: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={2.50} pcbY={4.00} connections={{
        pin1: "net.N4",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <diode name="diode-5" footprint="SOD-123" pcbX={11.00} pcbY={-11.00} connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }} />
    <capacitor name="capacitor-5" footprint="0603" pcbX={9.00} pcbY={11.00} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinheader4" pcbX={8.00} pcbY={-5.00} connections={{
        pin3: "net.N2",
        pin2: "net.N9",
        pin4: "net.N14",
        pin1: "net.N15",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-6" footprint="SOD-323" pcbX={-0.50} pcbY={7.50} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <diode name="diode-7" footprint="SOD-123" pcbX={-8.50} pcbY={-4.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
  </board>
)
