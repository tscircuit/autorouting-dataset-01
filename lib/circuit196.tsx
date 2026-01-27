/** Randomly generated circuit 196. */
export default () => (
  <board width="48.00mm" height="32.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-16.22} pcbY={12.30} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-14.19} pcbY={-15.31} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={0.38} pcbY={-3.57} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={-1.69} pcbY={12.98} connections={{
        pin7: "net.N1",
        pin1: "net.N2",
        pin6: "net.N3",
        pin8: "net.N4",
        pin2: "net.N4",
        pin4: "net.N6",
        pin5: "net.N6",
        pin3: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={9.21} pcbY={-14.17} connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N7",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={15.63} pcbY={0.92} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-19.80} pcbY={-0.66} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={5.45} pcbY={4.07} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
  </board>
)
