/** Randomly generated circuit 219. */
export default () => (
  <board width="78.00mm" height="104.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={6.72} pcbY={-47.43} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-32.41} pcbY={-8.58} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-31.20} pcbY={22.75} connections={{
        pin3: "net.N3",
        pin1: "net.N15",
        pin2: "net.N15",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-22.44} pcbY={37.67} connections={{
        pin2: "net.N11",
        pin1: "net.N18",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={32.58} pcbY={-49.45} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N11",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-20.64} pcbY={-30.73} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-0.74} pcbY={-15.67} connections={{
        pin2: "net.N2",
        pin3: "net.N6",
        pin1: "net.N7",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={34.06} pcbY={-30.42} connections={{
        pin1: "net.N4",
        pin3: "net.N5",
        pin6: "net.N6",
        pin5: "net.N7",
        pin8: "net.N9",
        pin2: "net.N13",
        pin4: "net.N14",
        pin7: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={25.22} pcbY={46.63} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-28.92} pcbY={-39.49} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
        pin3: "net.N12",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={21.70} pcbY={-15.10} connections={{
        pin1: "net.N1",
        pin2: "net.N17",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic16" pcbX={-2.55} pcbY={14.12} connections={{
        pin12: "net.N2",
        pin8: "net.N3",
        pin16: "net.N7",
        pin3: "net.N7",
        pin6: "net.N8",
        pin10: "net.N8",
        pin13: "net.N10",
        pin7: "net.N12",
        pin2: "net.N12",
        pin15: "net.N13",
        pin1: "net.N13",
        pin4: "net.N14",
        pin14: "net.N14",
        pin9: "net.N16",
        pin11: "net.N16",
        pin5: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="dip8" pcbX={34.03} pcbY={42.19} connections={{
        pin6: "net.N2",
        pin3: "net.N3",
        pin8: "net.N4",
        pin1: "net.N4",
        pin4: "net.N11",
        pin5: "net.N15",
        pin2: "net.N17",
        pin7: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
