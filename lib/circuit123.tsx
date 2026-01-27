/** Randomly generated circuit 123. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.00} pcbY={6.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={2.00} pcbY={6.00} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.00} pcbY={-3.50} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0805" pcbX={-4.50} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-323" pcbX={4.00} pcbY={-0.50} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-5" footprint="0805" pcbX={-4.00} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={2.50} pcbY={-8.00} connections={{
        pin1: "net.N1",
        pin8: "net.N4",
        pin6: "net.N5",
        pin2: "net.N6",
        pin5: "net.N7",
        pin7: "net.N8",
        pin4: "net.N9",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
