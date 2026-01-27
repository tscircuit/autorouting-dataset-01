/** Randomly generated circuit 189. */
export default () => (
  <board width="30.00mm" height="18.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin3: "net.N6",
        pin2: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-7.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-7.00} pcbY={1.00} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow8" pcbX={2.50} pcbY={4.00} connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin7: "net.N2",
        pin5: "net.N2",
        pin8: "net.N7",
        pin4: "net.N7",
        pin6: "net.N8",
        pin1: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-2.00} pcbY={-3.50} connections={{
        pin3: "net.N6",
        pin2: "net.N8",
        pin1: "net.N10",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={2.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0805" pcbX={4.50} pcbY={-0.50} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={6.00} pcbY={-5.50} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-6.50} pcbY={4.00} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
