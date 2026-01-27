/** Randomly generated circuit 110. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={8.20} pcbY={-4.79} connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-8.40} pcbY={-1.75} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-3.70} pcbY={-7.57} connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={2.35} pcbY={4.89} connections={{
        pin10: "net.N1",
        pin7: "net.N1",
        pin9: "net.N2",
        pin8: "net.N2",
        pin4: "net.N4",
        pin1: "net.N7",
        pin6: "net.N7",
        pin2: "net.N8",
        pin5: "net.N8",
        pin12: "net.N9",
        pin11: "net.N9",
        pin13: "net.N10",
        pin15: "net.N11",
        pin3: "net.N12",
        pin14: "net.N12",
        pin16: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={4.14} pcbY={-8.72} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.62} pcbY={-8.53} connections={{
        pin2: "net.N5",
        pin3: "net.N8",
        pin1: "net.N12",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-6.02} pcbY={3.59} connections={{
        pin3: "net.N3",
        pin2: "net.N5",
        pin1: "net.N12",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={7.44} pcbY={-0.71} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-0.23} pcbY={-0.95} connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={-2.29} pcbY={9.33} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
  </board>
)
