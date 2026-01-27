/** Randomly generated circuit 187. */
export default () => (
  <board width="36.00mm" height="48.00mm">
    <chip name="chip-1" footprint="soic8" pcbX={-14.34} pcbY={-6.20} connections={{
        pin6: "net.N1",
        pin7: "net.N1",
        pin5: "net.N2",
        pin4: "net.N2",
        pin8: "net.N2",
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N4",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-13.62} pcbY={-13.63} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={0.18} pcbY={-3.85} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.10} pcbY={-16.04} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={16.12} pcbY={-4.17} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={10.49} pcbY={-13.73} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
