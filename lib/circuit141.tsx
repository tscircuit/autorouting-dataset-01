/** Randomly generated circuit 141. */
export default () => (
  <board width="40.00mm" height="80.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-12.59} pcbY={-33.10} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} />
    <inductor name="inductor-1" footprint="0603" pcbX={0.41} pcbY={5.09} connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0402" pcbX={-17.18} pcbY={21.92} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={14.29} pcbY={26.04} connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={10.56} pcbY={5.32} connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-15.09} pcbY={6.21} connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-8.98} pcbY={37.17} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={2.76} pcbY={-13.94} connections={{
        pin2: "net.N7",
        pin8: "net.N8",
        pin3: "net.N9",
        pin7: "net.N9",
        pin4: "net.N10",
        pin1: "net.N11",
        pin5: "net.N13",
        pin6: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={8.62} pcbY={-31.33} connections={{
        pin1: "net.N3",
        pin3: "net.N11",
        pin2: "net.N15",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.77} pcbY={-21.48} connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={6.74} pcbY={10.45} connections={{
        pin1: "net.N16",
        pin2: "net.N18",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={7.77} pcbY={28.69} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={0.81} pcbY={12.10} connections={{
        pin2: "net.N2",
        pin1: "net.N16",
      }} inductance="10uH" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-12.61} pcbY={15.78} connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-9.98} pcbY={-13.55} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-5" footprint="SOD-123" pcbX={-13.40} pcbY={-1.63} connections={{
        pin1: "net.N14",
        pin2: "net.N17",
      }} />
    <capacitor name="capacitor-4" footprint="0603" pcbX={1.78} pcbY={-17.58} connections={{
        pin1: "net.N15",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0603" pcbX={10.03} pcbY={15.88} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={-1.65} pcbY={-29.62} connections={{
        pin6: "net.N2",
        pin4: "net.N7",
        pin5: "net.N8",
        pin2: "net.N9",
        pin7: "net.N10",
        pin1: "net.N12",
        pin8: "net.N14",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-14.45} pcbY={36.53} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
  </board>
)
