/** Randomly generated circuit 145. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <chip name="chip-1" footprint="pinrow8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin7: "net.N7",
        pin5: "net.N7",
        pin2: "net.N8",
        pin6: "net.N9",
        pin3: "net.N10",
        pin4: "net.N11",
        pin8: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0805" pcbX={-4.00} pcbY={-4.00} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} resistance="1k" />
    <chip name="chip-3" footprint="soic16" pcbX={-5.00} pcbY={5.50} connections={{
        pin9: "net.N1",
        pin12: "net.N1",
        pin1: "net.N1",
        pin11: "net.N3",
        pin5: "net.N4",
        pin3: "net.N5",
        pin13: "net.N6",
        pin2: "net.N7",
        pin14: "net.N8",
        pin6: "net.N8",
        pin16: "net.N9",
        pin7: "net.N10",
        pin15: "net.N10",
        pin10: "net.N10",
        pin4: "net.N11",
        pin8: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={4.50} pcbY={-9.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.00} pcbY={-4.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
  </board>
)
