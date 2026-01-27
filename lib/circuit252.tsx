/** Randomly generated circuit 252. */
export default () => (
  <board width="30.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={0.27} pcbY={-2.56} connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }} resistance="1k" />
    <resistor name="resistor-2" footprint="0603" pcbX={8.20} pcbY={2.33} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }} resistance="1k" />
    <chip name="chip-1" footprint="soic8" pcbX={-10.97} pcbY={-5.37} connections={{
        pin8: "net.N1",
        pin1: "net.N2",
        pin4: "net.N3",
        pin7: "net.N4",
        pin3: "net.N4",
        pin5: "net.N4",
        pin2: "net.N5",
        pin6: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.12} pcbY={-5.50} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-4.24} pcbY={9.40} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
