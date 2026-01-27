/** Randomly generated circuit 125. */
export default () => (
  <board width="130.00mm" height="26.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={52.43} pcbY={5.83} connections={{
        pin3: "net.N2",
        pin8: "net.N3",
        pin7: "net.N4",
        pin4: "net.N5",
        pin5: "net.N9",
        pin1: "net.N10",
        pin6: "net.N10",
        pin2: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={61.14} pcbY={-4.15} connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-54.03} pcbY={5.72} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.20} pcbY={0.20} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N6",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={2.04} pcbY={0.55} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
        pin3: "net.N8",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={28.87} pcbY={7.40} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={9.33} pcbY={-11.53} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={-40.77} pcbY={1.05} connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-33.16} pcbY={-9.85} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-31.91} pcbY={4.71} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={47.76} pcbY={-7.76} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} resistance="1k" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-52.60} pcbY={-10.41} connections={{
        pin5: "net.N3",
        pin1: "net.N8",
        pin4: "net.N9",
        pin6: "net.N9",
        pin2: "net.N11",
        pin3: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={28.62} pcbY={-5.49} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
  </board>
)
