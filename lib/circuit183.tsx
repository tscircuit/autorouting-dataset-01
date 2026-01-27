/** Randomly generated circuit 183. */
export default () => (
  <board width="32.00mm" height="80.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-2.62} pcbY={-17.70} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={10.66} pcbY={16.45} connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N8",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={4.55} pcbY={-26.82} connections={{
        pin6: "net.N1",
        pin5: "net.N2",
        pin8: "net.N3",
        pin4: "net.N7",
        pin7: "net.N7",
        pin3: "net.N9",
        pin2: "net.N10",
        pin1: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={4.20} pcbY={-6.71} connections={{
        pin5: "net.N1",
        pin8: "net.N2",
        pin2: "net.N2",
        pin1: "net.N3",
        pin6: "net.N7",
        pin7: "net.N9",
        pin3: "net.N9",
        pin4: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-13.92} pcbY={15.66} connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={14.19} pcbY={7.82} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} inductance="10uH" />
    <inductor name="inductor-2" footprint="0402" pcbX={13.47} pcbY={23.49} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} inductance="10uH" />
    <inductor name="inductor-3" footprint="0603" pcbX={-6.92} pcbY={16.11} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} inductance="10uH" />
  </board>
)
