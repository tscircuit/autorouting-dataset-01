/** Randomly generated circuit 131. */
export default () => (
  <board width="70.00mm" height="70.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-27.96} pcbY={12.76} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={11.84} pcbY={-12.53} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={-27.21} pcbY={-7.49} connections={{
        pin1: "net.N1",
        pin8: "net.N3",
        pin6: "net.N4",
        pin2: "net.N4",
        pin5: "net.N5",
        pin3: "net.N5",
        pin7: "net.N7",
        pin4: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-0.40} pcbY={12.21} connections={{
        pin1: "net.N3",
        pin3: "net.N6",
        pin2: "net.N6",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={-18.98} pcbY={19.45} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={5.76} pcbY={-29.05} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.54} pcbY={-31.70} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} inductance="10uH" />
  </board>
)
