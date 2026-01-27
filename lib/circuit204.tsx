/** Randomly generated circuit 204. */
export default () => (
  <board width="52.00mm" height="29.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow8" pcbX={-9.00} pcbY={-9.00} connections={{
        pin8: "net.N6",
        pin5: "net.N7",
        pin6: "net.N7",
        pin4: "net.N8",
        pin2: "net.N9",
        pin1: "net.N10",
        pin3: "net.N11",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-7.50} pcbY={7.50} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-1" footprint="0805" pcbX={1.50} pcbY={7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={3.00} pcbY={-4.50} connections={{
        pin3: "net.N7",
        pin1: "net.N8",
        pin2: "net.N14",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-6.00} pcbY={2.00} connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={10.50} pcbY={4.50} connections={{
        pin1: "net.N1",
        pin3: "net.N9",
        pin2: "net.N10",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={18.00} pcbY={-9.00} connections={{
        pin4: "net.N2",
        pin1: "net.N4",
        pin3: "net.N6",
        pin6: "net.N10",
        pin5: "net.N11",
        pin2: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-10.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <diode name="diode-3" footprint="SOD-323" pcbX={8.00} pcbY={10.00} connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={2.00} pcbY={-11.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-2.50} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-5" footprint="pinrow6" pcbX={13.50} pcbY={-4.00} connections={{
        pin4: "net.N3",
        pin3: "net.N8",
        pin6: "net.N9",
        pin1: "net.N13",
        pin2: "net.N14",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-14.00} pcbY={3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} />
    <resistor name="resistor-4" footprint="0805" pcbX={-16.50} pcbY={10.50} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={7.50} pcbY={-10.00} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} pinCount={2} pitch="2.54mm" />
  </board>
)
