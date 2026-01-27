/** Randomly generated circuit 162. */
export default () => (
  <board width="66.00mm" height="66.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={27.22} pcbY={20.87} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={16.59} pcbY={4.57} connections={{
        pin3: "net.N2",
        pin8: "net.N5",
        pin5: "net.N6",
        pin6: "net.N11",
        pin2: "net.N11",
        pin4: "net.N12",
        pin7: "net.N15",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={-23.59} pcbY={12.06} connections={{
        pin6: "net.N3",
        pin1: "net.N6",
        pin7: "net.N7",
        pin4: "net.N9",
        pin8: "net.N10",
        pin3: "net.N10",
        pin2: "net.N15",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="dip8" pcbX={-18.03} pcbY={-3.08} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin7: "net.N4",
        pin6: "net.N7",
        pin4: "net.N8",
        pin8: "net.N13",
        pin3: "net.N14",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-20.67} pcbY={32.25} connections={{
        pin3: "net.N1",
        pin1: "net.N11",
        pin2: "net.N12",
      }} type="npn" />
    <chip name="chip-4" footprint="soic8" pcbX={13.64} pcbY={25.71} connections={{
        pin5: "net.N2",
        pin6: "net.N4",
        pin8: "net.N4",
        pin3: "net.N7",
        pin4: "net.N7",
        pin1: "net.N8",
        pin7: "net.N11",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={29.91} pcbY={-32.35} connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={7.33} pcbY={3.71} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={0.32} pcbY={-6.46} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-20.11} pcbY={-14.22} connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-6.45} pcbY={29.86} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N5",
      }} type="npn" />
  </board>
)
