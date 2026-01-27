/** Randomly generated circuit 245. */
export default () => (
  <board width="200.00mm" height="160.00mm">
    <inductor name="inductor-1" footprint="0402" pcbX={-89.37} pcbY={-70.10} connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={86.11} pcbY={-48.63} connections={{
        pin1: "net.N16",
        pin3: "net.N19",
        pin2: "net.N20",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={27.16} pcbY={-48.43} connections={{
        pin2: "net.N15",
        pin1: "net.N17",
        pin3: "net.N17",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={64.13} pcbY={38.37} connections={{
        pin2: "net.N10",
        pin3: "net.N14",
        pin1: "net.N17",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={41.89} pcbY={65.79} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={81.21} pcbY={45.24} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={17.44} pcbY={-37.64} connections={{
        pin2: "net.N4",
        pin4: "net.N5",
        pin1: "net.N7",
        pin6: "net.N12",
        pin5: "net.N19",
        pin3: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-79.12} pcbY={-56.78} connections={{
        pin3: "net.N4",
        pin2: "net.N8",
        pin1: "net.N11",
      }} type="npn" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={78.58} pcbY={-71.92} connections={{
        pin3: "net.N3",
        pin1: "net.N6",
        pin2: "net.N11",
      }} type="npn" />
    <transistor name="transistor-6" footprint="SOT-23" pcbX={-86.94} pcbY={-9.06} connections={{
        pin1: "net.N9",
        pin3: "net.N11",
        pin2: "net.N14",
      }} type="npn" />
    <transistor name="transistor-7" footprint="SOT-23" pcbX={-9.56} pcbY={21.76} connections={{
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N9",
      }} type="npn" />
    <transistor name="transistor-8" footprint="SOT-23" pcbX={67.88} pcbY={-77.78} connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N10",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={41.48} pcbY={-10.34} connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-18.72} pcbY={-29.57} connections={{
        pin1: "net.N16",
        pin2: "net.N17",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-42.16} pcbY={-24.52} connections={{
        pin1: "net.N13",
        pin2: "net.N15",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-10.95} pcbY={75.61} connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={45.47} pcbY={44.01} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-55.57} pcbY={35.28} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-98.33} pcbY={78.86} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={-19.79} pcbY={-18.44} connections={{
        pin6: "net.N3",
        pin7: "net.N5",
        pin3: "net.N5",
        pin1: "net.N8",
        pin8: "net.N9",
        pin2: "net.N12",
        pin4: "net.N18",
        pin5: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
