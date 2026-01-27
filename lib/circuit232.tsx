/** Randomly generated circuit 232. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N3",
        pin2: "net.N3",
        pin1: "net.N6",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-6.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={0.00} pcbY={5.00} connections={{
        pin5: "net.N2",
        pin1: "net.N2",
        pin8: "net.N3",
        pin2: "net.N5",
        pin7: "net.N5",
        pin4: "net.N6",
        pin6: "net.N7",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={-1.50} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-8.00} pcbY={-1.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
  </board>
)
