/** Randomly generated circuit 129. */
export default () => (
  <board width="70.00mm" height="14.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={16.34} pcbY={1.93} connections={{
        pin13: "net.N1",
        pin16: "net.N2",
        pin2: "net.N4",
        pin12: "net.N4",
        pin5: "net.N5",
        pin6: "net.N5",
        pin8: "net.N6",
        pin4: "net.N6",
        pin7: "net.N7",
        pin10: "net.N7",
        pin11: "net.N9",
        pin3: "net.N10",
        pin14: "net.N10",
        pin15: "net.N11",
        pin1: "net.N12",
        pin9: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-32.73} pcbY={0.12} connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} />
    <chip name="chip-2" footprint="soic8" pcbX={5.25} pcbY={-0.10} connections={{
        pin8: "net.N1",
        pin5: "net.N1",
        pin1: "net.N5",
        pin3: "net.N8",
        pin6: "net.N9",
        pin7: "net.N10",
        pin2: "net.N11",
        pin4: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={33.30} pcbY={-1.91} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={13.30} pcbY={-2.74} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-15.57} pcbY={-0.95} connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-16.66} pcbY={3.39} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N6",
      }} type="npn" />
  </board>
)
