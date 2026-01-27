/** Randomly generated circuit 247. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <transistor name="transistor-1" footprint="SOT-223" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-7.00} pcbY={-7.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.00} pcbY={7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} />
    <chip name="chip-3" footprint="pinrow6" pcbX={1.50} pcbY={-5.50} connections={{
        pin5: "net.N4",
        pin4: "net.N5",
        pin3: "net.N5",
        pin2: "net.N5",
        pin1: "net.N6",
        pin6: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-1.50} pcbY={4.50} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={5.00} pcbY={7.00} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-6.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
  </board>
)
