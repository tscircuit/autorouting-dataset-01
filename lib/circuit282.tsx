/** Randomly generated circuit 282. */
export default () => (
  <board width="22.00mm" height="38.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-2" footprint="0603" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={1.00} pcbY={6.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={1.00} pcbY={-3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} inductance="10uH" />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={-3.00} pcbY={-7.00} connections={{
        pin4: "net.N1",
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N10",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.00} pcbY={11.00} connections={{
        pin1: "net.N6",
        pin3: "net.N9",
        pin2: "net.N11",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-323" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-4.00} pcbY={0.50} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinheader6" pcbX={-0.50} pcbY={-12.00} connections={{
        pin5: "net.N3",
        pin1: "net.N5",
        pin6: "net.N7",
        pin2: "net.N8",
        pin4: "net.N9",
        pin3: "net.N10",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={7.00} pcbY={-1.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-4" footprint="SOT-223" pcbX={1.00} pcbY={10.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N8",
      }} type="npn" />
  </board>
)
