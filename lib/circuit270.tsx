/** Randomly generated circuit 270. */
export default () => (
  <board width="44.00mm" height="88.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-9.16} pcbY={-19.99} connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-19.28} pcbY={-35.27} connections={{
        pin3: "net.N2",
        pin1: "net.N7",
        pin2: "net.N8",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-10.72} pcbY={17.87} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={18.69} pcbY={24.76} connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-19.75} pcbY={4.72} connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={2.26} pcbY={-39.76} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0603" pcbX={20.34} pcbY={-22.81} connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }} inductance="10uH" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-1.23} pcbY={28.44} connections={{
        pin1: "net.N5",
        pin2: "net.N10",
        pin3: "net.N12",
      }} type="npn" />
    <chip name="chip-1" footprint="soic16" pcbX={8.27} pcbY={-0.00} connections={{
        pin3: "net.N2",
        pin10: "net.N2",
        pin11: "net.N3",
        pin7: "net.N3",
        pin16: "net.N4",
        pin2: "net.N4",
        pin1: "net.N5",
        pin6: "net.N5",
        pin13: "net.N6",
        pin12: "net.N6",
        pin15: "net.N7",
        pin5: "net.N8",
        pin14: "net.N9",
        pin9: "net.N11",
        pin4: "net.N12",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={3.93} pcbY={37.85} connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }} resistance="1k" />
    <inductor name="inductor-3" footprint="0402" pcbX={-1.38} pcbY={-2.39} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }} inductance="10uH" />
  </board>
)
