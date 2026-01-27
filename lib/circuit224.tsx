/** Randomly generated circuit 224. */
export default () => (
  <board width="96.00mm" height="120.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.08} pcbY={50.95} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={21.54} pcbY={5.78} connections={{
        pin3: "net.N2",
        pin2: "net.N9",
        pin1: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={5.70} pcbY={-43.67} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-20.53} pcbY={4.45} connections={{
        pin6: "net.N1",
        pin5: "net.N5",
        pin3: "net.N5",
        pin4: "net.N6",
        pin8: "net.N6",
        pin1: "net.N7",
        pin7: "net.N8",
        pin2: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={40.08} pcbY={-29.77} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-39.02} pcbY={3.63} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={21.63} pcbY={-49.49} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-7.67} pcbY={14.41} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-23.14} pcbY={41.46} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-45.47} pcbY={-17.04} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-28.87} pcbY={23.76} connections={{
        pin3: "net.N6",
        pin2: "net.N8",
        pin1: "net.N10",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0402" pcbX={-36.34} pcbY={-44.00} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} resistance="1k" />
  </board>
)
