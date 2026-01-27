/** Randomly generated circuit 150. */
export default () => (
  <board width="56.00mm" height="14.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-17.89} pcbY={-4.17} connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.14} pcbY={2.82} connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={21.92} pcbY={-4.74} connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin10: "net.N3",
        pin4: "net.N4",
        pin14: "net.N5",
        pin11: "net.N7",
        pin16: "net.N7",
        pin7: "net.N8",
        pin5: "net.N8",
        pin12: "net.N8",
        pin6: "net.N9",
        pin9: "net.N9",
        pin8: "net.N10",
        pin15: "net.N11",
        pin13: "net.N12",
        pin2: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={18.56} pcbY={5.61} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
        pin3: "net.N6",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-14.80} pcbY={5.27} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="soic8" pcbX={5.13} pcbY={-2.19} connections={{
        pin7: "net.N1",
        pin3: "net.N4",
        pin5: "net.N5",
        pin1: "net.N6",
        pin6: "net.N6",
        pin2: "net.N6",
        pin4: "net.N7",
        pin8: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.00} pcbY={-5.56} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N11",
      }} type="npn" />
  </board>
)
