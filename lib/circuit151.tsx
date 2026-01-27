/** Randomly generated circuit 151. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-5.00} pcbY={-5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-0.50} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={5.00} pcbY={6.00} connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin4: "net.N4",
        pin1: "net.N5",
        pin2: "net.N7",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0805" pcbX={6.00} pcbY={-1.00} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-9.00} pcbY={0.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-1.00} pcbY={-6.50} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-2" footprint="pinheader2" pcbX={-10.50} pcbY={-6.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-11.00} pcbY={5.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
  </board>
)
