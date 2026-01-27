/** Randomly generated circuit 195. */
export default () => (
  <board width="14.00mm" height="56.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-0.75} pcbY={15.69} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-4.17} pcbY={-3.41} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin7: "net.N7",
        pin3: "net.N8",
        pin4: "net.N9",
        pin8: "net.N12",
        pin6: "net.N12",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={4.15} pcbY={-14.52} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic16" pcbX={-1.73} pcbY={25.57} connections={{
        pin6: "net.N1",
        pin14: "net.N2",
        pin15: "net.N2",
        pin3: "net.N3",
        pin10: "net.N5",
        pin4: "net.N6",
        pin12: "net.N7",
        pin16: "net.N8",
        pin11: "net.N9",
        pin5: "net.N9",
        pin8: "net.N10",
        pin7: "net.N11",
        pin1: "net.N11",
        pin9: "net.N15",
        pin2: "net.N15",
        pin13: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={-0.55} pcbY={-22.86} connections={{
        pin10: "net.N1",
        pin6: "net.N2",
        pin14: "net.N2",
        pin4: "net.N3",
        pin7: "net.N3",
        pin15: "net.N4",
        pin12: "net.N5",
        pin1: "net.N5",
        pin13: "net.N6",
        pin5: "net.N9",
        pin11: "net.N10",
        pin8: "net.N10",
        pin2: "net.N13",
        pin3: "net.N13",
        pin16: "net.N13",
        pin9: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={4.87} pcbY={8.33} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={2.59} pcbY={-8.26} connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }} resistance="1k" />
  </board>
)
