/** Randomly generated circuit 143. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N4",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={-3.00} pcbY={9.00} connections={{
        pin8: "net.N1",
        pin7: "net.N2",
        pin3: "net.N2",
        pin2: "net.N3",
        pin6: "net.N3",
        pin4: "net.N4",
        pin1: "net.N6",
        pin5: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.00} pcbY={-5.00} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.50} pcbY={3.50} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={5.00} pcbY={5.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.00} pcbY={-10.00} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
  </board>
)
