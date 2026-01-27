/** Randomly generated circuit 263. */
export default () => (
  <board width="120.00mm" height="150.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-30.01} pcbY={-1.37} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={2.77} pcbY={36.12} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-48.21} pcbY={46.69} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-17.73} pcbY={45.88} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={20.43} pcbY={-39.80} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-39.97} pcbY={33.26} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={56.55} pcbY={41.27} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={25.80} pcbY={36.68} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={21.22} pcbY={14.22} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-5" footprint="0603" pcbX={27.40} pcbY={-55.45} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={44.31} pcbY={-53.17} connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={42.52} pcbY={39.20} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-5.42} pcbY={-17.60} connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="dip8" pcbX={28.95} pcbY={-36.14} connections={{
        pin2: "net.N1",
        pin4: "net.N5",
        pin5: "net.N6",
        pin3: "net.N6",
        pin8: "net.N8",
        pin1: "net.N9",
        pin6: "net.N9",
        pin7: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={6.60} pcbY={-14.00} connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} />
  </board>
)
