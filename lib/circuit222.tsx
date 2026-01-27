/** Randomly generated circuit 222. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={10.56} pcbY={9.30} connections={{
        pin2: "net.N12",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-8.46} pcbY={3.44} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={0.92} pcbY={-7.29} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={1.86} pcbY={1.84} connections={{
        pin3: "net.N2",
        pin6: "net.N2",
        pin8: "net.N3",
        pin4: "net.N6",
        pin7: "net.N7",
        pin5: "net.N9",
        pin1: "net.N11",
        pin2: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-7.33} pcbY={12.50} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={11.07} pcbY={-10.11} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-3.11} pcbY={-8.68} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={1.87} pcbY={9.79} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
        pin3: "net.N11",
      }} type="npn" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-9.17} pcbY={-1.70} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin7: "net.N3",
        pin4: "net.N3",
        pin3: "net.N6",
        pin1: "net.N8",
        pin5: "net.N9",
        pin6: "net.N10",
        pin2: "net.N10",
        pin8: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={-9.17} pcbY={8.56} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.17} pcbY={-4.93} connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={7.49} pcbY={-11.71} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
  </board>
)
