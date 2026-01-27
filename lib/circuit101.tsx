/** Randomly generated circuit 101. */
export default () => (
  <board width="84.00mm" height="112.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={10.89} pcbY={0.47} connections={{
        pin2: "net.N3",
        pin3: "net.N5",
        pin1: "net.N18",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={24.90} pcbY={-54.67} connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={3.11} pcbY={-4.61} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={34.55} pcbY={-10.82} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin7: "net.N6",
        pin6: "net.N9",
        pin2: "net.N14",
        pin5: "net.N14",
        pin8: "net.N15",
        pin4: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-5.15} pcbY={19.77} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-22.30} pcbY={-47.55} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
        pin3: "net.N16",
      }} type="npn" />
    <chip name="chip-2" footprint="dip8" pcbX={-25.69} pcbY={12.96} connections={{
        pin8: "net.N2",
        pin2: "net.N3",
        pin4: "net.N5",
        pin7: "net.N7",
        pin1: "net.N13",
        pin6: "net.N16",
        pin3: "net.N16",
        pin5: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-12.52} pcbY={-49.73} connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-16.44} pcbY={40.79} connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }} />
    <chip name="chip-3" footprint="dip8" pcbX={-36.53} pcbY={-21.62} connections={{
        pin5: "net.N6",
        pin6: "net.N6",
        pin8: "net.N7",
        pin4: "net.N10",
        pin1: "net.N11",
        pin3: "net.N13",
        pin2: "net.N13",
        pin7: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-3.54} pcbY={-41.38} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={26.91} pcbY={46.18} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-36.00} pcbY={2.08} connections={{
        pin2: "net.N2",
        pin1: "net.N18",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={15.89} pcbY={-12.83} connections={{
        pin1: "net.N8",
        pin2: "net.N16",
      }} resistance="1k" />
  </board>
)
