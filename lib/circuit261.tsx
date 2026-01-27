/** Randomly generated circuit 261. */
export default () => (
  <board width="72.00mm" height="120.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-16.72} pcbY={-1.48} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-17.23} pcbY={46.02} connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N14",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-22.45} pcbY={34.37} connections={{
        pin3: "net.N7",
        pin1: "net.N11",
        pin2: "net.N18",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={15.43} pcbY={48.56} connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={8.45} pcbY={-42.71} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={10.35} pcbY={-23.39} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={33.55} pcbY={-55.86} connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-19.45} pcbY={-52.88} connections={{
        pin8: "net.N5",
        pin4: "net.N7",
        pin7: "net.N11",
        pin3: "net.N12",
        pin1: "net.N14",
        pin6: "net.N15",
        pin5: "net.N16",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-27.20} pcbY={-37.58} connections={{
        pin1: "net.N8",
        pin2: "net.N17",
      }} />
    <chip name="chip-2" footprint="soic8" pcbX={1.07} pcbY={-31.97} connections={{
        pin6: "net.N2",
        pin3: "net.N6",
        pin1: "net.N7",
        pin7: "net.N12",
        pin4: "net.N13",
        pin8: "net.N16",
        pin2: "net.N17",
        pin5: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={21.02} pcbY={-20.66} connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="soic16" pcbX={8.01} pcbY={6.84} connections={{
        pin8: "net.N1",
        pin6: "net.N2",
        pin11: "net.N2",
        pin9: "net.N3",
        pin7: "net.N3",
        pin13: "net.N4",
        pin1: "net.N5",
        pin2: "net.N6",
        pin15: "net.N7",
        pin4: "net.N8",
        pin3: "net.N10",
        pin10: "net.N11",
        pin5: "net.N11",
        pin14: "net.N13",
        pin16: "net.N15",
        pin12: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
