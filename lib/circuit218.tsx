/** Randomly generated circuit 218. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-13.06} pcbY={16.23} connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N6",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-8.64} pcbY={-17.82} connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={5.00} pcbY={0.93} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-8.91} pcbY={7.92} connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-4.18} pcbY={-3.28} connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-18.16} pcbY={-1.94} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={17.12} pcbY={17.42} connections={{
        pin1: "net.N1",
        pin6: "net.N3",
        pin3: "net.N3",
        pin4: "net.N3",
        pin7: "net.N4",
        pin2: "net.N4",
        pin5: "net.N4",
        pin8: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
