/** Randomly generated circuit 297. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={8.41} pcbY={-0.94} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-11.10} pcbY={3.98} connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.49} pcbY={-13.08} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={7.20} pcbY={3.97} connections={{
        pin7: "net.N1",
        pin5: "net.N3",
        pin3: "net.N4",
        pin4: "net.N5",
        pin2: "net.N6",
        pin8: "net.N7",
        pin1: "net.N7",
        pin6: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={3.71} pcbY={3.10} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-3.11} pcbY={5.00} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-4.09} pcbY={-2.65} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
  </board>
)
