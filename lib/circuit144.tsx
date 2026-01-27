/** Randomly generated circuit 144. */
export default () => (
  <board width="28.00mm" height="84.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={3.99} pcbY={26.03} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-5.61} pcbY={25.56} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.13} pcbY={-39.93} connections={{
        pin3: "net.N4",
        pin2: "net.N9",
        pin1: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-4.35} pcbY={16.68} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.78} pcbY={-23.10} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
        pin3: "net.N8",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-11.13} pcbY={40.50} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-3.48} pcbY={-14.51} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
        pin3: "net.N10",
      }} type="npn" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-1.60} pcbY={0.49} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
        pin3: "net.N7",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={3.90} pcbY={-18.14} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-11.11} pcbY={-25.34} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={-4.56} pcbY={-21.46} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0402" pcbX={-4.22} pcbY={32.79} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={9.01} pcbY={9.90} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={1.43} pcbY={10.82} connections={{
        pin1: "net.N1",
        pin8: "net.N1",
        pin3: "net.N1",
        pin5: "net.N4",
        pin6: "net.N5",
        pin7: "net.N8",
        pin4: "net.N8",
        pin2: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
