/** Randomly generated circuit 171. */
export default () => (
  <board width="22.00mm" height="110.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.09} pcbY={-28.16} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
        pin3: "net.N15",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.02} pcbY={-41.57} connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N16",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-0.79} pcbY={-10.87} connections={{
        pin2: "net.N14",
        pin1: "net.N15",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={-0.70} pcbY={16.36} connections={{
        pin5: "net.N2",
        pin2: "net.N6",
        pin4: "net.N6",
        pin1: "net.N7",
        pin8: "net.N8",
        pin3: "net.N13",
        pin6: "net.N16",
        pin7: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-5.23} pcbY={51.84} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N17",
      }} type="npn" />
    <chip name="chip-2" footprint="dip8" pcbX={0.02} pcbY={31.85} connections={{
        pin8: "net.N3",
        pin1: "net.N3",
        pin4: "net.N4",
        pin2: "net.N5",
        pin6: "net.N7",
        pin7: "net.N8",
        pin3: "net.N10",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-2.55} pcbY={-25.09} connections={{
        pin1: "net.N4",
        pin3: "net.N7",
        pin2: "net.N12",
      }} type="npn" />
    <chip name="chip-3" footprint="pinrow6" pcbX={1.35} pcbY={-17.67} connections={{
        pin3: "net.N1",
        pin5: "net.N10",
        pin1: "net.N12",
        pin6: "net.N13",
        pin4: "net.N14",
        pin2: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-4" footprint="soic8" pcbX={-8.22} pcbY={-37.89} connections={{
        pin8: "net.N8",
        pin5: "net.N9",
        pin1: "net.N11",
        pin6: "net.N11",
        pin3: "net.N12",
        pin2: "net.N13",
        pin7: "net.N14",
        pin4: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={7.00} pcbY={52.03} connections={{
        pin1: "net.N1",
        pin3: "net.N1",
        pin2: "net.N13",
      }} type="npn" />
    <chip name="chip-5" footprint="dip8" pcbX={6.91} pcbY={7.65} connections={{
        pin7: "net.N3",
        pin1: "net.N4",
        pin8: "net.N4",
        pin6: "net.N7",
        pin3: "net.N12",
        pin5: "net.N14",
        pin4: "net.N15",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
