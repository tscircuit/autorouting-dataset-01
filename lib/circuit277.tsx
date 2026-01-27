/** Randomly generated circuit 277. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={0.00} pcbY={-9.00} connections={{
        pin9: "net.N1",
        pin2: "net.N1",
        pin11: "net.N1",
        pin14: "net.N2",
        pin5: "net.N3",
        pin16: "net.N3",
        pin15: "net.N4",
        pin13: "net.N5",
        pin7: "net.N5",
        pin10: "net.N5",
        pin12: "net.N6",
        pin3: "net.N6",
        pin1: "net.N7",
        pin4: "net.N8",
        pin6: "net.N8",
        pin8: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin3: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={1.00} pcbY={-3.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={3.00} pcbY={8.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
  </board>
)
