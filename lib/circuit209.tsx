/** Randomly generated circuit 209. */
export default () => (
  <board width="25.00mm" height="44.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-7.50} pcbY={-7.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={-4.50} pcbY={9.00} connections={{
        pin11: "net.N2",
        pin2: "net.N4",
        pin10: "net.N5",
        pin4: "net.N7",
        pin7: "net.N7",
        pin12: "net.N8",
        pin13: "net.N12",
        pin14: "net.N13",
        pin1: "net.N14",
        pin6: "net.N15",
        pin5: "net.N15",
        pin8: "net.N16",
        pin16: "net.N16",
        pin15: "net.N17",
        pin9: "net.N18",
        pin3: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={4.50} pcbY={-10.50} connections={{
        pin2: "net.N5",
        pin4: "net.N8",
        pin7: "net.N8",
        pin1: "net.N11",
        pin6: "net.N11",
        pin3: "net.N12",
        pin8: "net.N13",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.00} pcbY={-2.00} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={7.50} pcbY={0.00} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.00} pcbY={3.00} connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} />
    <capacitor name="capacitor-4" footprint="0402" pcbX={6.00} pcbY={5.00} connections={{
        pin2: "net.N3",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.50} pcbY={-15.00} connections={{
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N12",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.00} pcbY={10.00} connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={5.50} pcbY={15.00} connections={{
        pin5: "net.N2",
        pin6: "net.N7",
        pin3: "net.N7",
        pin1: "net.N9",
        pin2: "net.N9",
        pin4: "net.N10",
        pin8: "net.N13",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-2.50} pcbY={-3.00} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-8.00} pcbY={16.00} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={1.50} pcbY={-3.00} connections={{
        pin1: "net.N5",
        pin2: "net.N18",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={1.00} pcbY={3.00} connections={{
        pin1: "net.N11",
        pin2: "net.N18",
      }} inductance="10uH" />
  </board>
)
