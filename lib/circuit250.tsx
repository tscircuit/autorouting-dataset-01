/** Randomly generated circuit 250. */
export default () => (
  <board width="96.00mm" height="32.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-38.60} pcbY={9.79} connections={{
        pin6: "net.N2",
        pin3: "net.N3",
        pin1: "net.N7",
        pin8: "net.N7",
        pin4: "net.N10",
        pin2: "net.N11",
        pin7: "net.N14",
        pin5: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.27} pcbY={-8.58} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} />
    <inductor name="inductor-1" footprint="0402" pcbX={-33.96} pcbY={-7.31} connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={16.68} pcbY={15.07} connections={{
        pin1: "net.N14",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-22.93} pcbY={-9.69} connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-40.91} pcbY={-13.19} connections={{
        pin1: "net.N10",
        pin2: "net.N17",
        pin3: "net.N18",
      }} type="npn" />
    <chip name="chip-2" footprint="dip8" pcbX={41.32} pcbY={8.21} connections={{
        pin7: "net.N2",
        pin2: "net.N8",
        pin8: "net.N9",
        pin4: "net.N12",
        pin5: "net.N13",
        pin1: "net.N13",
        pin3: "net.N15",
        pin6: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={5.73} pcbY={0.79} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-16.66} pcbY={1.79} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-0.94} pcbY={9.12} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={17.41} pcbY={1.34} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-9.18} pcbY={12.07} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} />
    <diode name="diode-5" footprint="SOD-123" pcbX={16.20} pcbY={-10.86} connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={12.18} pcbY={1.25} connections={{
        pin3: "net.N8",
        pin1: "net.N8",
        pin2: "net.N16",
      }} type="npn" />
    <inductor name="inductor-2" footprint="0603" pcbX={13.40} pcbY={13.67} connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={2.81} pcbY={-8.30} connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }} resistance="1k" />
  </board>
)
