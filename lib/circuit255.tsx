/** Randomly generated circuit 255. */
export default () => (
  <board width="56.00mm" height="28.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={13.64} pcbY={4.12} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={24.41} pcbY={2.73} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={13.36} pcbY={11.76} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={21.39} pcbY={-10.38} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={1.46} pcbY={3.16} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-14.95} pcbY={7.10} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.58} pcbY={-5.65} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N4",
      }} type="npn" />
  </board>
)
