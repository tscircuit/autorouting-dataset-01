/** Randomly generated circuit 145. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
        pin3: "net.N10",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-5.00} pcbY={5.00} connections={{
        pin16: "net.N1",
        pin7: "net.N2",
        pin15: "net.N3",
        pin5: "net.N3",
        pin13: "net.N3",
        pin3: "net.N5",
        pin6: "net.N6",
        pin9: "net.N8",
        pin10: "net.N8",
        pin4: "net.N8",
        pin1: "net.N9",
        pin11: "net.N9",
        pin14: "net.N10",
        pin8: "net.N11",
        pin12: "net.N11",
        pin2: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={4.50} pcbY={-7.50} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.00} pcbY={6.00} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
  </board>
)
