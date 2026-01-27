/** Randomly generated circuit 234. */
export default () => (
  <board width="26.00mm" height="78.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.59} pcbY={-27.37} connections={{
        pin2: "net.N4",
        pin1: "net.N13",
        pin3: "net.N17",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-11.26} pcbY={-2.61} connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={6.23} pcbY={-11.39} connections={{
        pin8: "net.N1",
        pin3: "net.N3",
        pin5: "net.N5",
        pin7: "net.N5",
        pin2: "net.N6",
        pin4: "net.N8",
        pin1: "net.N17",
        pin6: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={6.82} pcbY={28.77} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-12.06} pcbY={18.06} connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={-1.03} pcbY={29.68} connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin5: "net.N5",
        pin7: "net.N6",
        pin8: "net.N6",
        pin4: "net.N9",
        pin6: "net.N13",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={-8.83} pcbY={29.48} connections={{
        pin1: "net.N15",
        pin2: "net.N17",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={8.51} pcbY={-18.81} connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} />
    <chip name="chip-3" footprint="soic16" pcbX={-4.82} pcbY={-11.54} connections={{
        pin4: "net.N1",
        pin5: "net.N2",
        pin15: "net.N3",
        pin10: "net.N6",
        pin6: "net.N7",
        pin16: "net.N7",
        pin13: "net.N9",
        pin11: "net.N9",
        pin8: "net.N9",
        pin7: "net.N10",
        pin1: "net.N12",
        pin2: "net.N14",
        pin3: "net.N15",
        pin12: "net.N16",
        pin9: "net.N16",
        pin14: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-9.76} pcbY={22.40} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={8.03} pcbY={24.22} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.83} pcbY={-37.54} connections={{
        pin2: "net.N4",
        pin3: "net.N7",
        pin1: "net.N12",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0402" pcbX={7.05} pcbY={5.65} connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} inductance="10uH" />
  </board>
)
