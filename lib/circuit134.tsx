/** Randomly generated circuit 134. */
export default () => (
  <board width="32.00mm" height="32.00mm">
    <chip name="chip-1" footprint="pinrow8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin6: "net.N5",
        pin7: "net.N6",
        pin3: "net.N8",
        pin8: "net.N10",
        pin5: "net.N12",
        pin4: "net.N12",
        pin2: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }} />
    <pinheader name="pinhead-1" footprint="pinheader4" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
        pin4: "net.N9",
        pin3: "net.N12",
      }} pinCount={4} pitch="2.54mm" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={-5.00} pcbY={5.00} connections={{
        pin4: "net.N2",
        pin5: "net.N5",
        pin6: "net.N8",
        pin2: "net.N11",
        pin3: "net.N13",
        pin1: "net.N14",
      }} pinCount={6} pitch="2.54mm" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.50} pcbY={-4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} />
    <diode name="diode-3" footprint="SOD-323" pcbX={8.00} pcbY={6.00} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-1" footprint="0805" pcbX={6.00} pcbY={-10.00} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-3" footprint="pinheader2" pcbX={9.50} pcbY={-6.00} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-2" footprint="pinrow8" pcbX={-6.50} pcbY={10.00} connections={{
        pin1: "net.N1",
        pin6: "net.N1",
        pin3: "net.N2",
        pin4: "net.N2",
        pin5: "net.N4",
        pin8: "net.N4",
        pin7: "net.N6",
        pin2: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-2.00} pcbY={-11.00} connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={3.00} pcbY={-7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
