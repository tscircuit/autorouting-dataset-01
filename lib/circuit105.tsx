/** Randomly generated circuit 105. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin8: "net.N1",
        pin7: "net.N2",
        pin1: "net.N4",
        pin2: "net.N5",
        pin5: "net.N5",
        pin3: "net.N6",
        pin4: "net.N6",
        pin6: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.50} pcbY={-6.50} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.50} pcbY={6.50} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={0.00} pcbY={-9.00} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-1.50} pcbY={6.50} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={3.00} pcbY={6.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-9.00} pcbY={-1.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
  </board>
)
