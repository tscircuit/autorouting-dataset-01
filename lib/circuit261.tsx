/** Randomly generated circuit 261. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin4: "net.N1",
        pin3: "net.N2",
        pin2: "net.N5",
        pin6: "net.N6",
        pin5: "net.N7",
        pin1: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-323" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <chip name="chip-5" footprint="pinrow6" pcbX={-3.50} pcbY={5.00} connections={{
        pin4: "net.N1",
        pin3: "net.N3",
        pin2: "net.N4",
        pin5: "net.N4",
        pin6: "net.N6",
        pin1: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-2.00} pcbY={-4.00} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={4.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={5.00} pcbY={4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} />
  </board>
)
