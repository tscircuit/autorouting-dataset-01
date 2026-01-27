/** Randomly generated circuit 264. */
export default () => (
  <board width="25.00mm" height="44.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N11",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-1.00} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
        pin3: "net.N14",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={7.50} connections={{
        pin2: "net.N5",
        pin1: "net.N16",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={6.00} pcbY={-6.00} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N17",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-7.50} pcbY={12.00} connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-4.50} pcbY={-15.00} connections={{
        pin4: "net.N1",
        pin3: "net.N7",
        pin5: "net.N9",
        pin2: "net.N11",
        pin1: "net.N16",
        pin6: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={5.50} pcbY={-1.00} connections={{
        pin1: "net.N2",
        pin8: "net.N3",
        pin5: "net.N4",
        pin7: "net.N5",
        pin2: "net.N10",
        pin6: "net.N12",
        pin3: "net.N13",
        pin4: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-0.50} pcbY={3.00} connections={{
        pin2: "net.N8",
        pin1: "net.N15",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={7.50} pcbY={-13.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0402" pcbX={-8.00} pcbY={0.00} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={4.00} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0402" pcbX={-2.00} pcbY={13.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="0603" pcbX={-1.00} pcbY={6.50} connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="0402" pcbX={4.00} pcbY={13.00} connections={{
        pin1: "net.N15",
        pin2: "net.N15",
      }} inductance="10uH" />
  </board>
)
