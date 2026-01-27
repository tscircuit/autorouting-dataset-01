/** Randomly generated circuit 170. */
export default () => (
  <board width="64.00mm" height="160.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={17.54} pcbY={71.66} connections={{
        pin15: "net.N2",
        pin6: "net.N4",
        pin9: "net.N8",
        pin5: "net.N10",
        pin7: "net.N12",
        pin3: "net.N15",
        pin16: "net.N15",
        pin12: "net.N19",
        pin10: "net.N21",
        pin4: "net.N21",
        pin1: "net.N22",
        pin8: "net.N27",
        pin14: "net.N33",
        pin2: "net.N35",
        pin13: "net.N36",
        pin11: "net.N37",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic16" pcbX={-19.31} pcbY={62.90} connections={{
        pin14: "net.N3",
        pin6: "net.N4",
        pin5: "net.N5",
        pin10: "net.N6",
        pin12: "net.N7",
        pin8: "net.N9",
        pin7: "net.N10",
        pin16: "net.N16",
        pin15: "net.N17",
        pin11: "net.N26",
        pin13: "net.N29",
        pin1: "net.N32",
        pin3: "net.N33",
        pin4: "net.N34",
        pin9: "net.N36",
        pin2: "net.N37",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={6.16} pcbY={48.82} connections={{
        pin14: "net.N1",
        pin13: "net.N2",
        pin16: "net.N6",
        pin12: "net.N8",
        pin9: "net.N10",
        pin3: "net.N10",
        pin11: "net.N12",
        pin15: "net.N12",
        pin6: "net.N14",
        pin5: "net.N18",
        pin4: "net.N21",
        pin8: "net.N21",
        pin10: "net.N26",
        pin7: "net.N28",
        pin1: "net.N30",
        pin2: "net.N34",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-1.03} pcbY={-53.88} connections={{
        pin1: "net.N30",
        pin2: "net.N32",
      }} inductance="10uH" />
    <chip name="chip-4" footprint="soic16" pcbX={26.26} pcbY={36.15} connections={{
        pin8: "net.N3",
        pin6: "net.N5",
        pin9: "net.N5",
        pin5: "net.N6",
        pin1: "net.N12",
        pin16: "net.N15",
        pin15: "net.N16",
        pin14: "net.N17",
        pin7: "net.N20",
        pin13: "net.N20",
        pin10: "net.N23",
        pin12: "net.N23",
        pin4: "net.N23",
        pin2: "net.N24",
        pin11: "net.N25",
        pin3: "net.N27",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.52} pcbY={25.10} connections={{
        pin1: "net.N13",
        pin2: "net.N31",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-10.68} pcbY={-29.04} connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-23.34} pcbY={42.62} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-11.07} pcbY={-52.50} connections={{
        pin3: "net.N11",
        pin1: "net.N28",
        pin2: "net.N36",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-20.62} pcbY={48.91} connections={{
        pin2: "net.N24",
        pin1: "net.N30",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={17.69} pcbY={-58.62} connections={{
        pin1: "net.N14",
        pin2: "net.N26",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={22.89} pcbY={-65.44} connections={{
        pin1: "net.N16",
        pin2: "net.N17",
      }} inductance="10uH" />
    <chip name="chip-5" footprint="dip8" pcbX={-7.68} pcbY={-14.57} connections={{
        pin1: "net.N2",
        pin6: "net.N7",
        pin7: "net.N9",
        pin3: "net.N11",
        pin2: "net.N18",
        pin4: "net.N22",
        pin5: "net.N24",
        pin8: "net.N31",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={6.48} pcbY={77.56} connections={{
        pin3: "net.N1",
        pin2: "net.N19",
        pin1: "net.N37",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={16.57} pcbY={63.18} connections={{
        pin1: "net.N25",
        pin2: "net.N35",
      }} capacitance="0.1uF" />
    <chip name="chip-6" footprint="soic8" pcbX={7.18} pcbY={-35.40} connections={{
        pin7: "net.N13",
        pin2: "net.N14",
        pin1: "net.N14",
        pin6: "net.N15",
        pin4: "net.N22",
        pin5: "net.N24",
        pin8: "net.N27",
        pin3: "net.N29",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
