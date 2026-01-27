/** Randomly generated circuit 279. */
export default () => (
  <board width="96.00mm" height="128.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-43.83} pcbY={43.45} connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-42.56} pcbY={-29.50} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-16.58} pcbY={40.39} connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-25.38} pcbY={-15.11} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin4: "net.N7",
        pin7: "net.N11",
        pin1: "net.N16",
        pin8: "net.N17",
        pin5: "net.N18",
        pin6: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-11.60} pcbY={-31.50} connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }} />
    <chip name="chip-2" footprint="soic8" pcbX={-5.24} pcbY={42.43} connections={{
        pin1: "net.N1",
        pin5: "net.N4",
        pin2: "net.N12",
        pin4: "net.N13",
        pin3: "net.N14",
        pin6: "net.N15",
        pin8: "net.N15",
        pin7: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={24.71} pcbY={-61.51} connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-1.65} pcbY={17.25} connections={{
        pin3: "net.N2",
        pin2: "net.N8",
        pin1: "net.N16",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-37.73} pcbY={-53.19} connections={{
        pin3: "net.N2",
        pin2: "net.N6",
        pin1: "net.N8",
      }} type="npn" />
    <chip name="chip-3" footprint="soic8" pcbX={-14.59} pcbY={59.49} connections={{
        pin1: "net.N4",
        pin6: "net.N4",
        pin2: "net.N4",
        pin5: "net.N5",
        pin3: "net.N9",
        pin7: "net.N13",
        pin8: "net.N16",
        pin4: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={33.88} pcbY={45.25} connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.29} pcbY={-41.53} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={27.96} pcbY={-50.59} connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={22.75} pcbY={-12.26} connections={{
        pin3: "net.N2",
        pin1: "net.N9",
        pin2: "net.N14",
      }} type="npn" />
    <chip name="chip-4" footprint="dip8" pcbX={6.80} pcbY={-18.01} connections={{
        pin3: "net.N6",
        pin4: "net.N6",
        pin2: "net.N6",
        pin1: "net.N7",
        pin8: "net.N7",
        pin7: "net.N7",
        pin6: "net.N13",
        pin5: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={23.60} pcbY={46.57} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }} />
  </board>
)
