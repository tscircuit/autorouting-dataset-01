/** Randomly generated circuit 258. */
export default () => (
  <board width="70.00mm" height="56.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-14.91} pcbY={-22.54} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={26.93} pcbY={-15.03} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={-3.66} pcbY={-11.68} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={4.82} pcbY={-11.67} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-31.30} pcbY={-5.95} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={18.34} pcbY={-2.48} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={22.33} pcbY={16.58} connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }} />
  </board>
)
