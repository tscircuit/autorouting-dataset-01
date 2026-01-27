/** Randomly generated circuit 118. */
export default () => (
  <board width="120.00mm" height="90.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={12.19} pcbY={30.56} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.75} pcbY={-20.41} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={-45.82} pcbY={-24.84} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={-11.73} pcbY={-11.26} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0402" pcbX={-44.54} pcbY={-34.73} connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={14.20} pcbY={-6.21} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} />
    <resistor name="resistor-5" footprint="0603" pcbX={56.95} pcbY={-26.86} connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-29.61} pcbY={-37.76} connections={{
        pin2: "net.N2",
        pin3: "net.N7",
        pin1: "net.N13",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-51.07} pcbY={-33.89} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} />
    <chip name="chip-1" footprint="soic16" pcbX={-6.02} pcbY={-27.95} connections={{
        pin10: "net.N2",
        pin8: "net.N2",
        pin11: "net.N3",
        pin3: "net.N3",
        pin13: "net.N3",
        pin2: "net.N4",
        pin4: "net.N5",
        pin7: "net.N7",
        pin16: "net.N8",
        pin5: "net.N9",
        pin6: "net.N9",
        pin12: "net.N11",
        pin15: "net.N12",
        pin14: "net.N12",
        pin9: "net.N15",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.09} pcbY={-38.17} connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={-28.30} pcbY={40.60} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.10} pcbY={-41.64} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N14",
      }} type="npn" />
    <diode name="diode-4" footprint="SOD-123" pcbX={26.02} pcbY={-10.50} connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-3" footprint="0603" pcbX={17.20} pcbY={7.94} connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }} inductance="10uH" />
  </board>
)
