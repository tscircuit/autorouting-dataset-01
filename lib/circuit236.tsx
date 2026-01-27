/** Randomly generated circuit 236. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={-1.00} pcbY={-4.50} connections={{
        pin6: "net.N1",
        pin14: "net.N2",
        pin4: "net.N3",
        pin7: "net.N5",
        pin2: "net.N5",
        pin9: "net.N6",
        pin12: "net.N6",
        pin16: "net.N7",
        pin11: "net.N7",
        pin8: "net.N9",
        pin13: "net.N9",
        pin10: "net.N10",
        pin1: "net.N11",
        pin15: "net.N11",
        pin5: "net.N11",
        pin3: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.00} pcbY={5.00} connections={{
        pin1: "net.N4",
        pin2: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.00} pcbY={5.00} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-3.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.50} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={5.00} pcbY={3.00} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-5.00} pcbY={8.00} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-0.50} pcbY={8.50} connections={{
        pin2: "net.N1",
        pin3: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-5.00} pcbY={-11.00} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
