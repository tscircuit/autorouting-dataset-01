/** Randomly generated circuit 175. */
export default () => (
  <board width="72.00mm" height="48.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-0.40} pcbY={0.23} connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-24.54} pcbY={-12.88} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0402" pcbX={-16.88} pcbY={-0.25} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={17.21} pcbY={-5.77} connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }} resistance="1k" />
    <resistor name="resistor-4" footprint="0603" pcbX={-20.57} pcbY={13.12} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <inductor name="inductor-2" footprint="0603" pcbX={15.05} pcbY={-19.45} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} inductance="10uH" />
    <resistor name="resistor-5" footprint="0603" pcbX={-10.35} pcbY={0.74} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={-2.41} pcbY={-11.11} connections={{
        pin3: "net.N1",
        pin6: "net.N1",
        pin14: "net.N2",
        pin4: "net.N3",
        pin10: "net.N5",
        pin13: "net.N6",
        pin1: "net.N7",
        pin16: "net.N9",
        pin15: "net.N9",
        pin2: "net.N10",
        pin8: "net.N10",
        pin5: "net.N11",
        pin11: "net.N11",
        pin7: "net.N12",
        pin9: "net.N12",
        pin12: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0402" pcbX={17.85} pcbY={17.45} connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={4.67} pcbY={16.95} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <diode name="diode-1" footprint="SOD-123" pcbX={25.22} pcbY={-17.57} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} />
    <resistor name="resistor-6" footprint="0402" pcbX={-28.59} pcbY={-1.96} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} resistance="1k" />
  </board>
)
