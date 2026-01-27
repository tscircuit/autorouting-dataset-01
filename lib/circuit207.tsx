/** Randomly generated circuit 207. */
export default () => (
  <board width="28.00mm" height="56.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={6.06} pcbY={-0.40} connections={{
        pin2: "net.N1",
        pin12: "net.N2",
        pin8: "net.N2",
        pin16: "net.N2",
        pin14: "net.N3",
        pin10: "net.N3",
        pin6: "net.N4",
        pin11: "net.N5",
        pin15: "net.N5",
        pin7: "net.N6",
        pin5: "net.N8",
        pin4: "net.N9",
        pin13: "net.N10",
        pin1: "net.N10",
        pin9: "net.N11",
        pin3: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.47} pcbY={1.98} connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.12} pcbY={27.25} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-12.16} pcbY={-0.66} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.23} pcbY={13.87} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={5.52} pcbY={19.42} connections={{
        pin6: "net.N3",
        pin3: "net.N5",
        pin7: "net.N7",
        pin8: "net.N7",
        pin5: "net.N7",
        pin2: "net.N8",
        pin1: "net.N10",
        pin4: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-8.69} pcbY={-8.90} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
