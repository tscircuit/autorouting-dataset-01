/** Randomly generated circuit 115. */
export default () => (
  <board width="50.00mm" height="10.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.19} pcbY={-4.14} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={6.46} pcbY={4.09} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={22.68} pcbY={-1.74} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={4.63} pcbY={-0.62} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-23.66} pcbY={-1.80} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
