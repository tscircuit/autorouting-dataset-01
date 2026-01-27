/** Randomly generated circuit 290. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin3: "net.N5",
        pin1: "net.N6",
        pin2: "net.N12",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.00} pcbY={-3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={3.00} pcbY={7.50} connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={9.00} pcbY={-9.00} connections={{
        pin6: "net.N1",
        pin2: "net.N6",
        pin7: "net.N8",
        pin4: "net.N10",
        pin8: "net.N11",
        pin1: "net.N11",
        pin3: "net.N14",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={10.50} pcbY={1.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={10.50} pcbY={9.00} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0402" pcbX={-1.50} pcbY={3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0402" pcbX={2.00} pcbY={3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={-7.00} pcbY={-1.00} connections={{
        pin5: "net.N2",
        pin8: "net.N2",
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N7",
        pin4: "net.N8",
        pin7: "net.N10",
        pin6: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-6" footprint="0603" pcbX={-12.00} pcbY={12.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.00} pcbY={-13.50} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
  </board>
)
