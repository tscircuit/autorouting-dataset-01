/** Randomly generated circuit 233. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={0.00} pcbY={0.00} connections={{
        pin5: "net.N1",
        pin16: "net.N2",
        pin9: "net.N4",
        pin8: "net.N4",
        pin7: "net.N4",
        pin6: "net.N5",
        pin1: "net.N5",
        pin12: "net.N6",
        pin14: "net.N6",
        pin13: "net.N7",
        pin4: "net.N8",
        pin3: "net.N8",
        pin2: "net.N8",
        pin10: "net.N8",
        pin11: "net.N9",
        pin15: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.50} pcbY={-9.00} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-4.00} pcbY={7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.00} pcbY={-5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-0.50} pcbY={4.50} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.00} pcbY={-7.00} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.00} pcbY={5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N6",
      }} type="npn" />
  </board>
)
