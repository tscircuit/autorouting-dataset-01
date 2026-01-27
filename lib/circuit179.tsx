/** Randomly generated circuit 179. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={0.00} pcbY={0.00} connections={{
        pin5: "net.N2",
        pin2: "net.N2",
        pin3: "net.N3",
        pin4: "net.N4",
        pin1: "net.N4",
        pin6: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={-4.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-0.50} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-0.50} pcbY={4.00} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
  </board>
)
