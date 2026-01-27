/** Randomly generated circuit 286. */
export default () => (
  <board width="22.00mm" height="38.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={-4.50} pcbY={-9.00} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N7",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow8" pcbX={-1.50} pcbY={9.00} connections={{
        pin7: "net.N1",
        pin4: "net.N2",
        pin1: "net.N3",
        pin5: "net.N4",
        pin3: "net.N4",
        pin2: "net.N5",
        pin8: "net.N6",
        pin6: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.50} pcbY={-3.50} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} />
    <inductor name="inductor-1" footprint="0805" pcbX={6.00} pcbY={-7.50} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={6.00} pcbY={-15.00} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.00} pcbY={2.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-2.00} pcbY={3.50} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} />
  </board>
)
