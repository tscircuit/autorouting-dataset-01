/** Randomly generated circuit 274. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N1",
        pin6: "net.N2",
        pin2: "net.N2",
        pin4: "net.N5",
        pin5: "net.N5",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.00} pcbY={6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0805" pcbX={0.00} pcbY={6.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0805" pcbX={2.00} pcbY={-6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.00} pcbY={6.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0402" pcbX={6.00} pcbY={-6.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0402" pcbX={-7.00} pcbY={-7.00} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
