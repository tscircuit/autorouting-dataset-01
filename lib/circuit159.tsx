/** Randomly generated circuit 159. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-3.00} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
        pin3: "net.N7",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic16" pcbX={0.00} pcbY={7.50} connections={{
        pin4: "net.N1",
        pin15: "net.N1",
        pin1: "net.N1",
        pin3: "net.N1",
        pin11: "net.N2",
        pin16: "net.N2",
        pin5: "net.N2",
        pin14: "net.N3",
        pin2: "net.N3",
        pin8: "net.N4",
        pin10: "net.N4",
        pin6: "net.N5",
        pin9: "net.N5",
        pin12: "net.N6",
        pin13: "net.N6",
        pin7: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={4.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
