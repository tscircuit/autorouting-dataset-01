/** Randomly generated circuit 138. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-7.50} pcbY={-7.50} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} resistance="1k" />
    <pinheader name="pinhead-1" footprint="pinheader2" pcbX={-4.00} pcbY={4.00} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} pinCount={2} pitch="2.54mm" />
    <inductor name="inductor-1" footprint="0603" pcbX={0.00} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0805" pcbX={4.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={7.50} pcbY={-7.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} inductance="10uH" />
    <pinheader name="pinhead-2" footprint="pinheader6" pcbX={-3.50} pcbY={9.00} connections={{
        pin1: "net.N1",
        pin5: "net.N2",
        pin3: "net.N3",
        pin6: "net.N5",
        pin2: "net.N7",
        pin4: "net.N7",
      }} pinCount={6} pitch="2.54mm" />
  </board>
)
