/** Randomly generated circuit 193. */
export default () => (
  <board width="72.00mm" height="72.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-17.46} pcbY={14.76} connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={18.14} pcbY={5.85} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={16.60} pcbY={20.85} connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={32.36} pcbY={16.55} connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={7.47} pcbY={-22.68} connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={30.86} pcbY={3.34} connections={{
        pin3: "net.N4",
        pin4: "net.N4",
        pin1: "net.N5",
        pin6: "net.N6",
        pin7: "net.N7",
        pin8: "net.N11",
        pin2: "net.N15",
        pin5: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0603" pcbX={20.59} pcbY={-21.65} connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }} inductance="10uH" />
    <chip name="chip-2" footprint="soic16" pcbX={-0.19} pcbY={24.29} connections={{
        pin4: "net.N1",
        pin7: "net.N1",
        pin16: "net.N2",
        pin10: "net.N2",
        pin11: "net.N4",
        pin15: "net.N5",
        pin3: "net.N7",
        pin13: "net.N8",
        pin8: "net.N8",
        pin1: "net.N10",
        pin14: "net.N11",
        pin5: "net.N11",
        pin12: "net.N12",
        pin9: "net.N13",
        pin6: "net.N16",
        pin2: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="pinrow6" pcbX={8.99} pcbY={-34.51} connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin5: "net.N8",
        pin6: "net.N9",
        pin2: "net.N10",
        pin4: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
