/** Randomly generated circuit 292. */
export default () => (
  <board width="28.00mm" height="70.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-12.22} pcbY={-20.33} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={-1.18} pcbY={-29.39} connections={{
        pin8: "net.N1",
        pin10: "net.N2",
        pin4: "net.N2",
        pin11: "net.N2",
        pin5: "net.N3",
        pin14: "net.N3",
        pin15: "net.N4",
        pin2: "net.N4",
        pin7: "net.N5",
        pin16: "net.N5",
        pin9: "net.N8",
        pin3: "net.N9",
        pin12: "net.N9",
        pin13: "net.N11",
        pin1: "net.N11",
        pin6: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-9.04} pcbY={3.16} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N9",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-10.48} pcbY={31.07} connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.45} pcbY={-6.53} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-3.82} pcbY={19.34} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
        pin3: "net.N13",
      }} type="npn" />
    <chip name="chip-2" footprint="soic16" pcbX={4.40} pcbY={31.30} connections={{
        pin1: "net.N2",
        pin4: "net.N3",
        pin16: "net.N4",
        pin3: "net.N6",
        pin9: "net.N7",
        pin15: "net.N8",
        pin13: "net.N8",
        pin14: "net.N9",
        pin7: "net.N10",
        pin5: "net.N10",
        pin10: "net.N10",
        pin6: "net.N11",
        pin2: "net.N12",
        pin8: "net.N12",
        pin11: "net.N13",
        pin12: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
