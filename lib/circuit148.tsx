/** Randomly generated circuit 148. */
export default () => (
  <board width="80.00mm" height="80.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={33.25} pcbY={-22.16} connections={{
        pin6: "net.N4",
        pin3: "net.N6",
        pin1: "net.N8",
        pin2: "net.N9",
        pin4: "net.N9",
        pin5: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-27.65} pcbY={27.94} connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-11.45} pcbY={-19.56} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={35.85} pcbY={12.56} connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N8",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-22.03} pcbY={-36.22} connections={{
        pin1: "net.N2",
        pin6: "net.N4",
        pin3: "net.N5",
        pin5: "net.N6",
        pin2: "net.N6",
        pin4: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={0.50} pcbY={-32.26} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={17.45} pcbY={-1.11} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-16.04} pcbY={15.92} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
