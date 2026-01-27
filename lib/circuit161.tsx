/** Randomly generated circuit 161. */
export default () => (
  <board width="28.00mm" height="14.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={4.80} pcbY={2.90} connections={{
        pin2: "net.N5",
        pin3: "net.N9",
        pin1: "net.N13",
      }} type="npn" />
    <chip name="chip-1" footprint="soic16" pcbX={-5.12} pcbY={3.81} connections={{
        pin12: "net.N1",
        pin2: "net.N1",
        pin10: "net.N1",
        pin3: "net.N2",
        pin11: "net.N2",
        pin14: "net.N2",
        pin4: "net.N3",
        pin8: "net.N4",
        pin5: "net.N5",
        pin13: "net.N6",
        pin15: "net.N7",
        pin16: "net.N8",
        pin1: "net.N10",
        pin6: "net.N11",
        pin7: "net.N13",
        pin9: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-0.91} pcbY={-0.94} connections={{
        pin8: "net.N1",
        pin6: "net.N3",
        pin3: "net.N4",
        pin1: "net.N9",
        pin7: "net.N11",
        pin4: "net.N11",
        pin5: "net.N12",
        pin2: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic8" pcbX={-9.17} pcbY={-1.80} connections={{
        pin1: "net.N3",
        pin5: "net.N3",
        pin2: "net.N6",
        pin4: "net.N8",
        pin3: "net.N9",
        pin6: "net.N9",
        pin8: "net.N10",
        pin7: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={1.07} pcbY={-5.42} connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={10.24} pcbY={-3.95} connections={{
        pin1: "net.N14",
        pin2: "net.N14",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.50} pcbY={-5.72} connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
  </board>
)
