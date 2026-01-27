/** Randomly generated circuit 213. */
export default () => (
  <board width="48.00mm" height="48.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N26",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N14",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={7.50} pcbY={9.00} connections={{
        pin4: "net.N3",
        pin6: "net.N4",
        pin15: "net.N6",
        pin11: "net.N6",
        pin5: "net.N9",
        pin10: "net.N11",
        pin3: "net.N11",
        pin7: "net.N11",
        pin2: "net.N13",
        pin9: "net.N14",
        pin14: "net.N18",
        pin12: "net.N20",
        pin8: "net.N21",
        pin16: "net.N21",
        pin1: "net.N24",
        pin13: "net.N27",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={4.50} pcbY={-7.50} connections={{
        pin1: "net.N19",
        pin2: "net.N26",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0805" pcbX={-1.00} pcbY={3.00} connections={{
        pin2: "net.N12",
        pin1: "net.N19",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-323" pcbX={1.00} pcbY={-3.00} connections={{
        pin1: "net.N10",
        pin2: "net.N26",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-12.00} pcbY={-12.00} connections={{
        pin2: "net.N2",
        pin3: "net.N5",
        pin1: "net.N5",
      }} type="npn" />
    <resistor name="resistor-4" footprint="0603" pcbX={6.00} pcbY={2.00} connections={{
        pin2: "net.N7",
        pin1: "net.N27",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-12.00} pcbY={12.00} connections={{
        pin6: "net.N1",
        pin14: "net.N1",
        pin5: "net.N6",
        pin11: "net.N7",
        pin8: "net.N8",
        pin12: "net.N10",
        pin16: "net.N10",
        pin9: "net.N13",
        pin2: "net.N14",
        pin4: "net.N15",
        pin3: "net.N16",
        pin10: "net.N17",
        pin15: "net.N20",
        pin13: "net.N22",
        pin1: "net.N25",
        pin7: "net.N27",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-5" footprint="0805" pcbX={5.00} pcbY={-4.50} connections={{
        pin2: "net.N11",
        pin1: "net.N20",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.50} pcbY={0.50} connections={{
        pin1: "net.N3",
        pin3: "net.N7",
        pin2: "net.N22",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-6.50} pcbY={-6.50} connections={{
        pin2: "net.N5",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-2.00} pcbY={-6.50} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={10.00} pcbY={-10.00} connections={{
        pin2: "net.N25",
        pin1: "net.N27",
      }} capacitance="0.1uF" />
    <resistor name="resistor-6" footprint="0805" pcbX={-12.00} pcbY={-1.00} connections={{
        pin2: "net.N3",
        pin1: "net.N23",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={11.00} pcbY={-5.00} connections={{
        pin2: "net.N24",
        pin1: "net.N25",
      }} inductance="10uH" />
    <resistor name="resistor-7" footprint="0603" pcbX={5.00} pcbY={-1.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={1.00} pcbY={-14.00} connections={{
        pin4: "net.N2",
        pin2: "net.N5",
        pin1: "net.N9",
        pin3: "net.N16",
        pin5: "net.N20",
        pin6: "net.N23",
      }} pinCount={6} pitch="2.54mm" />
    <chip name="chip-3" footprint="pinrow6" pcbX={16.00} pcbY={1.00} connections={{
        pin1: "net.N8",
        pin4: "net.N12",
        pin5: "net.N15",
        pin2: "net.N19",
        pin3: "net.N19",
        pin6: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-12.00} pcbY={4.00} connections={{
        pin1: "net.N13",
        pin2: "net.N24",
      }} capacitance="0.1uF" />
  </board>
)
