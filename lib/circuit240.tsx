/** Randomly generated circuit 240. */
export default () => (
  <board width="136.00mm" height="170.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={-61.62} pcbY={-17.02} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.37} pcbY={34.14} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N5",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0402" pcbX={51.17} pcbY={-19.08} connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={-50.88} pcbY={-9.62} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={19.15} pcbY={9.54} connections={{
        pin1: "net.N2",
        pin3: "net.N6",
        pin2: "net.N11",
      }} type="npn" />
    <inductor name="inductor-4" footprint="0402" pcbX={-11.28} pcbY={-83.41} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={-27.33} pcbY={-43.65} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-5" footprint="0402" pcbX={66.93} pcbY={-41.15} connections={{
        pin1: "net.N8",
        pin2: "net.N14",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-38.21} pcbY={22.19} connections={{
        pin1: "net.N9",
        pin3: "net.N10",
        pin2: "net.N13",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={-31.97} pcbY={12.50} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin7: "net.N5",
        pin8: "net.N5",
        pin5: "net.N9",
        pin6: "net.N10",
        pin1: "net.N11",
        pin4: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={34.99} pcbY={75.18} connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-57.44} pcbY={-32.78} connections={{
        pin3: "net.N6",
        pin2: "net.N8",
        pin1: "net.N9",
      }} type="npn" />
    <inductor name="inductor-6" footprint="0603" pcbX={42.47} pcbY={-65.32} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <inductor name="inductor-7" footprint="0402" pcbX={50.94} pcbY={-4.45} connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={35.58} pcbY={69.56} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N4",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-30.56} pcbY={-5.20} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.17} pcbY={80.88} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
  </board>
)
