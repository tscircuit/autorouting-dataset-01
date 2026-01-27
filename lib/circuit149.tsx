/** Randomly generated circuit 149. */
export default () => (
  <board width="60.00mm" height="60.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={-2.54} pcbY={-3.39} connections={{
        pin2: "net.N6",
        pin3: "net.N6",
        pin1: "net.N6",
        pin6: "net.N6",
        pin5: "net.N9",
        pin4: "net.N10",
        pin8: "net.N11",
        pin7: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-13.14} pcbY={-6.26} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-21.36} pcbY={7.34} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={26.96} pcbY={9.42} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
        pin3: "net.N14",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={18.14} pcbY={-7.98} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={4.03} pcbY={-25.24} connections={{
        pin3: "net.N1",
        pin4: "net.N3",
        pin6: "net.N4",
        pin7: "net.N7",
        pin8: "net.N8",
        pin5: "net.N9",
        pin2: "net.N10",
        pin1: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={2.47} pcbY={10.92} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={2.59} pcbY={3.21} connections={{
        pin1: "net.N13",
        pin2: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-21.71} pcbY={-27.28} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0603" pcbX={24.93} pcbY={24.00} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-6.61} pcbY={29.35} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} />
    <resistor name="resistor-3" footprint="0603" pcbX={23.68} pcbY={1.57} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-25.90} pcbY={-15.13} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N8",
      }} type="npn" />
    <inductor name="inductor-4" footprint="0603" pcbX={-15.75} pcbY={-16.65} connections={{
        pin2: "net.N2",
        pin1: "net.N15",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={19.92} pcbY={-24.32} connections={{
        pin2: "net.N5",
        pin1: "net.N14",
        pin3: "net.N15",
      }} type="npn" />
  </board>
)
