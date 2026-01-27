/** Randomly generated circuit 113. */
export default () => (
  <board width="88.00mm" height="110.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={33.02} pcbY={-32.05} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-31.04} pcbY={-26.60} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={30.61} pcbY={15.85} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={27.30} pcbY={5.80} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} />
    <resistor name="resistor-3" footprint="0603" pcbX={-0.85} pcbY={-37.78} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-26.86} pcbY={-34.08} connections={{
        pin8: "net.N1",
        pin3: "net.N1",
        pin5: "net.N3",
        pin4: "net.N5",
        pin6: "net.N6",
        pin1: "net.N6",
        pin7: "net.N7",
        pin2: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="0603" pcbX={-33.74} pcbY={-51.54} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-21.85} pcbY={17.07} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={16.47} pcbY={-35.26} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-36.50} pcbY={-24.81} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.29} pcbY={-1.08} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} />
  </board>
)
