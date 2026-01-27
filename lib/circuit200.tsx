/** Randomly generated circuit 200. */
export default () => (
  <board width="76.00mm" height="152.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={37.12} pcbY={-39.44} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={5.44} pcbY={16.30} connections={{
        pin1: "net.N12",
        pin2: "net.N16",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={22.30} pcbY={-73.15} connections={{
        pin2: "net.N4",
        pin1: "net.N17",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={4.19} pcbY={-8.45} connections={{
        pin3: "net.N3",
        pin8: "net.N6",
        pin6: "net.N9",
        pin2: "net.N10",
        pin7: "net.N11",
        pin5: "net.N13",
        pin4: "net.N16",
        pin1: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-0.76} pcbY={52.59} connections={{
        pin2: "net.N2",
        pin1: "net.N19",
      }} resistance="1k" />
    <chip name="chip-2" footprint="pinrow6" pcbX={4.77} pcbY={-16.17} connections={{
        pin3: "net.N9",
        pin6: "net.N12",
        pin4: "net.N14",
        pin2: "net.N14",
        pin1: "net.N18",
        pin5: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0402" pcbX={8.78} pcbY={67.00} connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-12.91} pcbY={2.35} connections={{
        pin1: "net.N2",
        pin2: "net.N20",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={25.80} pcbY={-44.93} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
        pin3: "net.N16",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.35} pcbY={24.13} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={31.04} pcbY={-55.52} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} />
    <resistor name="resistor-3" footprint="0603" pcbX={30.41} pcbY={-33.12} connections={{
        pin1: "net.N8",
        pin2: "net.N19",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-35.96} pcbY={11.97} connections={{
        pin2: "net.N4",
        pin1: "net.N17",
      }} />
    <chip name="chip-3" footprint="soic16" pcbX={-27.88} pcbY={-61.29} connections={{
        pin3: "net.N1",
        pin15: "net.N3",
        pin12: "net.N5",
        pin13: "net.N5",
        pin14: "net.N7",
        pin16: "net.N8",
        pin7: "net.N8",
        pin10: "net.N9",
        pin8: "net.N10",
        pin11: "net.N13",
        pin1: "net.N13",
        pin2: "net.N16",
        pin6: "net.N17",
        pin5: "net.N17",
        pin4: "net.N19",
        pin9: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={11.58} pcbY={-42.15} connections={{
        pin2: "net.N5",
        pin1: "net.N20",
      }} capacitance="0.1uF" />
    <inductor name="inductor-5" footprint="0402" pcbX={-18.83} pcbY={-29.29} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-6" footprint="0402" pcbX={6.94} pcbY={-31.18} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-7" footprint="0402" pcbX={-1.51} pcbY={-27.18} connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-31.07} pcbY={-8.44} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
