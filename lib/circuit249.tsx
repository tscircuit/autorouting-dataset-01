/** Randomly generated circuit 249. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={0.00} pcbY={0.00} connections={{
        pin3: "net.N1",
        pin6: "net.N2",
        pin4: "net.N4",
        pin8: "net.N5",
        pin7: "net.N5",
        pin5: "net.N5",
        pin2: "net.N6",
        pin1: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-4.50} pcbY={-4.50} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.00} pcbY={7.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-1.00} pcbY={7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={1.00} pcbY={-7.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={5.00} pcbY={7.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} />
    <inductor name="inductor-3" footprint="0402" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0603" pcbX={-5.50} pcbY={-1.50} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
