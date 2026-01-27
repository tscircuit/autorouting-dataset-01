/** Randomly generated circuit 295. */
export default () => (
  <board width="23.00mm" height="40.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow8" pcbX={-2.00} pcbY={6.00} connections={{
        pin5: "net.N1",
        pin3: "net.N1",
        pin8: "net.N4",
        pin4: "net.N4",
        pin6: "net.N8",
        pin2: "net.N10",
        pin7: "net.N10",
        pin1: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-323" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} />
    <diode name="diode-2" footprint="SOD-323" pcbX={-7.50} pcbY={-12.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} />
    <resistor name="resistor-3" footprint="0402" pcbX={-3.50} pcbY={-2.00} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.50} pcbY={-13.50} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} />
    <chip name="chip-2" footprint="pinrow6" pcbX={0.50} pcbY={-9.00} connections={{
        pin3: "net.N4",
        pin4: "net.N5",
        pin5: "net.N8",
        pin1: "net.N9",
        pin2: "net.N10",
        pin6: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="0603" pcbX={-4.00} pcbY={1.00} connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={7.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-7.50} pcbY={15.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={1.00} pcbY={14.00} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N5",
      }} type="npn" />
    <resistor name="resistor-5" footprint="0805" pcbX={4.00} pcbY={0.50} connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-7.00} pcbY={10.00} connections={{
        pin3: "net.N6",
        pin2: "net.N8",
        pin1: "net.N11",
      }} type="npn" />
  </board>
)
