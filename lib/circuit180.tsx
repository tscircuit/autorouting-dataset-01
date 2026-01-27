/** Randomly generated circuit 180. */
export default () => (
  <board width="40.00mm" height="80.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-13.13} pcbY={24.02} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-2.00} pcbY={-4.41} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={18.61} pcbY={-29.31} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={11.73} pcbY={16.85} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-17.71} pcbY={-1.41} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-8.94} pcbY={-21.63} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={14.80} pcbY={-14.61} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-15.32} pcbY={-8.81} connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }} />
    <resistor name="resistor-3" footprint="0402" pcbX={11.31} pcbY={-3.46} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={6.31} pcbY={18.83} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
