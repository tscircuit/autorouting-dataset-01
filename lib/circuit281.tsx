/** Randomly generated circuit 281. */
export default () => (
  <board width="52.00mm" height="130.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={22.66} pcbY={-8.30} connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.12} pcbY={-53.02} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={8.90} pcbY={25.10} connections={{
        pin1: "net.N14",
        pin2: "net.N18",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.77} pcbY={20.49} connections={{
        pin2: "net.N4",
        pin3: "net.N12",
        pin1: "net.N17",
      }} type="npn" />
    <inductor name="inductor-1" footprint="0402" pcbX={-4.71} pcbY={57.88} connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="soic8" pcbX={-5.20} pcbY={-19.77} connections={{
        pin3: "net.N1",
        pin7: "net.N1",
        pin5: "net.N3",
        pin4: "net.N11",
        pin8: "net.N11",
        pin2: "net.N12",
        pin6: "net.N13",
        pin1: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={0.24} pcbY={41.18} connections={{
        pin3: "net.N5",
        pin2: "net.N9",
        pin1: "net.N13",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={7.63} pcbY={-41.44} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-18.32} pcbY={32.31} connections={{
        pin3: "net.N7",
        pin1: "net.N8",
        pin2: "net.N8",
      }} type="npn" />
    <resistor name="resistor-2" footprint="0603" pcbX={4.89} pcbY={47.35} connections={{
        pin1: "net.N9",
        pin2: "net.N19",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={8.76} pcbY={-13.65} connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic16" pcbX={-13.36} pcbY={-24.44} connections={{
        pin10: "net.N2",
        pin4: "net.N3",
        pin1: "net.N4",
        pin5: "net.N4",
        pin15: "net.N4",
        pin9: "net.N5",
        pin6: "net.N6",
        pin13: "net.N7",
        pin14: "net.N9",
        pin11: "net.N10",
        pin12: "net.N16",
        pin16: "net.N16",
        pin7: "net.N16",
        pin3: "net.N17",
        pin8: "net.N18",
        pin2: "net.N19",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-16.16} pcbY={18.62} connections={{
        pin2: "net.N7",
        pin1: "net.N14",
        pin3: "net.N17",
      }} type="npn" />
  </board>
)
