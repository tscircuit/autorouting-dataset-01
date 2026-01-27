/** Randomly generated circuit 247. */
export default () => (
  <board width="32.00mm" height="64.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={14.64} pcbY={7.85} connections={{
        pin1: "net.N15",
        pin2: "net.N15",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-9.34} pcbY={3.78} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={13.51} pcbY={-8.47} connections={{
        pin1: "net.N12",
        pin2: "net.N13",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.61} pcbY={-12.48} connections={{
        pin2: "net.N3",
        pin3: "net.N5",
        pin1: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.54} pcbY={22.82} connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-6.49} pcbY={-21.51} connections={{
        pin1: "net.N16",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-2.76} pcbY={27.18} connections={{
        pin5: "net.N5",
        pin4: "net.N7",
        pin1: "net.N11",
        pin3: "net.N12",
        pin2: "net.N12",
        pin6: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-11.20} pcbY={-4.70} connections={{
        pin8: "net.N1",
        pin4: "net.N2",
        pin3: "net.N9",
        pin5: "net.N10",
        pin7: "net.N11",
        pin6: "net.N12",
        pin2: "net.N13",
        pin1: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={6.87} pcbY={-26.64} connections={{
        pin1: "net.N8",
        pin2: "net.N17",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-5.04} pcbY={11.71} connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={5.10} pcbY={9.93} connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-0.75} pcbY={17.20} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={13.65} pcbY={-24.56} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="dip8" pcbX={-0.01} pcbY={-5.69} connections={{
        pin1: "net.N2",
        pin8: "net.N6",
        pin4: "net.N7",
        pin3: "net.N8",
        pin6: "net.N10",
        pin2: "net.N14",
        pin5: "net.N14",
        pin7: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="0603" pcbX={14.61} pcbY={16.36} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.75} pcbY={23.75} connections={{
        pin3: "net.N8",
        pin1: "net.N8",
        pin2: "net.N9",
      }} type="npn" />
  </board>
)
