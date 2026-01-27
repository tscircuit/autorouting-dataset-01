/** Randomly generated circuit 271. */
export default () => (
  <board width="110.00mm" height="22.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-36.09} pcbY={-5.07} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={8.94} pcbY={-10.28} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={36.58} pcbY={0.92} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={4.12} pcbY={8.77} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.82} pcbY={-2.87} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={51.63} pcbY={-4.63} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={-3.65} pcbY={-10.02} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-49.34} pcbY={-6.87} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N4",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={15.12} pcbY={7.26} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-51.61} pcbY={2.32} connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }} />
    <resistor name="resistor-4" footprint="0402" pcbX={23.65} pcbY={2.80} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
  </board>
)
