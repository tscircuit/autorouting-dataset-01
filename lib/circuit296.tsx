/** Randomly generated circuit 296. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={11.33} pcbY={0.57} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.56} pcbY={2.12} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-4.06} pcbY={-12.64} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-4.96} pcbY={-4.00} connections={{
        pin7: "net.N3",
        pin4: "net.N4",
        pin5: "net.N5",
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N7",
        pin6: "net.N8",
        pin8: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-8.45} pcbY={-10.58} connections={{
        pin3: "net.N2",
        pin1: "net.N6",
        pin2: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={9.69} pcbY={-10.01} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N6",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-1.26} pcbY={7.59} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin6: "net.N3",
        pin4: "net.N5",
        pin5: "net.N7",
        pin3: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
