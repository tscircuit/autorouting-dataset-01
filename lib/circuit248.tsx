/** Randomly generated circuit 248. */
export default () => (
  <board width="52.00mm" height="52.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={21.56} pcbY={5.01} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-16.05} pcbY={-10.62} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
        pin3: "net.N15",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={-4.94} pcbY={7.48} connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin7: "net.N6",
        pin4: "net.N11",
        pin8: "net.N12",
        pin6: "net.N14",
        pin5: "net.N15",
        pin1: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.92} pcbY={-24.06} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="pinrow6" pcbX={7.01} pcbY={-8.48} connections={{
        pin4: "net.N7",
        pin6: "net.N8",
        pin5: "net.N9",
        pin1: "net.N12",
        pin2: "net.N13",
        pin3: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-18.96} pcbY={15.31} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-1.35} pcbY={-22.30} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-13.26} pcbY={15.55} connections={{
        pin2: "net.N6",
        pin3: "net.N8",
        pin1: "net.N14",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-17.56} pcbY={3.65} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-5.91} pcbY={-11.00} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-22.23} pcbY={-2.31} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} resistance="1k" />
    <chip name="chip-3" footprint="dip8" pcbX={21.66} pcbY={-17.62} connections={{
        pin8: "net.N1",
        pin3: "net.N3",
        pin5: "net.N5",
        pin2: "net.N7",
        pin6: "net.N9",
        pin4: "net.N10",
        pin7: "net.N12",
        pin1: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-17.12} pcbY={-0.63} connections={{
        pin3: "net.N6",
        pin1: "net.N6",
        pin2: "net.N10",
      }} type="npn" />
  </board>
)
