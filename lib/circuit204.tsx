/** Randomly generated circuit 204. */
export default () => (
  <board width="80.00mm" height="100.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-12.43} pcbY={20.31} connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={26.87} pcbY={12.15} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={17.42} pcbY={-4.11} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-28.48} pcbY={-49.53} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-20.06} pcbY={5.30} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={-7.25} pcbY={-37.00} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-10.40} pcbY={-27.50} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={5.87} pcbY={-1.79} connections={{
        pin5: "net.N2",
        pin16: "net.N4",
        pin3: "net.N4",
        pin12: "net.N5",
        pin2: "net.N6",
        pin8: "net.N6",
        pin4: "net.N7",
        pin14: "net.N7",
        pin1: "net.N7",
        pin11: "net.N8",
        pin10: "net.N8",
        pin9: "net.N9",
        pin6: "net.N9",
        pin13: "net.N10",
        pin7: "net.N10",
        pin15: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={33.59} pcbY={-18.00} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={16.68} pcbY={40.80} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
        pin3: "net.N11",
      }} type="npn" />
  </board>
)
