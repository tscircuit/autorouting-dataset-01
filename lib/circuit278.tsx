/** Randomly generated circuit 278. */
export default () => (
  <board width="33.00mm" height="33.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-7.50} pcbY={4.50} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={3.00} pcbY={4.00} connections={{
        pin3: "net.N3",
        pin5: "net.N3",
        pin4: "net.N4",
        pin2: "net.N8",
        pin6: "net.N12",
        pin1: "net.N15",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={0.50} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-8.00} pcbY={-9.00} connections={{
        pin5: "net.N4",
        pin3: "net.N5",
        pin2: "net.N7",
        pin1: "net.N8",
        pin4: "net.N16",
        pin6: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0805" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={7.00} pcbY={-7.00} connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0805" pcbX={-10.00} pcbY={10.00} connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow8" pcbX={-0.50} pcbY={9.00} connections={{
        pin3: "net.N1",
        pin5: "net.N2",
        pin1: "net.N7",
        pin2: "net.N10",
        pin6: "net.N12",
        pin8: "net.N14",
        pin7: "net.N14",
        pin4: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={6.00} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0805" pcbX={0.50} pcbY={-6.50} connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.00} pcbY={-5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-4" footprint="0805" pcbX={11.00} pcbY={10.00} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-323" pcbX={2.00} pcbY={-12.00} connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }} />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={8.50} pcbY={-11.50} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N14",
      }} type="npn" />
    <pinheader name="pinhead-3" footprint="pinheader2" pcbX={-10.00} pcbY={-1.00} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
