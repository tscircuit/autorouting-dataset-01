/** Randomly generated circuit 197. */
export default () => (
  <board width="110.00mm" height="66.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-53.39} pcbY={27.92} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-31.69} pcbY={-25.90} connections={{
        pin3: "net.N8",
        pin1: "net.N11",
        pin2: "net.N14",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-25.23} pcbY={-19.80} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={27.73} pcbY={0.23} connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={47.40} pcbY={7.46} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={38.13} pcbY={-3.93} connections={{
        pin8: "net.N1",
        pin7: "net.N1",
        pin2: "net.N3",
        pin1: "net.N4",
        pin4: "net.N6",
        pin6: "net.N7",
        pin5: "net.N12",
        pin3: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={11.09} pcbY={-12.26} connections={{
        pin3: "net.N5",
        pin2: "net.N10",
        pin1: "net.N14",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={40.37} pcbY={26.68} connections={{
        pin2: "net.N1",
        pin3: "net.N12",
        pin1: "net.N14",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-16.71} pcbY={1.65} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={-15.43} pcbY={-17.68} connections={{
        pin8: "net.N2",
        pin2: "net.N3",
        pin4: "net.N4",
        pin3: "net.N7",
        pin6: "net.N8",
        pin5: "net.N9",
        pin1: "net.N10",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={48.54} pcbY={-22.06} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
