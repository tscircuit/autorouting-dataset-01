/** Randomly generated circuit 189. */
export default () => (
  <board width="30.00mm" height="18.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.00} pcbY={-5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={7.50} pcbY={-2.00} connections={{
        pin6: "net.N1",
        pin2: "net.N1",
        pin4: "net.N2",
        pin1: "net.N4",
        pin8: "net.N5",
        pin5: "net.N5",
        pin7: "net.N6",
        pin3: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.00} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin3: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-1.50} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={2.50} pcbY={4.50} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={6.50} pcbY={4.50} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
