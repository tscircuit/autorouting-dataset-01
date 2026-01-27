/** Randomly generated circuit 215. */
export default () => (
  <board width="112.00mm" height="84.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={53.84} pcbY={17.12} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-51.32} pcbY={-36.57} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-27.34} pcbY={-25.06} connections={{
        pin3: "net.N3",
        pin6: "net.N10",
        pin4: "net.N13",
        pin2: "net.N13",
        pin1: "net.N14",
        pin5: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-26.86} pcbY={-6.86} connections={{
        pin3: "net.N4",
        pin1: "net.N5",
        pin2: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-33.58} pcbY={-33.76} connections={{
        pin3: "net.N4",
        pin1: "net.N6",
        pin2: "net.N11",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-36.14} pcbY={-10.45} connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-13.17} pcbY={15.45} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0402" pcbX={2.09} pcbY={-25.43} connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={35.93} pcbY={-31.63} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-34.11} pcbY={3.57} connections={{
        pin2: "net.N3",
        pin1: "net.N17",
        pin3: "net.N18",
      }} type="npn" />
    <chip name="chip-2" footprint="soic16" pcbX={35.88} pcbY={-2.66} connections={{
        pin5: "net.N1",
        pin10: "net.N2",
        pin4: "net.N3",
        pin9: "net.N5",
        pin6: "net.N6",
        pin1: "net.N7",
        pin11: "net.N8",
        pin7: "net.N8",
        pin12: "net.N9",
        pin8: "net.N12",
        pin16: "net.N13",
        pin2: "net.N14",
        pin13: "net.N14",
        pin14: "net.N15",
        pin15: "net.N15",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={23.53} pcbY={-35.09} connections={{
        pin2: "net.N5",
        pin3: "net.N12",
        pin1: "net.N16",
      }} type="npn" />
    <inductor name="inductor-4" footprint="0603" pcbX={-7.89} pcbY={-39.65} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0402" pcbX={9.80} pcbY={-0.81} connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }} inductance="10uH" />
  </board>
)
