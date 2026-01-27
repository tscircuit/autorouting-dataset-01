/** Randomly generated circuit 143. */
export default () => (
  <board width="64.00mm" height="160.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={3.99} pcbY={53.33} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-27.72} pcbY={1.01} connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-15.08} pcbY={-33.50} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={25.08} pcbY={2.33} connections={{
        pin6: "net.N2",
        pin1: "net.N4",
        pin4: "net.N6",
        pin2: "net.N6",
        pin5: "net.N10",
        pin3: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="pinrow6" pcbX={25.20} pcbY={-9.95} connections={{
        pin4: "net.N1",
        pin6: "net.N2",
        pin2: "net.N6",
        pin1: "net.N7",
        pin5: "net.N9",
        pin3: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={13.49} pcbY={33.61} connections={{
        pin1: "net.N7",
        pin3: "net.N8",
        pin2: "net.N12",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.31} pcbY={63.69} connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={21.82} pcbY={-76.52} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={25.60} pcbY={70.82} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={5.30} pcbY={-39.33} connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={5.86} pcbY={-76.03} connections={{
        pin5: "net.N2",
        pin1: "net.N4",
        pin7: "net.N8",
        pin2: "net.N8",
        pin6: "net.N11",
        pin3: "net.N12",
        pin4: "net.N14",
        pin8: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-5" footprint="SOD-123" pcbX={9.77} pcbY={-25.97} connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={23.37} pcbY={-46.84} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={-15.85} pcbY={30.04} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-16.04} pcbY={37.60} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-6" footprint="SOD-123" pcbX={16.90} pcbY={18.72} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} />
  </board>
)
