/** Randomly generated circuit 208. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.50} pcbY={-3.50} connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin1: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={2.00} pcbY={7.00} connections={{
        pin8: "net.N1",
        pin6: "net.N1",
        pin2: "net.N3",
        pin5: "net.N4",
        pin4: "net.N4",
        pin7: "net.N5",
        pin1: "net.N6",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={4.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={5.00} pcbY={-2.50} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
        pin3: "net.N8",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-4.50} pcbY={3.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
