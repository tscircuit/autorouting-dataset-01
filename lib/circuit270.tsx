/** Randomly generated circuit 270. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={0.00} pcbY={0.00} connections={{
        pin6: "net.N1",
        pin3: "net.N5",
        pin2: "net.N5",
        pin12: "net.N6",
        pin14: "net.N12",
        pin16: "net.N13",
        pin15: "net.N13",
        pin8: "net.N13",
        pin4: "net.N14",
        pin13: "net.N15",
        pin7: "net.N16",
        pin11: "net.N17",
        pin9: "net.N17",
        pin10: "net.N18",
        pin5: "net.N18",
        pin1: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={-5.00} pcbY={10.00} connections={{
        pin1: "net.N6",
        pin6: "net.N8",
        pin3: "net.N8",
        pin8: "net.N10",
        pin2: "net.N11",
        pin4: "net.N12",
        pin5: "net.N16",
        pin7: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={0.00} pcbY={-5.00} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={4.00} pcbY={7.00} connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} resistance="1k" />
    <chip name="chip-3" footprint="soic16" pcbX={-4.00} pcbY={-10.00} connections={{
        pin7: "net.N2",
        pin3: "net.N2",
        pin16: "net.N3",
        pin6: "net.N3",
        pin2: "net.N3",
        pin8: "net.N6",
        pin15: "net.N7",
        pin12: "net.N8",
        pin11: "net.N11",
        pin4: "net.N11",
        pin13: "net.N12",
        pin5: "net.N14",
        pin9: "net.N14",
        pin1: "net.N15",
        pin10: "net.N16",
        pin14: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.00} pcbY={15.00} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={7.00} pcbY={-7.00} connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={7.50} pcbY={4.50} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={6.00} pcbY={-12.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-6" footprint="SOD-123" pcbX={2.50} pcbY={10.50} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={7.50} pcbY={7.50} connections={{
        pin1: "net.N5",
        pin2: "net.N17",
      }} inductance="10uH" />
  </board>
)
