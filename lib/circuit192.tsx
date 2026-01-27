/** Randomly generated circuit 192. */
export default () => (
  <board width="70.00mm" height="56.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={11.62} pcbY={-9.74} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={16.74} pcbY={-14.69} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic16" pcbX={19.35} pcbY={12.28} connections={{
        pin4: "net.N1",
        pin9: "net.N2",
        pin16: "net.N3",
        pin6: "net.N5",
        pin10: "net.N5",
        pin11: "net.N8",
        pin8: "net.N8",
        pin13: "net.N9",
        pin7: "net.N9",
        pin12: "net.N11",
        pin5: "net.N12",
        pin1: "net.N12",
        pin2: "net.N12",
        pin3: "net.N13",
        pin15: "net.N13",
        pin14: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={21.70} pcbY={-17.25} connections={{
        pin3: "net.N1",
        pin2: "net.N6",
        pin1: "net.N11",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={-30.49} pcbY={12.30} connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-5.72} pcbY={-1.30} connections={{
        pin7: "net.N1",
        pin4: "net.N2",
        pin1: "net.N3",
        pin8: "net.N3",
        pin13: "net.N4",
        pin10: "net.N6",
        pin9: "net.N6",
        pin12: "net.N7",
        pin3: "net.N9",
        pin14: "net.N10",
        pin6: "net.N10",
        pin11: "net.N12",
        pin15: "net.N13",
        pin5: "net.N13",
        pin16: "net.N14",
        pin2: "net.N14",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-3" footprint="0603" pcbX={28.46} pcbY={24.46} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} resistance="1k" />
  </board>
)
