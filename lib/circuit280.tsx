/** Randomly generated circuit 280. */
export default () => (
  <board width="26.00mm" height="46.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-5.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin6: "net.N5",
        pin3: "net.N8",
        pin1: "net.N12",
        pin4: "net.N18",
        pin5: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-7.50} pcbY={9.00} connections={{
        pin7: "net.N1",
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N2",
        pin6: "net.N11",
        pin4: "net.N12",
        pin8: "net.N13",
        pin5: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.50} pcbY={3.50} connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.00} pcbY={6.00} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={-6.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={2.00} pcbY={13.00} connections={{
        pin5: "net.N3",
        pin1: "net.N4",
        pin4: "net.N4",
        pin7: "net.N6",
        pin6: "net.N7",
        pin3: "net.N13",
        pin8: "net.N14",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-4" footprint="soic8" pcbX={6.00} pcbY={-1.00} connections={{
        pin8: "net.N1",
        pin3: "net.N2",
        pin7: "net.N3",
        pin2: "net.N5",
        pin5: "net.N7",
        pin1: "net.N10",
        pin4: "net.N15",
        pin6: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={7.00} pcbY={-12.00} connections={{
        pin2: "net.N10",
        pin1: "net.N18",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={3.00} connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-6.50} pcbY={-11.50} connections={{
        pin3: "net.N9",
        pin2: "net.N17",
        pin1: "net.N18",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-8.00} pcbY={16.00} connections={{
        pin3: "net.N7",
        pin2: "net.N12",
        pin1: "net.N13",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={-9.00} pcbY={-18.00} connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-9.00} pcbY={0.00} connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0805" pcbX={-4.50} pcbY={-2.00} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-2.00} pcbY={6.50} connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
  </board>
)
