/** Randomly generated circuit 176. */
export default () => (
  <board width="120.00mm" height="30.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-48.93} pcbY={-12.94} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.57} pcbY={14.06} connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={21.24} pcbY={12.92} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={31.16} pcbY={14.04} connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={26.70} pcbY={-1.58} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
        pin3: "net.N7",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-8.83} pcbY={-13.63} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
        pin3: "net.N13",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-50.59} pcbY={9.58} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-28.28} pcbY={-1.61} connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-22.44} pcbY={11.80} connections={{
        pin6: "net.N3",
        pin14: "net.N3",
        pin10: "net.N4",
        pin7: "net.N5",
        pin15: "net.N6",
        pin4: "net.N6",
        pin1: "net.N7",
        pin12: "net.N8",
        pin9: "net.N9",
        pin2: "net.N9",
        pin11: "net.N11",
        pin16: "net.N12",
        pin3: "net.N14",
        pin13: "net.N14",
        pin8: "net.N15",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0402" pcbX={6.01} pcbY={8.39} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-56.14} pcbY={0.96} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-30.57} pcbY={8.02} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-5" footprint="0402" pcbX={10.85} pcbY={-7.23} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={42.39} pcbY={-8.43} connections={{
        pin2: "net.N3",
        pin3: "net.N6",
        pin1: "net.N12",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-10.46} pcbY={7.53} connections={{
        pin3: "net.N9",
        pin2: "net.N13",
        pin1: "net.N15",
      }} type="npn" />
  </board>
)
