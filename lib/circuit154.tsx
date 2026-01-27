/** Randomly generated circuit 154. */
export default () => (
  <board width="32.00mm" height="128.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={8.06} pcbY={22.21} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={14.82} pcbY={-5.04} connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={13.43} pcbY={-26.49} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.35} pcbY={56.85} connections={{
        pin1: "net.N1",
        pin3: "net.N8",
        pin2: "net.N10",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={5.24} pcbY={23.11} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-5.47} pcbY={-48.18} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.80} pcbY={22.84} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-4.18} pcbY={-29.92} connections={{
        pin2: "net.N2",
        pin1: "net.N16",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={10.90} pcbY={-40.33} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.69} pcbY={50.73} connections={{
        pin3: "net.N3",
        pin2: "net.N14",
        pin1: "net.N16",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={1.44} pcbY={38.29} connections={{
        pin4: "net.N1",
        pin2: "net.N4",
        pin1: "net.N6",
        pin3: "net.N9",
        pin6: "net.N11",
        pin7: "net.N14",
        pin5: "net.N15",
        pin8: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={-12.66} pcbY={56.84} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={-11.08} pcbY={-26.64} connections={{
        pin4: "net.N1",
        pin8: "net.N2",
        pin5: "net.N10",
        pin1: "net.N11",
        pin7: "net.N11",
        pin6: "net.N14",
        pin3: "net.N15",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-5" footprint="SOD-123" pcbX={1.77} pcbY={-24.48} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <diode name="diode-6" footprint="SOD-123" pcbX={-2.61} pcbY={1.33} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={5.12} pcbY={-14.10} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
        pin3: "net.N12",
      }} type="npn" />
  </board>
)
