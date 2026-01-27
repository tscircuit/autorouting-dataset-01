/** Randomly generated circuit 109. */
export default () => (
  <board width="19.00mm" height="32.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-4.50} pcbY={-7.50} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={-1.50} pcbY={9.00} connections={{
        pin10: "net.N1",
        pin11: "net.N2",
        pin8: "net.N2",
        pin9: "net.N3",
        pin5: "net.N3",
        pin3: "net.N4",
        pin13: "net.N4",
        pin16: "net.N5",
        pin1: "net.N5",
        pin2: "net.N6",
        pin15: "net.N7",
        pin12: "net.N7",
        pin7: "net.N8",
        pin6: "net.N9",
        pin4: "net.N9",
        pin14: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={1.00} pcbY={-5.00} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={3.00} pcbY={-12.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.00} pcbY={-3.00} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-3.00} pcbY={3.00} connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={0.50} pcbY={3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} resistance="1k" />
  </board>
)
