/** Randomly generated circuit 269. */
export default () => (
  <board width="36.00mm" height="48.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={9.85} pcbY={-6.73} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={4.83} pcbY={6.46} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-15.36} pcbY={-12.20} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.52} pcbY={8.07} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} />
    <chip name="chip-1" footprint="soic16" pcbX={-9.70} pcbY={21.11} connections={{
        pin16: "net.N1",
        pin7: "net.N1",
        pin2: "net.N1",
        pin4: "net.N2",
        pin9: "net.N2",
        pin13: "net.N3",
        pin8: "net.N5",
        pin1: "net.N6",
        pin15: "net.N6",
        pin12: "net.N7",
        pin3: "net.N7",
        pin14: "net.N7",
        pin11: "net.N8",
        pin10: "net.N8",
        pin5: "net.N8",
        pin6: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-13.44} pcbY={7.13} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
  </board>
)
