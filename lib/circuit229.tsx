/** Randomly generated circuit 229. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin16: "net.N2",
        pin10: "net.N2",
        pin2: "net.N3",
        pin7: "net.N4",
        pin8: "net.N4",
        pin12: "net.N4",
        pin9: "net.N5",
        pin6: "net.N5",
        pin4: "net.N5",
        pin11: "net.N6",
        pin14: "net.N7",
        pin5: "net.N7",
        pin3: "net.N8",
        pin15: "net.N8",
        pin13: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.50} pcbY={-4.50} connections={{
        pin1: "net.N1",
        pin3: "net.N3",
        pin2: "net.N6",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-4.50} pcbY={4.50} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-4.00} pcbY={-4.50} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} resistance="1k" />
  </board>
)
