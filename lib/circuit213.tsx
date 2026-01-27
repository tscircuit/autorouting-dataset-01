/** Randomly generated circuit 213. */
export default () => (
  <board width="110.00mm" height="88.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={13.35} pcbY={32.99} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={47.07} pcbY={29.99} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic16" pcbX={-0.32} pcbY={-36.53} connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin13: "net.N3",
        pin9: "net.N3",
        pin10: "net.N4",
        pin12: "net.N6",
        pin14: "net.N6",
        pin7: "net.N8",
        pin5: "net.N8",
        pin2: "net.N10",
        pin6: "net.N11",
        pin4: "net.N14",
        pin8: "net.N15",
        pin11: "net.N15",
        pin16: "net.N15",
        pin15: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={-12.30} pcbY={28.49} connections={{
        pin3: "net.N1",
        pin6: "net.N8",
        pin7: "net.N8",
        pin1: "net.N9",
        pin5: "net.N9",
        pin8: "net.N11",
        pin2: "net.N12",
        pin4: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.10} pcbY={-1.78} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N13",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={42.71} pcbY={-15.70} connections={{
        pin1: "net.N15",
        pin2: "net.N16",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={9.53} pcbY={-27.69} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} />
    <chip name="chip-3" footprint="pinrow6" pcbX={-33.43} pcbY={16.65} connections={{
        pin2: "net.N2",
        pin3: "net.N5",
        pin5: "net.N9",
        pin6: "net.N10",
        pin1: "net.N14",
        pin4: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={-49.92} pcbY={-27.60} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-40.32} pcbY={26.45} connections={{
        pin3: "net.N1",
        pin1: "net.N10",
        pin2: "net.N16",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={44.02} pcbY={-34.72} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
