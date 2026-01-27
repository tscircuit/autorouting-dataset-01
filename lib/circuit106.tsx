/** Randomly generated circuit 106. */
export default () => (
  <board width="15.00mm" height="24.00mm">
    <capacitor name="capacitor-1" footprint="0805" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-3.00} pcbY={-3.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.00} pcbY={6.00} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.50} pcbY={-3.50} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-2.00} pcbY={-7.50} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} pinCount={2} pitch="2.54mm" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={3.00} pcbY={5.00} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
