/** Randomly generated circuit 287. */
export default () => (
  <board width="36.00mm" height="18.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-14.29} pcbY={-0.62} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
        pin3: "net.N7",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={13.64} pcbY={8.22} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.72} pcbY={-7.97} connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin2: "net.N7",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-2.86} pcbY={3.10} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={6.93} pcbY={3.18} connections={{
        pin2: "net.N2",
        pin3: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={-8.96} pcbY={5.25} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-3.37} pcbY={-8.05} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-13.03} pcbY={-5.38} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-16.68} pcbY={-7.98} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
