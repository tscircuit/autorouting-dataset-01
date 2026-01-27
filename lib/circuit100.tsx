/** Randomly generated circuit 100. */
export default () => (
  <board width="84.00mm" height="140.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-18.39} pcbY={17.30} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin3: "net.N11",
      }} type="npn" />
    <chip name="chip-1" footprint="soic8" pcbX={30.18} pcbY={33.42} connections={{
        pin4: "net.N3",
        pin6: "net.N6",
        pin3: "net.N6",
        pin5: "net.N7",
        pin2: "net.N9",
        pin7: "net.N12",
        pin1: "net.N13",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={15.45} pcbY={15.41} connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-37.16} pcbY={12.86} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-26.02} pcbY={39.50} connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={27.93} pcbY={-1.70} connections={{
        pin1: "net.N3",
        pin2: "net.N15",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-37.51} pcbY={-62.22} connections={{
        pin2: "net.N5",
        pin3: "net.N10",
        pin1: "net.N13",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={11.87} pcbY={-40.31} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.66} pcbY={-41.15} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={13.24} pcbY={25.18} connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={35.99} pcbY={-9.55} connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N9",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-35.83} pcbY={-19.19} connections={{
        pin4: "net.N2",
        pin1: "net.N7",
        pin5: "net.N8",
        pin6: "net.N10",
        pin2: "net.N14",
        pin3: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={1.67} pcbY={44.78} connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0603" pcbX={18.90} pcbY={-28.49} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} resistance="1k" />
  </board>
)
