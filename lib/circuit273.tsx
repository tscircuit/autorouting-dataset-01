/** Randomly generated circuit 273. */
export default () => (
  <board width="10.00mm" height="10.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.76} pcbY={3.60} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N4",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={0.34} pcbY={-1.16} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-4.09} pcbY={-0.18} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.37} pcbY={-3.08} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-2.82} pcbY={4.36} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
  </board>
)
