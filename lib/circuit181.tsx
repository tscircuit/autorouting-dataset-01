/** Randomly generated circuit 181. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={-6.50} pcbY={-6.50} connections={{
        pin7: "net.N2",
        pin3: "net.N5",
        pin2: "net.N9",
        pin6: "net.N9",
        pin8: "net.N10",
        pin4: "net.N11",
        pin5: "net.N13",
        pin1: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={-6.00} pcbY={6.00} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
        pin3: "net.N12",
        pin4: "net.N14",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={5.00} pcbY={-7.00} connections={{
        pin3: "net.N4",
        pin2: "net.N6",
        pin1: "net.N13",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-323" pcbX={4.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <capacitor name="capacitor-1" footprint="0805" pcbX={7.00} pcbY={0.00} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0805" pcbX={10.00} pcbY={6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={6.00} pcbY={13.50} connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }} resistance="1k" />
    <chip name="chip-2" footprint="pinrow8" pcbX={-8.00} pcbY={13.00} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin4: "net.N6",
        pin7: "net.N6",
        pin5: "net.N10",
        pin1: "net.N14",
        pin6: "net.N15",
        pin8: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={2.00} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-4" footprint="pinheader6" pcbX={7.00} pcbY={-12.50} connections={{
        pin2: "net.N1",
        pin6: "net.N1",
        pin4: "net.N4",
        pin1: "net.N8",
        pin5: "net.N8",
        pin3: "net.N14",
      }} pinCount={6} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0603" pcbX={12.00} pcbY={12.00} connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }} inductance="10uH" />
  </board>
)
