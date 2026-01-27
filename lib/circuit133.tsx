/** Randomly generated circuit 133. */
export default () => (
  <board width="28.00mm" height="56.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={6.24} pcbY={-3.79} connections={{
        pin13: "net.N1",
        pin4: "net.N3",
        pin6: "net.N4",
        pin16: "net.N4",
        pin1: "net.N5",
        pin7: "net.N7",
        pin10: "net.N7",
        pin8: "net.N8",
        pin2: "net.N9",
        pin15: "net.N13",
        pin12: "net.N14",
        pin9: "net.N14",
        pin14: "net.N15",
        pin11: "net.N17",
        pin5: "net.N18",
        pin3: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic16" pcbX={-5.15} pcbY={-11.22} connections={{
        pin12: "net.N2",
        pin2: "net.N2",
        pin1: "net.N3",
        pin5: "net.N3",
        pin4: "net.N4",
        pin6: "net.N5",
        pin9: "net.N6",
        pin15: "net.N9",
        pin10: "net.N11",
        pin8: "net.N11",
        pin14: "net.N13",
        pin11: "net.N13",
        pin16: "net.N14",
        pin7: "net.N16",
        pin3: "net.N16",
        pin13: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.61} pcbY={20.09} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.45} pcbY={15.12} connections={{
        pin1: "net.N12",
        pin2: "net.N15",
        pin3: "net.N17",
      }} type="npn" />
    <chip name="chip-3" footprint="soic16" pcbX={-6.61} pcbY={8.41} connections={{
        pin9: "net.N1",
        pin4: "net.N1",
        pin15: "net.N2",
        pin7: "net.N2",
        pin6: "net.N3",
        pin13: "net.N6",
        pin1: "net.N6",
        pin3: "net.N7",
        pin10: "net.N7",
        pin2: "net.N8",
        pin11: "net.N9",
        pin8: "net.N11",
        pin12: "net.N13",
        pin14: "net.N14",
        pin5: "net.N17",
        pin16: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.17} pcbY={-18.97} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
        pin3: "net.N15",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-9.35} pcbY={-11.13} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} />
  </board>
)
