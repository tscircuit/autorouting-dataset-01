/** Randomly generated circuit 280. */
export default () => (
  <board width="19.00mm" height="32.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.00} pcbY={-6.00} connections={{
        pin3: "net.N3",
        pin2: "net.N5",
        pin1: "net.N7",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.00} pcbY={6.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
        pin3: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={2.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-0.50} pcbY={3.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={3.00} pcbY={3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-4.50} pcbY={-2.50} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N9",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={4.50} pcbY={-2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
        pin3: "net.N9",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-1.50} pcbY={-10.00} connections={{
        pin3: "net.N2",
        pin4: "net.N5",
        pin2: "net.N6",
        pin1: "net.N6",
        pin6: "net.N8",
        pin5: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={4.50} pcbY={10.50} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-6" footprint="SOT-23" pcbX={-5.00} pcbY={1.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
        pin3: "net.N7",
      }} type="npn" />
  </board>
)
