/** Randomly generated circuit 188. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={0.00} pcbY={0.00} connections={{
        pin5: "net.N1",
        pin4: "net.N2",
        pin3: "net.N4",
        pin7: "net.N5",
        pin6: "net.N6",
        pin1: "net.N7",
        pin2: "net.N9",
        pin8: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0805" pcbX={-4.50} pcbY={-9.00} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.00} pcbY={7.00} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
        pin3: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-4.50} pcbY={-4.50} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-323" pcbX={4.50} pcbY={-9.00} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={4.50} pcbY={9.00} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-1.00} pcbY={-4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={0.50} pcbY={4.50} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={3.00} pcbY={-4.50} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
