/** Randomly generated circuit 170. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={0.00} pcbY={0.00} connections={{
        pin15: "net.N1",
        pin7: "net.N1",
        pin14: "net.N2",
        pin6: "net.N2",
        pin1: "net.N3",
        pin2: "net.N4",
        pin10: "net.N5",
        pin11: "net.N5",
        pin13: "net.N6",
        pin4: "net.N7",
        pin3: "net.N8",
        pin12: "net.N8",
        pin5: "net.N9",
        pin16: "net.N9",
        pin8: "net.N9",
        pin9: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.00} pcbY={-7.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-4.50} pcbY={9.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={2.00} pcbY={7.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-4.50} pcbY={4.50} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.00} pcbY={-7.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} />
  </board>
)
