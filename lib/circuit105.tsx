/** Randomly generated circuit 105. */
export default () => (
  <board width="140.00mm" height="84.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-15.62} pcbY={-26.99} connections={{
        pin4: "net.N2",
        pin5: "net.N5",
        pin1: "net.N7",
        pin3: "net.N8",
        pin8: "net.N12",
        pin7: "net.N12",
        pin6: "net.N13",
        pin2: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={1.11} pcbY={2.14} connections={{
        pin2: "net.N2",
        pin1: "net.N15",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-55.79} pcbY={-33.85} connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={29.34} pcbY={-35.77} connections={{
        pin4: "net.N1",
        pin1: "net.N3",
        pin2: "net.N3",
        pin5: "net.N8",
        pin8: "net.N8",
        pin6: "net.N9",
        pin3: "net.N10",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={49.96} pcbY={38.65} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-32.21} pcbY={-34.67} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-65.53} pcbY={40.18} connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-9.39} pcbY={-3.00} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={41.97} pcbY={-6.98} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-44.05} pcbY={19.52} connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={30.08} pcbY={7.63} connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-3" footprint="0402" pcbX={4.27} pcbY={-0.89} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={69.19} pcbY={-31.22} connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }} resistance="1k" />
    <chip name="chip-3" footprint="soic8" pcbX={-18.90} pcbY={19.73} connections={{
        pin8: "net.N1",
        pin4: "net.N3",
        pin7: "net.N6",
        pin6: "net.N7",
        pin3: "net.N10",
        pin2: "net.N10",
        pin1: "net.N11",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
