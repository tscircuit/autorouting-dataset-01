/** Randomly generated circuit 246. */
export default () => (
  <board width="128.00mm" height="128.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={-13.47} pcbY={26.00} connections={{
        pin2: "net.N13",
        pin1: "net.N23",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-52.93} pcbY={16.36} connections={{
        pin1: "net.N19",
        pin2: "net.N22",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={32.02} pcbY={-42.42} connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-31.27} pcbY={34.81} connections={{
        pin5: "net.N1",
        pin6: "net.N2",
        pin8: "net.N3",
        pin3: "net.N5",
        pin11: "net.N7",
        pin14: "net.N8",
        pin2: "net.N8",
        pin1: "net.N9",
        pin12: "net.N11",
        pin10: "net.N17",
        pin13: "net.N18",
        pin7: "net.N20",
        pin16: "net.N20",
        pin4: "net.N21",
        pin15: "net.N24",
        pin9: "net.N26",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic16" pcbX={-23.95} pcbY={-21.52} connections={{
        pin13: "net.N3",
        pin4: "net.N5",
        pin8: "net.N6",
        pin15: "net.N6",
        pin7: "net.N7",
        pin2: "net.N9",
        pin14: "net.N11",
        pin12: "net.N12",
        pin1: "net.N12",
        pin9: "net.N15",
        pin6: "net.N19",
        pin11: "net.N21",
        pin5: "net.N22",
        pin10: "net.N23",
        pin3: "net.N24",
        pin16: "net.N26",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="pinrow6" pcbX={-24.07} pcbY={-53.83} connections={{
        pin4: "net.N2",
        pin1: "net.N3",
        pin3: "net.N11",
        pin5: "net.N14",
        pin2: "net.N18",
        pin6: "net.N22",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-42.40} pcbY={-46.56} connections={{
        pin2: "net.N13",
        pin1: "net.N26",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={42.66} pcbY={52.98} connections={{
        pin2: "net.N10",
        pin1: "net.N18",
        pin3: "net.N20",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-53.80} pcbY={-63.35} connections={{
        pin1: "net.N1",
        pin2: "net.N21",
      }} capacitance="0.1uF" />
    <inductor name="inductor-4" footprint="0402" pcbX={-30.53} pcbY={10.67} connections={{
        pin1: "net.N13",
        pin2: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-14.88} pcbY={-41.69} connections={{
        pin2: "net.N10",
        pin1: "net.N25",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-47.67} pcbY={-1.26} connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="0603" pcbX={48.15} pcbY={-32.48} connections={{
        pin2: "net.N17",
        pin1: "net.N20",
      }} inductance="10uH" />
    <chip name="chip-4" footprint="dip8" pcbX={-59.85} pcbY={-34.35} connections={{
        pin7: "net.N4",
        pin8: "net.N5",
        pin6: "net.N5",
        pin1: "net.N10",
        pin3: "net.N16",
        pin5: "net.N18",
        pin4: "net.N23",
        pin2: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={0.41} pcbY={-59.05} connections={{
        pin2: "net.N10",
        pin1: "net.N22",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={41.55} pcbY={-9.04} connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
  </board>
)
