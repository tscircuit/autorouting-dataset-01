/** Randomly generated circuit 223. */
export default () => (
  <board width="68.00mm" height="68.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={11.34} pcbY={-13.04} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N12",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.84} pcbY={-8.09} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-29.85} pcbY={-1.58} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-29.01} pcbY={-29.53} connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={6.00} pcbY={-12.07} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-5.00} pcbY={10.17} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.14} pcbY={-30.56} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-11.02} pcbY={25.78} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={13.72} pcbY={32.22} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-16.06} pcbY={-17.30} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} />
    <resistor name="resistor-3" footprint="0402" pcbX={-20.61} pcbY={19.26} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-32.46} pcbY={28.58} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-15.70} pcbY={2.10} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.27} pcbY={-0.81} connections={{
        pin3: "net.N8",
        pin2: "net.N10",
        pin1: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={32.90} pcbY={6.88} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={12.64} pcbY={-2.48} connections={{
        pin1: "net.N2",
        pin7: "net.N2",
        pin3: "net.N3",
        pin4: "net.N4",
        pin6: "net.N5",
        pin2: "net.N9",
        pin5: "net.N9",
        pin8: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-6" footprint="0402" pcbX={24.73} pcbY={24.73} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
