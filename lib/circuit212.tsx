/** Randomly generated circuit 212. */
export default () => (
  <board width="78.00mm" height="52.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={-29.80} pcbY={6.50} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-38.05} pcbY={-14.91} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={30.43} pcbY={-14.32} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={34.43} pcbY={9.99} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.47} pcbY={22.95} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-13.35} pcbY={-0.21} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={6.21} pcbY={-1.10} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={-10.83} pcbY={11.64} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-4" footprint="SOD-123" pcbX={31.05} pcbY={20.54} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-32.43} pcbY={18.75} connections={{
        pin4: "net.N1",
        pin1: "net.N3",
        pin3: "net.N3",
        pin5: "net.N5",
        pin6: "net.N6",
        pin7: "net.N6",
        pin8: "net.N9",
        pin2: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={2.15} pcbY={-8.52} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={8.84} pcbY={-18.99} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-5" footprint="SOD-123" pcbX={-4.39} pcbY={0.63} connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }} />
  </board>
)
