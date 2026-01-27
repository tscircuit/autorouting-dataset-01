/** Randomly generated circuit 266. */
export default () => (
  <board width="24.00mm" height="60.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={7.25} pcbY={-1.94} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.26} pcbY={-23.71} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={6.20} pcbY={14.55} connections={{
        pin5: "net.N2",
        pin3: "net.N2",
        pin8: "net.N2",
        pin2: "net.N3",
        pin7: "net.N4",
        pin6: "net.N4",
        pin1: "net.N5",
        pin4: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={-8.77} pcbY={29.57} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={11.20} pcbY={-23.08} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={8.53} pcbY={-14.50} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} inductance="10uH" />
  </board>
)
