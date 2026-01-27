/** Randomly generated circuit 109. */
export default () => (
  <board width="19.00mm" height="32.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={-4.50} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow8" pcbX={0.00} pcbY={9.00} connections={{
        pin6: "net.N1",
        pin4: "net.N3",
        pin1: "net.N3",
        pin8: "net.N4",
        pin7: "net.N4",
        pin5: "net.N4",
        pin3: "net.N6",
        pin2: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={2.00} pcbY={-5.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={4.50} pcbY={-12.00} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={1.00} pcbY={3.00} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
