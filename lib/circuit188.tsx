/** Randomly generated circuit 188. */
export default () => (
  <board width="64.00mm" height="96.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={24.64} pcbY={15.92} connections={{
        pin3: "net.N3",
        pin2: "net.N10",
        pin1: "net.N12",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={18.05} pcbY={2.71} connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={4.35} pcbY={-21.13} connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-16.70} pcbY={-9.90} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-7.40} pcbY={-17.29} connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-25.95} pcbY={-30.81} connections={{
        pin2: "net.N4",
        pin3: "net.N11",
        pin1: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={6.15} pcbY={-39.35} connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-7.66} pcbY={21.17} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-22.04} pcbY={-7.82} connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={-23.58} pcbY={-19.26} connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={23.76} pcbY={-21.65} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={7.04} pcbY={13.04} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="SOD-123" pcbX={30.02} pcbY={-18.22} connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} />
    <diode name="diode-5" footprint="SOD-123" pcbX={0.52} pcbY={13.67} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <diode name="diode-6" footprint="SOD-123" pcbX={-15.74} pcbY={21.94} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} />
    <chip name="chip-1" footprint="soic16" pcbX={12.70} pcbY={-11.39} connections={{
        pin13: "net.N1",
        pin2: "net.N1",
        pin10: "net.N2",
        pin7: "net.N3",
        pin15: "net.N4",
        pin16: "net.N4",
        pin4: "net.N5",
        pin3: "net.N6",
        pin14: "net.N6",
        pin11: "net.N7",
        pin12: "net.N8",
        pin5: "net.N8",
        pin8: "net.N11",
        pin6: "net.N13",
        pin9: "net.N13",
        pin1: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
