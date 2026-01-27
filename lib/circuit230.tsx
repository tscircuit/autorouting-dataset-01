/** Randomly generated circuit 230. */
export default () => (
  <board width="21.00mm" height="36.00mm">
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N3",
        pin1: "net.N3",
        pin4: "net.N7",
        pin2: "net.N8",
        pin6: "net.N8",
        pin5: "net.N9",
      }} pinCount={6} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0603" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-6.00} pcbY={9.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-4.00} pcbY={4.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={0.00} pcbY={-10.00} connections={{
        pin5: "net.N7",
        pin4: "net.N8",
        pin2: "net.N9",
        pin1: "net.N11",
        pin3: "net.N12",
        pin6: "net.N12",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.50} pcbY={-4.00} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} />
    <capacitor name="capacitor-1" footprint="0805" pcbX={2.00} pcbY={6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={2.50} pcbY={-4.00} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.50} pcbY={9.50} connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N5",
      }} type="npn" />
    <chip name="chip-4" footprint="soic8" pcbX={4.50} pcbY={11.00} connections={{
        pin8: "net.N1",
        pin2: "net.N1",
        pin4: "net.N2",
        pin7: "net.N5",
        pin5: "net.N6",
        pin6: "net.N8",
        pin1: "net.N9",
        pin3: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
