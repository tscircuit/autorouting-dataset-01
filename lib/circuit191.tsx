/** Randomly generated circuit 191. */
export default () => (
  <board width="78.00mm" height="104.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-28.04} pcbY={47.73} connections={{
        pin3: "net.N1",
        pin5: "net.N3",
        pin1: "net.N4",
        pin7: "net.N4",
        pin6: "net.N7",
        pin8: "net.N9",
        pin2: "net.N14",
        pin4: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={15.44} pcbY={42.66} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={34.69} pcbY={27.07} connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N7",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={35.63} pcbY={5.47} connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={19.55} pcbY={-37.64} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={4.06} pcbY={-21.11} connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={-26.16} pcbY={-42.41} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={18.40} pcbY={-14.83} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <chip name="chip-2" footprint="soic16" pcbX={-3.01} pcbY={11.45} connections={{
        pin3: "net.N2",
        pin8: "net.N2",
        pin1: "net.N2",
        pin7: "net.N6",
        pin14: "net.N6",
        pin5: "net.N7",
        pin12: "net.N8",
        pin10: "net.N8",
        pin16: "net.N10",
        pin6: "net.N10",
        pin9: "net.N11",
        pin11: "net.N11",
        pin4: "net.N12",
        pin15: "net.N12",
        pin13: "net.N15",
        pin2: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-29.80} pcbY={7.63} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-35.22} pcbY={-2.52} connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={8.08} pcbY={-44.50} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0402" pcbX={5.30} pcbY={-1.37} connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }} resistance="1k" />
  </board>
)
