/** Randomly generated circuit 236. */
export default () => (
  <board width="44.00mm" height="88.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={-5.60} pcbY={41.31} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-17.37} pcbY={-33.90} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-15.18} pcbY={-12.35} connections={{
        pin3: "net.N1",
        pin5: "net.N2",
        pin4: "net.N3",
        pin1: "net.N3",
        pin2: "net.N4",
        pin6: "net.N5",
        pin8: "net.N7",
        pin7: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-13.81} pcbY={-24.56} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-0.15} pcbY={10.63} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-5.92} pcbY={38.25} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-19.02} pcbY={13.15} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
        pin3: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={18.66} pcbY={-22.16} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
        pin3: "net.N9",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={14.68} pcbY={30.71} connections={{
        pin2: "net.N2",
        pin4: "net.N2",
        pin3: "net.N4",
        pin6: "net.N6",
        pin1: "net.N6",
        pin5: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-1.33} pcbY={-11.66} connections={{
        pin2: "net.N3",
        pin3: "net.N8",
        pin1: "net.N9",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-15.91} pcbY={30.50} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
