/** Randomly generated circuit 248. */
export default () => (
  <board width="30.00mm" height="30.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin6: "net.N5",
        pin1: "net.N9",
        pin5: "net.N10",
        pin4: "net.N14",
        pin3: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-2.00} pcbY={-4.00} connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-0.50} pcbY={4.00} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={2.00} pcbY={-4.00} connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin3: "net.N7",
        pin2: "net.N13",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={10.50} pcbY={-10.50} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic16" pcbX={-7.00} pcbY={8.50} connections={{
        pin12: "net.N1",
        pin3: "net.N2",
        pin16: "net.N3",
        pin2: "net.N3",
        pin13: "net.N4",
        pin9: "net.N4",
        pin5: "net.N6",
        pin14: "net.N6",
        pin4: "net.N6",
        pin10: "net.N7",
        pin7: "net.N8",
        pin15: "net.N12",
        pin6: "net.N13",
        pin8: "net.N14",
        pin11: "net.N14",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-4" footprint="pinrow6" pcbX={2.00} pcbY={-8.00} connections={{
        pin4: "net.N7",
        pin3: "net.N8",
        pin6: "net.N10",
        pin2: "net.N10",
        pin5: "net.N11",
        pin1: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
