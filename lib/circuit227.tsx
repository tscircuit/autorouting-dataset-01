/** Randomly generated circuit 227. */
export default () => (
  <board width="36.00mm" height="144.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-1.16} pcbY={28.21} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-1.74} pcbY={9.68} connections={{
        pin2: "net.N13",
        pin1: "net.N19",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={-2.47} pcbY={-6.66} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-12.74} pcbY={-53.51} connections={{
        pin1: "net.N15",
        pin2: "net.N15",
      }} />
    <resistor name="resistor-4" footprint="0402" pcbX={6.78} pcbY={63.81} connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={1.03} pcbY={-68.17} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={-9.46} pcbY={-16.62} connections={{
        pin1: "net.N1",
        pin14: "net.N2",
        pin16: "net.N3",
        pin12: "net.N6",
        pin10: "net.N7",
        pin7: "net.N9",
        pin2: "net.N11",
        pin13: "net.N14",
        pin4: "net.N16",
        pin8: "net.N16",
        pin11: "net.N16",
        pin5: "net.N18",
        pin9: "net.N19",
        pin3: "net.N19",
        pin15: "net.N20",
        pin6: "net.N20",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={5.75} pcbY={17.17} connections={{
        pin2: "net.N3",
        pin3: "net.N4",
        pin1: "net.N15",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={4.15} pcbY={39.46} connections={{
        pin3: "net.N7",
        pin2: "net.N8",
        pin1: "net.N12",
      }} type="npn" />
    <chip name="chip-2" footprint="soic8" pcbX={-11.80} pcbY={54.81} connections={{
        pin4: "net.N1",
        pin1: "net.N2",
        pin6: "net.N3",
        pin7: "net.N3",
        pin2: "net.N5",
        pin5: "net.N8",
        pin3: "net.N10",
        pin8: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={0.01} pcbY={-26.63} connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={8.81} pcbY={71.00} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={5.50} pcbY={-50.99} connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={-5.89} pcbY={28.75} connections={{
        pin1: "net.N4",
        pin2: "net.N17",
      }} inductance="10uH" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-6.39} pcbY={65.98} connections={{
        pin2: "net.N7",
        pin3: "net.N8",
        pin1: "net.N12",
      }} type="npn" />
    <inductor name="inductor-3" footprint="0603" pcbX={14.56} pcbY={54.13} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-3" footprint="SOD-123" pcbX={3.49} pcbY={31.49} connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }} />
    <inductor name="inductor-4" footprint="0603" pcbX={-13.56} pcbY={-68.32} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
