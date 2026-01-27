/** Randomly generated circuit 105. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin5: "net.N5",
        pin3: "net.N6",
        pin4: "net.N6",
        pin6: "net.N7",
      }} pinCount={6} pitch="2.54mm" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.00} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.00} pcbY={4.00} connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N5",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-323" pcbX={4.50} pcbY={-9.00} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={3.00} pcbY={6.00} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-323" pcbX={-0.50} pcbY={-4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-9.00} pcbY={-9.00} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} resistance="1k" />
  </board>
)
