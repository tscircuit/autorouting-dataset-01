/** Randomly generated circuit 264. */
export default () => (
  <board width="78.00mm" height="26.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-29.82} pcbY={-6.61} connections={{
        pin1: "net.N3",
        pin3: "net.N3",
        pin2: "net.N8",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={17.02} pcbY={-7.67} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={5.33} pcbY={0.47} connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-12.51} pcbY={2.09} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={17.16} pcbY={9.10} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={25.61} pcbY={-10.84} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={-34.60} pcbY={1.32} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} />
    <chip name="chip-1" footprint="pinrow6" pcbX={-5.06} pcbY={-11.18} connections={{
        pin6: "net.N1",
        pin1: "net.N8",
        pin2: "net.N9",
        pin4: "net.N9",
        pin3: "net.N10",
        pin5: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={36.70} pcbY={4.78} connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N6",
      }} type="npn" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-28.42} pcbY={-11.35} connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-11.83} pcbY={-2.63} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-35.32} pcbY={7.47} connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }} inductance="10uH" />
    <diode name="diode-5" footprint="SOD-123" pcbX={21.38} pcbY={-2.27} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} />
  </board>
)
