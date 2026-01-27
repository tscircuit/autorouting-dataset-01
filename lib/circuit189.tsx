/** Randomly generated circuit 189. */
export default () => (
  <board width="160.00mm" height="64.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-29.68} pcbY={-16.97} connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={53.74} pcbY={29.47} connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-58.22} pcbY={-29.91} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N13",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={20.32} pcbY={25.91} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N12",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-52.01} pcbY={-10.28} connections={{
        pin1: "net.N2",
        pin2: "net.N18",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={-59.12} pcbY={26.03} connections={{
        pin1: "net.N13",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={57.73} pcbY={7.62} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={-14.26} pcbY={8.96} connections={{
        pin6: "net.N6",
        pin8: "net.N9",
        pin4: "net.N10",
        pin1: "net.N11",
        pin5: "net.N11",
        pin3: "net.N14",
        pin7: "net.N15",
        pin2: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="pinrow6" pcbX={58.64} pcbY={-26.21} connections={{
        pin2: "net.N1",
        pin6: "net.N9",
        pin5: "net.N9",
        pin4: "net.N13",
        pin1: "net.N16",
        pin3: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-19.11} pcbY={-0.68} connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={25.05} pcbY={-6.40} connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="soic8" pcbX={-60.49} pcbY={-14.74} connections={{
        pin7: "net.N3",
        pin6: "net.N5",
        pin2: "net.N7",
        pin5: "net.N7",
        pin4: "net.N8",
        pin1: "net.N8",
        pin8: "net.N12",
        pin3: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-34.83} pcbY={-6.49} connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={74.07} pcbY={-23.43} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={22.91} pcbY={-15.94} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={-21.03} pcbY={-30.66} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} inductance="10uH" />
  </board>
)
