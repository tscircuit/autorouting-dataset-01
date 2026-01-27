/** Randomly generated circuit 265. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin8: "net.N1",
        pin2: "net.N2",
        pin7: "net.N2",
        pin5: "net.N4",
        pin6: "net.N4",
        pin3: "net.N4",
        pin4: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-4.50} pcbY={-10.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-4.00} pcbY={9.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.00} pcbY={-6.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={2.00} pcbY={9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={0.50} pcbY={-6.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
  </board>
)
