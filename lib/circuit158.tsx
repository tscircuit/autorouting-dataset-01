/** Randomly generated circuit 158. */
export default () => (
  <board width="110.00mm" height="22.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={43.92} pcbY={6.19} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={32.56} pcbY={2.04} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-23.18} pcbY={3.64} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-38.72} pcbY={-9.03} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={27.64} pcbY={-7.70} connections={{
        pin2: "net.N1",
        pin4: "net.N3",
        pin6: "net.N5",
        pin1: "net.N10",
        pin5: "net.N10",
        pin7: "net.N11",
        pin3: "net.N11",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={-48.92} pcbY={-2.85} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-20.00} pcbY={-5.24} connections={{
        pin2: "net.N1",
        pin3: "net.N8",
        pin1: "net.N9",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={8.68} pcbY={-2.35} connections={{
        pin5: "net.N1",
        pin6: "net.N1",
        pin3: "net.N2",
        pin4: "net.N3",
        pin2: "net.N7",
        pin1: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={18.57} pcbY={9.55} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-32.82} pcbY={-1.07} connections={{
        pin3: "net.N10",
        pin2: "net.N12",
        pin1: "net.N12",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={48.66} pcbY={-8.77} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} />
  </board>
)
