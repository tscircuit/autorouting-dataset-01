/** Randomly generated circuit 267. */
export default () => (
  <board width="72.00mm" height="120.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={-15.50} pcbY={30.52} connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-15.98} pcbY={39.61} connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={-16.12} pcbY={-48.98} connections={{
        pin7: "net.N1",
        pin4: "net.N3",
        pin8: "net.N4",
        pin3: "net.N5",
        pin6: "net.N13",
        pin5: "net.N14",
        pin2: "net.N15",
        pin1: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={4.14} pcbY={45.76} connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="dip8" pcbX={7.10} pcbY={-26.45} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin6: "net.N7",
        pin5: "net.N16",
        pin4: "net.N16",
        pin7: "net.N17",
        pin3: "net.N19",
        pin8: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-3.71} pcbY={-40.12} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <chip name="chip-3" footprint="dip8" pcbX={-11.08} pcbY={-19.47} connections={{
        pin7: "net.N4",
        pin6: "net.N5",
        pin3: "net.N6",
        pin1: "net.N6",
        pin8: "net.N7",
        pin2: "net.N8",
        pin4: "net.N9",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-4" footprint="soic16" pcbX={7.46} pcbY={-31.56} connections={{
        pin4: "net.N1",
        pin9: "net.N1",
        pin14: "net.N2",
        pin11: "net.N2",
        pin6: "net.N2",
        pin7: "net.N4",
        pin10: "net.N5",
        pin16: "net.N10",
        pin5: "net.N10",
        pin15: "net.N11",
        pin12: "net.N14",
        pin2: "net.N15",
        pin13: "net.N15",
        pin1: "net.N16",
        pin3: "net.N18",
        pin8: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0402" pcbX={-9.04} pcbY={32.07} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={10.57} pcbY={46.76} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} />
    <chip name="chip-5" footprint="soic8" pcbX={24.67} pcbY={7.54} connections={{
        pin2: "net.N7",
        pin8: "net.N8",
        pin3: "net.N9",
        pin7: "net.N9",
        pin4: "net.N11",
        pin6: "net.N11",
        pin5: "net.N12",
        pin1: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={24.76} pcbY={-36.80} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
  </board>
)
