/** Randomly generated circuit 178. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={-1.50} pcbY={4.50} connections={{
        pin5: "net.N1",
        pin1: "net.N1",
        pin6: "net.N2",
        pin3: "net.N3",
        pin2: "net.N4",
        pin11: "net.N4",
        pin9: "net.N5",
        pin8: "net.N5",
        pin7: "net.N6",
        pin13: "net.N7",
        pin16: "net.N7",
        pin12: "net.N7",
        pin10: "net.N8",
        pin14: "net.N8",
        pin4: "net.N9",
        pin15: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.50} pcbY={-3.50} connections={{
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} inductance="10uH" />
  </board>
)
