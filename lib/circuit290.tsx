/** Randomly generated circuit 290. */
export default () => (
  <board width="130.00mm" height="26.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-18.39} pcbY={-2.57} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-54.60} pcbY={-6.05} connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} inductance="10uH" />
    <resistor name="resistor-1" footprint="0603" pcbX={53.13} pcbY={-1.23} connections={{
        pin1: "net.N4",
        pin2: "net.N12",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-62.39} pcbY={9.26} connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-43.88} pcbY={10.00} connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0402" pcbX={-62.57} pcbY={0.78} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-62.82} pcbY={-12.01} connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }} />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-16.65} pcbY={-9.50} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-6.74} pcbY={7.60} connections={{
        pin1: "net.N4",
        pin3: "net.N5",
        pin5: "net.N8",
        pin4: "net.N9",
        pin6: "net.N14",
        pin2: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-2" footprint="0603" pcbX={23.93} pcbY={10.00} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0603" pcbX={-24.06} pcbY={-5.14} connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={42.61} pcbY={5.72} connections={{
        pin2: "net.N2",
        pin6: "net.N2",
        pin7: "net.N3",
        pin3: "net.N3",
        pin4: "net.N5",
        pin8: "net.N6",
        pin1: "net.N12",
        pin5: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={2.97} pcbY={-9.73} connections={{
        pin4: "net.N1",
        pin10: "net.N1",
        pin5: "net.N1",
        pin8: "net.N2",
        pin3: "net.N4",
        pin6: "net.N4",
        pin14: "net.N5",
        pin1: "net.N6",
        pin15: "net.N8",
        pin9: "net.N8",
        pin2: "net.N10",
        pin13: "net.N10",
        pin7: "net.N11",
        pin12: "net.N12",
        pin11: "net.N13",
        pin16: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
