/** Randomly generated circuit 159. */
export default () => (
  <board width="56.00mm" height="140.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={26.06} pcbY={40.85} connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={20.64} pcbY={13.27} connections={{
        pin2: "net.N8",
        pin1: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={24.03} pcbY={-36.52} connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-17.88} pcbY={-32.15} connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-24.72} pcbY={-53.36} connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-2.56} pcbY={-1.25} connections={{
        pin3: "net.N2",
        pin1: "net.N12",
        pin2: "net.N13",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-9.75} pcbY={18.69} connections={{
        pin6: "net.N1",
        pin4: "net.N4",
        pin1: "net.N4",
        pin2: "net.N5",
        pin5: "net.N9",
        pin3: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={-15.08} pcbY={60.30} connections={{
        pin4: "net.N2",
        pin3: "net.N3",
        pin7: "net.N3",
        pin2: "net.N7",
        pin6: "net.N7",
        pin8: "net.N8",
        pin5: "net.N9",
        pin1: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.37} pcbY={40.88} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={1.20} pcbY={39.81} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-4" footprint="0402" pcbX={15.26} pcbY={-58.37} connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={15.58} pcbY={57.26} connections={{
        pin2: "net.N10",
        pin3: "net.N11",
        pin1: "net.N12",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-16.14} pcbY={1.26} connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-7.03} pcbY={-55.45} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
        pin3: "net.N12",
      }} type="npn" />
  </board>
)
