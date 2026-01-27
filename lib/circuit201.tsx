/** Randomly generated circuit 201. */
export default () => (
  <board width="64.00mm" height="64.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.59} pcbY={-29.66} connections={{
        pin1: "net.N5",
        pin3: "net.N8",
        pin2: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={24.21} pcbY={0.65} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={14.20} pcbY={27.44} connections={{
        pin9: "net.N1",
        pin5: "net.N2",
        pin12: "net.N3",
        pin1: "net.N3",
        pin8: "net.N4",
        pin4: "net.N4",
        pin6: "net.N5",
        pin2: "net.N5",
        pin10: "net.N6",
        pin16: "net.N7",
        pin14: "net.N7",
        pin15: "net.N7",
        pin11: "net.N8",
        pin7: "net.N8",
        pin3: "net.N9",
        pin13: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={18.29} pcbY={5.64} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-30.23} pcbY={-23.59} connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin2: "net.N9",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-1.35} pcbY={-25.28} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-12.29} pcbY={21.64} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={27.50} pcbY={-23.36} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
  </board>
)
