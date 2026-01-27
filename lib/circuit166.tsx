/** Randomly generated circuit 166. */
export default () => (
  <board width="50.00mm" height="50.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-18.27} pcbY={-0.41} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={-6.57} pcbY={6.33} connections={{
        pin7: "net.N1",
        pin6: "net.N2",
        pin8: "net.N2",
        pin5: "net.N2",
        pin4: "net.N4",
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-14.47} pcbY={-10.44} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={5.33} pcbY={8.44} connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.25} pcbY={19.48} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N4",
      }} type="npn" />
  </board>
)
