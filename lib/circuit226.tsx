/** Randomly generated circuit 226. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N6",
        pin3: "net.N6",
        pin2: "net.N7",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-7.50} pcbY={7.50} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N5",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={1.00} pcbY={7.00} connections={{
        pin7: "net.N1",
        pin5: "net.N1",
        pin1: "net.N4",
        pin4: "net.N6",
        pin3: "net.N7",
        pin2: "net.N7",
        pin6: "net.N8",
        pin8: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.00} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-1.50} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.00} pcbY={2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={7.00} pcbY={-2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={9.00} pcbY={-9.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} resistance="1k" />
  </board>
)
