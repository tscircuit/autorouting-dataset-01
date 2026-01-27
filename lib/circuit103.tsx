/** Randomly generated circuit 103. */
export default () => (
  <board width="136.00mm" height="68.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={43.51} pcbY={33.34} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-39.81} pcbY={33.31} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-19.92} pcbY={16.00} connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={-13.37} pcbY={23.12} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-5.01} pcbY={-9.85} connections={{
        pin3: "net.N3",
        pin1: "net.N7",
        pin2: "net.N14",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={27.61} pcbY={-21.07} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-40.75} pcbY={16.60} connections={{
        pin1: "net.N2",
        pin3: "net.N8",
        pin2: "net.N12",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={-64.43} pcbY={22.37} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={37.69} pcbY={19.97} connections={{
        pin1: "net.N4",
        pin2: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={61.01} pcbY={26.70} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={61.00} pcbY={33.28} connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-37.45} pcbY={-14.82} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-53.56} pcbY={29.48} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} />
    <diode name="diode-4" footprint="SOD-123" pcbX={-43.22} pcbY={24.09} connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={10.86} pcbY={26.22} connections={{
        pin1: "net.N1",
        pin5: "net.N2",
        pin4: "net.N3",
        pin6: "net.N4",
        pin2: "net.N5",
        pin3: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-5" footprint="SOD-123" pcbX={39.40} pcbY={-13.37} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} />
    <diode name="diode-6" footprint="SOD-123" pcbX={12.70} pcbY={-5.99} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} />
  </board>
)
