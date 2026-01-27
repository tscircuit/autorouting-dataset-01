/** Randomly generated circuit 239. */
export default () => (
  <board width="20.00mm" height="10.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.35} pcbY={3.28} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={1.38} pcbY={-0.85} connections={{
        pin5: "net.N1",
        pin2: "net.N2",
        pin3: "net.N2",
        pin4: "net.N2",
        pin6: "net.N2",
        pin7: "net.N3",
        pin8: "net.N4",
        pin1: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={-9.16} pcbY={-2.80} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-2.62} pcbY={-0.76} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={5.86} pcbY={-3.73} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
  </board>
)
