/** Randomly generated circuit 165. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={2.62} pcbY={-5.02} connections={{
        pin8: "net.N1",
        pin1: "net.N4",
        pin6: "net.N4",
        pin7: "net.N5",
        pin4: "net.N7",
        pin3: "net.N8",
        pin2: "net.N9",
        pin5: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={15.46} pcbY={-6.73} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.23} pcbY={-17.26} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={-8.89} pcbY={-12.94} connections={{
        pin4: "net.N2",
        pin3: "net.N4",
        pin7: "net.N6",
        pin6: "net.N6",
        pin2: "net.N7",
        pin1: "net.N8",
        pin5: "net.N8",
        pin8: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={15.92} pcbY={19.40} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.24} pcbY={18.42} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={6.11} pcbY={15.66} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N10",
      }} type="npn" />
  </board>
)
