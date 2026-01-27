/** Randomly generated circuit 138. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-4.00} pcbY={4.00} connections={{
        pin6: "net.N1",
        pin2: "net.N1",
        pin5: "net.N2",
        pin1: "net.N4",
        pin4: "net.N5",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={0.00} pcbY={-7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-6.00} pcbY={-2.00} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={7.50} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={7.00} pcbY={-1.00} connections={{
        pin1: "net.N2",
        pin8: "net.N2",
        pin5: "net.N5",
        pin4: "net.N6",
        pin6: "net.N6",
        pin3: "net.N8",
        pin2: "net.N9",
        pin7: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.50} pcbY={-3.50} connections={{
        pin3: "net.N4",
        pin1: "net.N5",
        pin2: "net.N10",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={9.00} pcbY={10.50} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
  </board>
)
