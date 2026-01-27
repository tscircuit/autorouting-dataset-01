/** Randomly generated circuit 216. */
export default () => (
  <board width="128.00mm" height="96.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={43.30} pcbY={-39.98} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-56.25} pcbY={45.13} connections={{
        pin2: "net.N3",
        pin5: "net.N4",
        pin3: "net.N7",
        pin6: "net.N10",
        pin4: "net.N10",
        pin8: "net.N12",
        pin7: "net.N15",
        pin1: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-19.10} pcbY={-39.00} connections={{
        pin2: "net.N17",
        pin1: "net.N18",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-18.12} pcbY={8.30} connections={{
        pin2: "net.N2",
        pin4: "net.N5",
        pin6: "net.N7",
        pin3: "net.N14",
        pin5: "net.N14",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-26.36} pcbY={-21.88} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-18.12} pcbY={35.91} connections={{
        pin2: "net.N3",
        pin3: "net.N10",
        pin1: "net.N13",
      }} type="npn" />
    <chip name="chip-3" footprint="pinrow6" pcbX={-37.87} pcbY={-30.78} connections={{
        pin5: "net.N5",
        pin3: "net.N8",
        pin1: "net.N9",
        pin2: "net.N11",
        pin4: "net.N15",
        pin6: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-34.82} pcbY={20.60} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
        pin3: "net.N17",
      }} type="npn" />
    <chip name="chip-4" footprint="dip8" pcbX={-59.69} pcbY={-26.98} connections={{
        pin6: "net.N1",
        pin3: "net.N2",
        pin1: "net.N2",
        pin8: "net.N3",
        pin2: "net.N3",
        pin4: "net.N4",
        pin5: "net.N16",
        pin7: "net.N18",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={43.14} pcbY={-28.34} connections={{
        pin2: "net.N8",
        pin3: "net.N9",
        pin1: "net.N18",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-3.20} pcbY={-35.20} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={7.99} pcbY={31.69} connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N16",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={31.88} pcbY={-8.09} connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={7.58} pcbY={-10.60} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-59.61} pcbY={-34.98} connections={{
        pin2: "net.N9",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={14.70} pcbY={36.19} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
  </board>
)
