/** Randomly generated circuit 167. */
export default () => (
  <board width="70.00mm" height="42.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={-6.09} pcbY={11.79} connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-21.35} pcbY={16.52} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} />
    <inductor name="inductor-2" footprint="0402" pcbX={29.41} pcbY={-15.93} connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-8.18} pcbY={-16.52} connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-23.44} pcbY={-10.53} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N7",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-10.63} pcbY={6.23} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N7",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={8.92} pcbY={-19.41} connections={{
        pin2: "net.N1",
        pin5: "net.N5",
        pin1: "net.N5",
        pin3: "net.N6",
        pin4: "net.N6",
        pin6: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
