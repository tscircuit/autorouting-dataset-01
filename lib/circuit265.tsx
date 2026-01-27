/** Randomly generated circuit 265. */
export default () => (
  <board width="40.00mm" height="10.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-6.78} pcbY={0.44} connections={{
        pin8: "net.N1",
        pin3: "net.N1",
        pin7: "net.N2",
        pin2: "net.N2",
        pin6: "net.N3",
        pin1: "net.N4",
        pin4: "net.N5",
        pin5: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={11.05} pcbY={3.04} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-15.74} pcbY={-2.85} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={8.87} pcbY={-3.44} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-12.66} pcbY={3.65} connections={{
        pin2: "net.N3",
        pin3: "net.N4",
        pin1: "net.N5",
      }} type="npn" />
  </board>
)
