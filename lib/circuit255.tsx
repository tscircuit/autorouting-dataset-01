/** Randomly generated circuit 255. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-7.50} pcbY={3.00} connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0805" pcbX={-1.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={0.50} pcbY={-4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-2" footprint="pinheader4" pcbX={10.00} pcbY={3.00} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
        pin4: "net.N14",
        pin3: "net.N16",
      }} pinCount={4} pitch="2.54mm" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-8.00} pcbY={8.00} connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinheader6" pcbX={-7.00} pcbY={-11.00} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin6: "net.N6",
        pin1: "net.N6",
        pin5: "net.N6",
        pin4: "net.N10",
      }} pinCount={6} pitch="2.54mm" />
    <resistor name="resistor-3" footprint="0402" pcbX={10.50} pcbY={-10.50} connections={{
        pin2: "net.N16",
        pin1: "net.N16",
      }} resistance="1k" />
    <pinheader name="pinhead-4" footprint="pinheader6" pcbX={3.00} pcbY={10.00} connections={{
        pin3: "net.N3",
        pin2: "net.N3",
        pin4: "net.N5",
        pin5: "net.N8",
        pin6: "net.N13",
        pin1: "net.N15",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={8.00} pcbY={-5.00} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-11.00} pcbY={-5.00} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0603" pcbX={-13.00} pcbY={0.00} connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0805" pcbX={-4.00} pcbY={0.00} connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-13.00} pcbY={14.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-5" footprint="0603" pcbX={6.00} pcbY={-2.00} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={4.00} pcbY={-8.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-8.50} pcbY={-1.50} connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} />
    <diode name="diode-4" footprint="SOD-323" pcbX={-14.00} pcbY={5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }} />
    <resistor name="resistor-6" footprint="0805" pcbX={10.00} pcbY={-2.00} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} resistance="1k" />
  </board>
)
