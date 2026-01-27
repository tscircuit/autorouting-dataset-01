/** Randomly generated circuit 233. */
export default () => (
  <board width="40.00mm" height="160.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-3.02} pcbY={-44.25} connections={{
        pin8: "net.N2",
        pin5: "net.N6",
        pin3: "net.N7",
        pin1: "net.N12",
        pin6: "net.N13",
        pin4: "net.N21",
        pin2: "net.N22",
        pin7: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={7.10} pcbY={-74.35} connections={{
        pin8: "net.N4",
        pin1: "net.N5",
        pin4: "net.N6",
        pin5: "net.N13",
        pin7: "net.N21",
        pin6: "net.N23",
        pin2: "net.N23",
        pin3: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="dip8" pcbX={9.51} pcbY={73.59} connections={{
        pin8: "net.N2",
        pin6: "net.N4",
        pin3: "net.N4",
        pin2: "net.N14",
        pin7: "net.N15",
        pin1: "net.N15",
        pin5: "net.N19",
        pin4: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={18.47} pcbY={11.16} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
        pin3: "net.N20",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-15.05} pcbY={17.80} connections={{
        pin1: "net.N10",
        pin2: "net.N20",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.70} pcbY={-66.17} connections={{
        pin1: "net.N3",
        pin2: "net.N18",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.00} pcbY={55.13} connections={{
        pin2: "net.N12",
        pin1: "net.N24",
        pin3: "net.N24",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={0.94} pcbY={69.09} connections={{
        pin2: "net.N14",
        pin1: "net.N18",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-2.00} pcbY={-8.60} connections={{
        pin1: "net.N16",
        pin2: "net.N22",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-14.76} pcbY={-20.16} connections={{
        pin2: "net.N5",
        pin1: "net.N16",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-14.23} pcbY={48.10} connections={{
        pin1: "net.N1",
        pin3: "net.N8",
        pin2: "net.N17",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-4.78} pcbY={8.81} connections={{
        pin1: "net.N7",
        pin2: "net.N22",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-9.01} pcbY={-48.05} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={10.47} pcbY={62.50} connections={{
        pin2: "net.N17",
        pin1: "net.N18",
      }} />
    <chip name="chip-4" footprint="soic8" pcbX={10.98} pcbY={44.83} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
        pin6: "net.N16",
        pin5: "net.N19",
        pin7: "net.N20",
        pin3: "net.N23",
        pin4: "net.N23",
        pin8: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={-17.54} pcbY={75.17} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0402" pcbX={-17.89} pcbY={-64.67} connections={{
        pin1: "net.N24",
        pin2: "net.N25",
      }} resistance="1k" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-18.47} pcbY={65.45} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
        pin3: "net.N14",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={12.16} pcbY={-6.70} connections={{
        pin2: "net.N15",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={18.70} pcbY={-39.96} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
  </board>
)
