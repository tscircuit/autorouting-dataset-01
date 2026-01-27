/** Randomly generated circuit 211. */
export default () => (
  <board width="100.00mm" height="60.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={-46.38} pcbY={1.53} connections={{
        pin6: "net.N2",
        pin8: "net.N2",
        pin7: "net.N8",
        pin1: "net.N9",
        pin5: "net.N10",
        pin2: "net.N11",
        pin4: "net.N14",
        pin3: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="pinrow6" pcbX={44.83} pcbY={-18.50} connections={{
        pin5: "net.N1",
        pin6: "net.N4",
        pin2: "net.N5",
        pin4: "net.N6",
        pin3: "net.N13",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="dip8" pcbX={-5.12} pcbY={8.97} connections={{
        pin2: "net.N3",
        pin6: "net.N7",
        pin3: "net.N7",
        pin4: "net.N7",
        pin7: "net.N12",
        pin5: "net.N14",
        pin8: "net.N14",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-22.83} pcbY={14.72} connections={{
        pin2: "net.N14",
        pin3: "net.N15",
        pin1: "net.N15",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={42.13} pcbY={15.15} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
        pin3: "net.N12",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={20.13} pcbY={-27.03} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} resistance="1k" />
    <chip name="chip-4" footprint="pinrow6" pcbX={-41.10} pcbY={-21.54} connections={{
        pin5: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N7",
        pin4: "net.N11",
        pin6: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-5" footprint="pinrow6" pcbX={-27.05} pcbY={26.29} connections={{
        pin5: "net.N2",
        pin4: "net.N3",
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N6",
        pin6: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={35.71} pcbY={3.64} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.96} pcbY={-14.52} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} />
  </board>
)
