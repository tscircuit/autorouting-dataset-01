/** Randomly generated circuit 229. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N1",
        pin2: "net.N5",
        pin1: "net.N6",
        pin3: "net.N9",
      }} pinCount={4} pitch="2.54mm" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={-7.00} pcbY={-7.00} connections={{
        pin3: "net.N5",
        pin4: "net.N6",
        pin6: "net.N7",
        pin2: "net.N8",
        pin1: "net.N8",
        pin5: "net.N10",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-12.00} pcbY={1.50} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} resistance="1k" />
    <pinheader name="pinhead-3" footprint="pinheader4" pcbX={4.00} pcbY={5.00} connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N7",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-323" pcbX={12.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} />
    <diode name="diode-3" footprint="SOD-323" pcbX={3.50} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-7.00} pcbY={7.00} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0805" pcbX={11.00} pcbY={-2.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-6" footprint="SOD-323" pcbX={-13.00} pcbY={7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} />
  </board>
)
