/** Randomly generated circuit 102. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={-6.00} connections={{
        pin2: "net.N3",
        pin3: "net.N6",
        pin1: "net.N9",
      }} type="npn" />
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={-3.50} pcbY={4.00} connections={{
        pin2: "net.N2",
        pin4: "net.N2",
        pin1: "net.N3",
        pin3: "net.N5",
        pin6: "net.N6",
        pin5: "net.N7",
      }} pinCount={6} pitch="2.54mm" />
    <inductor name="inductor-2" footprint="0603" pcbX={-1.50} pcbY={-3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={5.00} pcbY={-5.00} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinheader4" pcbX={-6.00} pcbY={9.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin3: "net.N7",
        pin4: "net.N8",
      }} pinCount={4} pitch="2.54mm" />
    <diode name="diode-1" footprint="SOD-123" pcbX={5.00} pcbY={10.00} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} />
    <inductor name="inductor-4" footprint="0805" pcbX={10.00} pcbY={1.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={4.00} pcbY={-2.00} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} capacitance="0.1uF" />
  </board>
)
