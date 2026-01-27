/** Randomly generated circuit 146. */
export default () => (
  <board width="32.00mm" height="19.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.50} pcbY={-6.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-7.50} pcbY={1.50} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-1.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={10.50} pcbY={-4.50} connections={{
        pin5: "net.N1",
        pin8: "net.N2",
        pin3: "net.N4",
        pin4: "net.N6",
        pin2: "net.N6",
        pin1: "net.N7",
        pin6: "net.N7",
        pin7: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.50} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={9.00} pcbY={4.50} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.00} pcbY={-4.00} connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin2: "net.N8",
      }} type="npn" />
  </board>
)
