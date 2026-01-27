/** Randomly generated circuit 210. */
export default () => (
  <board width="48.00mm" height="96.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={22.40} pcbY={30.36} connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-9.23} pcbY={-27.90} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={9.50} pcbY={-30.98} connections={{
        pin5: "net.N1",
        pin6: "net.N3",
        pin3: "net.N5",
        pin7: "net.N5",
        pin8: "net.N6",
        pin2: "net.N6",
        pin1: "net.N6",
        pin4: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={5.16} pcbY={0.23} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={18.54} pcbY={-17.96} connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={18.46} pcbY={14.38} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={10.95} pcbY={17.76} connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={8.87} pcbY={27.55} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
        pin3: "net.N10",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-19.29} pcbY={-27.06} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={8.87} pcbY={-47.14} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N6",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-14.08} pcbY={-34.70} connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }} />
    <capacitor name="capacitor-5" footprint="0402" pcbX={-1.70} pcbY={44.61} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
