/** Randomly generated circuit 194. */
export default () => (
  <board width="32.00mm" height="64.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.39} pcbY={-26.09} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-2.53} pcbY={-7.64} connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-8.44} pcbY={7.41} connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-15.21} pcbY={-13.83} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={14.10} pcbY={30.71} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={6.86} pcbY={-22.78} connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={10.11} pcbY={4.36} connections={{
        pin7: "net.N1",
        pin11: "net.N1",
        pin6: "net.N2",
        pin15: "net.N2",
        pin13: "net.N3",
        pin16: "net.N3",
        pin14: "net.N5",
        pin4: "net.N7",
        pin10: "net.N8",
        pin5: "net.N9",
        pin2: "net.N9",
        pin1: "net.N10",
        pin9: "net.N10",
        pin3: "net.N10",
        pin8: "net.N11",
        pin12: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-6" footprint="0603" pcbX={-4.25} pcbY={9.21} connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
  </board>
)
