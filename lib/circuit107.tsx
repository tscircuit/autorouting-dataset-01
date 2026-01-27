/** Randomly generated circuit 107. */
export default () => (
  <board width="24.00mm" height="96.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.82} pcbY={-18.72} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.19} pcbY={-2.77} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={10.27} pcbY={-38.78} connections={{
        pin3: "net.N3",
        pin1: "net.N7",
        pin2: "net.N10",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={7.70} pcbY={-24.89} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={0.88} pcbY={-3.35} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-11.30} pcbY={26.80} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={-9.80} pcbY={-27.70} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.09} pcbY={-26.57} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
        pin3: "net.N9",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={4.93} pcbY={24.46} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-4" footprint="0603" pcbX={9.91} pcbY={30.34} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-5" footprint="0402" pcbX={2.60} pcbY={35.48} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={-6.90} pcbY={-45.61} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
