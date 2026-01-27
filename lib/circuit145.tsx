/** Randomly generated circuit 145. */
export default () => (
  <board width="140.00mm" height="112.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={24.00} pcbY={38.03} connections={{
        pin3: "net.N3",
        pin1: "net.N7",
        pin2: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-43.31} pcbY={42.48} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-2.80} pcbY={21.02} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N11",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-58.07} pcbY={-26.58} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-23.84} pcbY={0.39} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={7.01} pcbY={-6.84} connections={{
        pin2: "net.N1",
        pin7: "net.N2",
        pin8: "net.N5",
        pin3: "net.N5",
        pin5: "net.N5",
        pin4: "net.N8",
        pin1: "net.N10",
        pin6: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={55.97} pcbY={14.57} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={27.25} pcbY={-5.82} connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0603" pcbX={-13.81} pcbY={0.98} connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={44.80} pcbY={29.52} connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-60.54} pcbY={24.57} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} />
    <capacitor name="capacitor-3" footprint="0603" pcbX={17.68} pcbY={-51.13} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <resistor name="resistor-4" footprint="0603" pcbX={13.50} pcbY={11.09} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} resistance="1k" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-52.95} pcbY={-5.94} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N9",
      }} type="npn" />
  </board>
)
