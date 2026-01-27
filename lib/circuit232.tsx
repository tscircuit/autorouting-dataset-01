/** Randomly generated circuit 232. */
export default () => (
  <board width="30.00mm" height="40.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={3.61} pcbY={5.05} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.48} pcbY={-7.51} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-6.76} pcbY={18.79} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={10.97} pcbY={-6.11} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={12.62} pcbY={-17.65} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }} resistance="1k" />
  </board>
)
