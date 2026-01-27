/** Randomly generated circuit 229. */
export default () => (
  <board width="78.00mm" height="52.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={1.27} pcbY={-13.04} connections={{
        pin3: "net.N1",
        pin6: "net.N4",
        pin4: "net.N7",
        pin2: "net.N8",
        pin5: "net.N9",
        pin1: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-37.40} pcbY={5.28} connections={{
        pin3: "net.N3",
        pin1: "net.N5",
        pin2: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-25.60} pcbY={7.67} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.89} pcbY={4.22} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={24.72} pcbY={-3.83} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-38.20} pcbY={11.73} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={7.78} pcbY={-24.88} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N3",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-30.54} pcbY={-24.31} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-33.58} pcbY={-15.47} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={25.73} pcbY={-23.27} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={30.51} pcbY={15.01} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-17.85} pcbY={-21.47} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-20.29} pcbY={20.50} connections={{
        pin1: "net.N1",
        pin3: "net.N6",
        pin2: "net.N11",
      }} type="npn" />
  </board>
)
