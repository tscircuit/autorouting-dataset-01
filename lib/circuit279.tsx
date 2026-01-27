/** Randomly generated circuit 279. */
export default () => (
  <board width="38.00mm" height="22.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N7",
        pin2: "net.N12",
        pin1: "net.N13",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-7.50} pcbY={7.50} connections={{
        pin2: "net.N13",
        pin1: "net.N13",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-2.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin7: "net.N2",
        pin6: "net.N2",
        pin8: "net.N3",
        pin3: "net.N5",
        pin1: "net.N6",
        pin4: "net.N9",
        pin5: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.00} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={3.50} pcbY={-3.50} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={5.00} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.00} pcbY={-7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N10",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0402" pcbX={-4.50} pcbY={-0.50} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={12.00} pcbY={-7.50} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={4.50} pcbY={-0.50} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-5.50} pcbY={-6.50} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-5" footprint="0402" pcbX={-2.00} pcbY={-6.50} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={2.00} pcbY={-6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-11.00} pcbY={-1.00} connections={{
        pin3: "net.N9",
        pin1: "net.N11",
        pin2: "net.N13",
      }} type="npn" />
  </board>
)
