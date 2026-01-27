/** Randomly generated circuit 274. */
export default () => (
  <board width="90.00mm" height="72.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={38.33} pcbY={22.67} connections={{
        pin2: "net.N2",
        pin3: "net.N5",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.31} pcbY={-29.39} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-44.28} pcbY={24.87} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-9.02} pcbY={1.57} connections={{
        pin3: "net.N3",
        pin5: "net.N4",
        pin4: "net.N5",
        pin1: "net.N6",
        pin2: "net.N9",
        pin6: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={20.46} pcbY={10.57} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={11.45} pcbY={-25.09} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={6.74} pcbY={0.66} connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={27.74} pcbY={-27.72} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={36.77} pcbY={-33.11} connections={{
        pin8: "net.N1",
        pin3: "net.N1",
        pin6: "net.N3",
        pin7: "net.N4",
        pin1: "net.N6",
        pin5: "net.N7",
        pin4: "net.N8",
        pin2: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
