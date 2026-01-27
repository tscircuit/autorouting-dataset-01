/** Randomly generated circuit 280. */
export default () => (
  <board width="100.00mm" height="20.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={26.07} pcbY={4.52} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-44.79} pcbY={-1.13} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N3",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-7.20} pcbY={-5.78} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={-25.49} pcbY={-9.47} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-0.90} pcbY={8.51} connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N7",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={20.77} pcbY={-7.63} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={41.01} pcbY={5.35} connections={{
        pin2: "net.N3",
        pin3: "net.N4",
        pin1: "net.N4",
      }} type="npn" />
    <inductor name="inductor-4" footprint="0603" pcbX={39.65} pcbY={-8.20} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-24.45} pcbY={4.09} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={-46.33} pcbY={8.10} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
  </board>
)
