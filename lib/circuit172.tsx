/** Randomly generated circuit 172. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={7.45} pcbY={0.47} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-4.11} pcbY={-0.06} connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={5.07} pcbY={-2.27} connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={-2.98} pcbY={-6.94} connections={{
        pin9: "net.N1",
        pin5: "net.N1",
        pin2: "net.N2",
        pin4: "net.N3",
        pin7: "net.N4",
        pin16: "net.N7",
        pin13: "net.N7",
        pin11: "net.N9",
        pin15: "net.N9",
        pin10: "net.N10",
        pin8: "net.N11",
        pin1: "net.N11",
        pin14: "net.N12",
        pin12: "net.N14",
        pin3: "net.N14",
        pin6: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin1: "net.N4",
        pin4: "net.N6",
        pin7: "net.N8",
        pin5: "net.N10",
        pin8: "net.N11",
        pin3: "net.N13",
        pin2: "net.N14",
        pin6: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-6.44} pcbY={6.22} connections={{
        pin1: "net.N5",
        pin3: "net.N6",
        pin2: "net.N13",
      }} type="npn" />
    <chip name="chip-3" footprint="soic8" pcbX={0.00} pcbY={0.00} connections={{
        pin6: "net.N2",
        pin2: "net.N3",
        pin1: "net.N4",
        pin5: "net.N8",
        pin8: "net.N9",
        pin3: "net.N12",
        pin7: "net.N12",
        pin4: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0402" pcbX={-5.61} pcbY={-5.14} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0402" pcbX={-6.79} pcbY={-2.01} connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }} resistance="1k" />
  </board>
)
