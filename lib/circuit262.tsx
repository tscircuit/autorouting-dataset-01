/** Randomly generated circuit 262. */
export default () => (
  <board width="76.00mm" height="114.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={-36.28} pcbY={41.16} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={5.30} pcbY={18.09} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={33.02} pcbY={32.23} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={5.52} pcbY={32.78} connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-9.10} pcbY={-28.70} connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={23.44} pcbY={-46.77} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-5.84} pcbY={37.93} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={27.82} pcbY={56.13} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
        pin3: "net.N15",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.59} pcbY={-32.40} connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-28.98} pcbY={6.58} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={36.38} pcbY={-48.82} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={5.34} pcbY={29.86} connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={11.07} pcbY={-10.30} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={9.41} pcbY={25.00} connections={{
        pin6: "net.N2",
        pin2: "net.N6",
        pin3: "net.N8",
        pin4: "net.N9",
        pin5: "net.N13",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={8.23} pcbY={54.73} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} resistance="1k" />
    <diode name="diode-5" footprint="SOD-123" pcbX={-27.58} pcbY={-23.70} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <inductor name="inductor-3" footprint="0603" pcbX={-37.20} pcbY={-1.97} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-0.03} pcbY={-11.53} connections={{
        pin5: "net.N2",
        pin2: "net.N4",
        pin6: "net.N5",
        pin3: "net.N11",
        pin4: "net.N12",
        pin1: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-4" footprint="0603" pcbX={29.36} pcbY={4.28} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
  </board>
)
