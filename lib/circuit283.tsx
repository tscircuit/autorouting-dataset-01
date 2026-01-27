/** Randomly generated circuit 283. */
export default () => (
  <board width="120.00mm" height="96.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={1.99} pcbY={7.69} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={50.38} pcbY={-19.44} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={35.86} pcbY={9.82} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.38} pcbY={23.93} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={1.03} pcbY={-10.78} connections={{
        pin3: "net.N4",
        pin4: "net.N4",
        pin2: "net.N7",
        pin1: "net.N8",
        pin5: "net.N11",
        pin6: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-30.24} pcbY={-20.84} connections={{
        pin2: "net.N1",
        pin3: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-24.29} pcbY={9.93} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-20.48} pcbY={27.36} connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-46.46} pcbY={-0.75} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
        pin3: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={28.10} pcbY={-14.45} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={24.21} pcbY={-26.67} connections={{
        pin6: "net.N2",
        pin5: "net.N3",
        pin7: "net.N4",
        pin3: "net.N5",
        pin1: "net.N7",
        pin4: "net.N8",
        pin2: "net.N10",
        pin8: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={2.04} pcbY={32.65} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} resistance="1k" />
  </board>
)
