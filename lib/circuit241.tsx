/** Randomly generated circuit 241. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={4.00} pcbY={-6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={-1.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-8.00} pcbY={8.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-5.00} pcbY={-7.50} connections={{
        pin4: "net.N1",
        pin5: "net.N1",
        pin2: "net.N2",
        pin1: "net.N3",
        pin6: "net.N4",
        pin3: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="0603" pcbX={-9.00} pcbY={2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0603" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
