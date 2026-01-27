/** Randomly generated circuit 173. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={1.50} pcbY={7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0805" pcbX={-6.00} pcbY={2.00} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinheader2" pcbX={2.50} pcbY={-4.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={9.00} pcbY={9.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={1.00} pcbY={-12.00} connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin4: "net.N3",
        pin7: "net.N4",
        pin2: "net.N6",
        pin8: "net.N7",
        pin1: "net.N8",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0805" pcbX={-1.50} pcbY={3.50} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0805" pcbX={9.00} pcbY={-10.00} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} inductance="10uH" />
  </board>
)
