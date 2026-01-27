/** Randomly generated circuit 249. */
export default () => (
  <board width="12.00mm" height="24.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={0.43} pcbY={-5.49} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0603" pcbX={1.48} pcbY={8.67} connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={0.09} pcbY={0.81} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} />
    <chip name="chip-1" footprint="soic16" pcbX={-0.53} pcbY={-9.98} connections={{
        pin6: "net.N1",
        pin14: "net.N1",
        pin11: "net.N1",
        pin4: "net.N2",
        pin10: "net.N3",
        pin7: "net.N3",
        pin16: "net.N5",
        pin2: "net.N5",
        pin3: "net.N6",
        pin5: "net.N6",
        pin13: "net.N6",
        pin9: "net.N7",
        pin12: "net.N8",
        pin1: "net.N8",
        pin8: "net.N9",
        pin15: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.23} pcbY={6.66} connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={4.90} pcbY={6.06} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} resistance="1k" />
  </board>
)
