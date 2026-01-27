/** Randomly generated circuit 179. */
export default () => (
  <board width="104.00mm" height="52.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-44.70} pcbY={-16.98} connections={{
        pin3: "net.N4",
        pin2: "net.N5",
        pin1: "net.N14",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-25.35} pcbY={-12.54} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-24.27} pcbY={12.91} connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-26.27} pcbY={-20.88} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.58} pcbY={-13.25} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={5.39} pcbY={18.09} connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin4: "net.N3",
        pin6: "net.N6",
        pin2: "net.N12",
        pin5: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.85} pcbY={-19.91} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin3: "net.N11",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-15.25} pcbY={22.20} connections={{
        pin5: "net.N4",
        pin4: "net.N8",
        pin2: "net.N8",
        pin6: "net.N9",
        pin3: "net.N12",
        pin1: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={30.32} pcbY={-17.19} connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-31.72} pcbY={-1.27} connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-50.28} pcbY={-6.22} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={4.31} pcbY={-1.09} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={14.85} pcbY={-5.64} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
        pin3: "net.N13",
      }} type="npn" />
  </board>
)
