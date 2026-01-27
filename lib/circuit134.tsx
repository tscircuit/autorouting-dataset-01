/** Randomly generated circuit 134. */
export default () => (
  <board width="108.00mm" height="144.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-19.40} pcbY={65.80} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N13",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0603" pcbX={-6.78} pcbY={-38.13} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={25.25} pcbY={64.99} connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={10.18} pcbY={-59.65} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-20.68} pcbY={56.79} connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N14",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={10.92} pcbY={12.77} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={2.82} pcbY={62.72} connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={48.23} pcbY={-13.55} connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0402" pcbX={-42.28} pcbY={-14.70} connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }} inductance="10uH" />
    <resistor name="resistor-4" footprint="0603" pcbX={42.19} pcbY={63.88} connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }} resistance="1k" />
    <resistor name="resistor-5" footprint="0603" pcbX={-13.52} pcbY={-59.63} connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }} resistance="1k" />
    <resistor name="resistor-6" footprint="0402" pcbX={31.97} pcbY={17.03} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-8.63} pcbY={38.23} connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-11.97} pcbY={-70.31} connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={1.38} pcbY={11.76} connections={{
        pin6: "net.N1",
        pin1: "net.N3",
        pin3: "net.N9",
        pin4: "net.N11",
        pin2: "net.N12",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={40.10} pcbY={-65.27} connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-1.08} pcbY={29.34} connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }} />
    <inductor name="inductor-4" footprint="0603" pcbX={-23.71} pcbY={8.64} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
