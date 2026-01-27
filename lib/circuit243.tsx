/** Randomly generated circuit 243. */
export default () => (
  <board width="66.00mm" height="110.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-28.86} pcbY={41.28} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-19.55} pcbY={-26.95} connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={30.51} pcbY={1.04} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={31.47} pcbY={27.29} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-19.87} pcbY={6.90} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={27.06} pcbY={-10.52} connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={6.51} pcbY={-42.01} connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin3: "net.N4",
        pin6: "net.N7",
        pin1: "net.N11",
        pin5: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-22.63} pcbY={-38.23} connections={{
        pin7: "net.N4",
        pin6: "net.N8",
        pin2: "net.N8",
        pin1: "net.N8",
        pin3: "net.N9",
        pin8: "net.N10",
        pin4: "net.N10",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={30.93} pcbY={-24.30} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={0.85} pcbY={-14.51} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-3" footprint="0603" pcbX={27.59} pcbY={19.17} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} resistance="1k" />
  </board>
)
