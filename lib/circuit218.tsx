/** Randomly generated circuit 218. */
export default () => (
  <board width="56.00mm" height="31.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-6.50} pcbY={6.50} connections={{
        pin8: "net.N1",
        pin1: "net.N1",
        pin4: "net.N6",
        pin7: "net.N7",
        pin5: "net.N10",
        pin3: "net.N12",
        pin2: "net.N13",
        pin6: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={7.00} pcbY={-7.00} connections={{
        pin4: "net.N10",
        pin6: "net.N10",
        pin5: "net.N19",
        pin2: "net.N19",
        pin1: "net.N20",
        pin3: "net.N20",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.00} pcbY={3.50} connections={{
        pin2: "net.N20",
        pin1: "net.N21",
      }} />
    <resistor name="resistor-2" footprint="0805" pcbX={-4.50} pcbY={-2.50} connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={7.00} pcbY={-1.00} connections={{
        pin2: "net.N9",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-0.50} pcbY={-3.00} connections={{
        pin2: "net.N8",
        pin1: "net.N22",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={7.00} pcbY={4.00} connections={{
        pin1: "net.N11",
        pin2: "net.N21",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={4.50} pcbY={12.00} connections={{
        pin2: "net.N9",
        pin1: "net.N18",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={12.00} pcbY={12.00} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={3.00} pcbY={-3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0603" pcbX={-15.00} pcbY={-12.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0805" pcbX={-15.00} pcbY={-4.50} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={15.00} pcbY={1.50} connections={{
        pin2: "net.N21",
        pin1: "net.N22",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={0.50} pcbY={7.00} connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={13.00} pcbY={7.00} connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={5.00} pcbY={7.50} connections={{
        pin2: "net.N14",
        pin1: "net.N14",
        pin3: "net.N17",
      }} type="npn" />
    <pinheader name="pinhead-2" footprint="pinheader2" pcbX={-17.00} pcbY={2.00} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-2" footprint="soic8" pcbX={-17.00} pcbY={10.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin5: "net.N4",
        pin7: "net.N5",
        pin4: "net.N6",
        pin8: "net.N12",
        pin6: "net.N16",
        pin3: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.00} pcbY={-2.50} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N11",
      }} type="npn" />
    <resistor name="resistor-6" footprint="0603" pcbX={22.50} pcbY={-12.00} connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={20.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N11",
      }} type="npn" />
    <resistor name="resistor-7" footprint="0402" pcbX={-9.00} pcbY={-11.00} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} resistance="1k" />
  </board>
)
