/** Randomly generated circuit 104. */
export default () => (
  <board width="130.00mm" height="78.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={58.64} pcbY={-3.87} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={18.19} pcbY={20.74} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-19.65} pcbY={12.67} connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={5.57} pcbY={16.91} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={-9.90} pcbY={-25.35} connections={{
        pin4: "net.N3",
        pin5: "net.N4",
        pin7: "net.N4",
        pin2: "net.N6",
        pin3: "net.N7",
        pin6: "net.N8",
        pin1: "net.N12",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={-47.42} pcbY={-4.17} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={43.45} pcbY={13.06} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={35.55} pcbY={28.46} connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N9",
      }} type="npn" />
    <resistor name="resistor-3" footprint="0603" pcbX={-27.92} pcbY={27.89} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} resistance="1k" />
    <chip name="chip-2" footprint="dip8" pcbX={-59.22} pcbY={-9.78} connections={{
        pin2: "net.N2",
        pin5: "net.N2",
        pin1: "net.N6",
        pin4: "net.N7",
        pin8: "net.N9",
        pin3: "net.N10",
        pin6: "net.N11",
        pin7: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="dip8" pcbX={5.86} pcbY={-18.79} connections={{
        pin1: "net.N2",
        pin7: "net.N3",
        pin6: "net.N7",
        pin8: "net.N8",
        pin2: "net.N9",
        pin3: "net.N10",
        pin4: "net.N12",
        pin5: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-4" footprint="0603" pcbX={63.34} pcbY={14.28} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={44.00} pcbY={-7.50} connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N7",
      }} type="npn" />
  </board>
)
