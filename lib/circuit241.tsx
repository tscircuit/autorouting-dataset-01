/** Randomly generated circuit 241. */
export default () => (
  <board width="190.00mm" height="190.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.25} pcbY={72.76} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-16.27} pcbY={-51.99} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-79.16} pcbY={60.19} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N7",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={24.06} pcbY={10.41} connections={{
        pin1: "net.N9",
        pin3: "net.N10",
        pin2: "net.N13",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={-12.61} pcbY={18.26} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-60.54} pcbY={-48.78} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-1.66} pcbY={10.69} connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={45.73} pcbY={62.58} connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-89.74} pcbY={7.38} connections={{
        pin1: "net.N12",
        pin2: "net.N16",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-2.20} pcbY={35.49} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
        pin3: "net.N16",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-28.66} pcbY={-29.40} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={79.52} pcbY={83.58} connections={{
        pin2: "net.N7",
        pin1: "net.N16",
      }} />
    <diode name="diode-5" footprint="SOD-123" pcbX={14.06} pcbY={10.78} connections={{
        pin1: "net.N5",
        pin2: "net.N16",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-57.55} pcbY={-2.40} connections={{
        pin2: "net.N1",
        pin6: "net.N7",
        pin1: "net.N9",
        pin5: "net.N13",
        pin8: "net.N13",
        pin4: "net.N14",
        pin3: "net.N14",
        pin7: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={40.67} pcbY={42.24} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic8" pcbX={0.44} pcbY={-61.95} connections={{
        pin7: "net.N1",
        pin8: "net.N2",
        pin6: "net.N3",
        pin1: "net.N3",
        pin5: "net.N7",
        pin2: "net.N8",
        pin4: "net.N9",
        pin3: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-40.56} pcbY={16.19} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <diode name="diode-6" footprint="SOD-123" pcbX={-59.92} pcbY={15.35} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} />
    <capacitor name="capacitor-3" footprint="0603" pcbX={93.57} pcbY={52.67} connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
  </board>
)
