/** Randomly generated circuit 136. */
export default () => (
  <board width="48.00mm" height="48.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={6.25} pcbY={-20.51} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-1.78} pcbY={-18.67} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-17.39} pcbY={12.63} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-7.94} pcbY={-9.24} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-5.27} pcbY={1.40} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-5.38} pcbY={-4.84} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={0.42} pcbY={19.86} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0402" pcbX={19.18} pcbY={0.91} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} resistance="1k" />
  </board>
)
