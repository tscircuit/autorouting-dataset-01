/** Randomly generated circuit 121. */
export default () => (
  <board width="90.00mm" height="54.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={44.16} pcbY={24.21} connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0603" pcbX={-6.81} pcbY={-2.99} connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={16.25} pcbY={23.74} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
        pin3: "net.N9",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-10.70} pcbY={19.23} connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }} />
    <resistor name="resistor-2" footprint="0603" pcbX={30.40} pcbY={-11.40} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={2.51} pcbY={5.67} connections={{
        pin1: "net.N1",
        pin4: "net.N2",
        pin2: "net.N3",
        pin6: "net.N7",
        pin8: "net.N7",
        pin3: "net.N10",
        pin5: "net.N11",
        pin7: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0402" pcbX={2.03} pcbY={-12.25} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-29.86} pcbY={2.61} connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic16" pcbX={-33.39} pcbY={19.54} connections={{
        pin13: "net.N1",
        pin9: "net.N2",
        pin2: "net.N2",
        pin5: "net.N3",
        pin7: "net.N3",
        pin16: "net.N4",
        pin4: "net.N4",
        pin15: "net.N4",
        pin8: "net.N5",
        pin6: "net.N6",
        pin14: "net.N8",
        pin3: "net.N8",
        pin1: "net.N9",
        pin11: "net.N10",
        pin10: "net.N12",
        pin12: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
