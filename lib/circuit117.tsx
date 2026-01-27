/** Randomly generated circuit 117. */
export default () => (
  <board width="104.00mm" height="78.00mm">
    <capacitor name="capacitor-1" footprint="0402" pcbX={33.74} pcbY={10.76} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-28.83} pcbY={37.03} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={-20.29} pcbY={-10.79} connections={{
        pin4: "net.N3",
        pin6: "net.N4",
        pin2: "net.N5",
        pin5: "net.N6",
        pin3: "net.N7",
        pin1: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-38.45} pcbY={19.73} connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-42.58} pcbY={-16.72} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
        pin3: "net.N12",
      }} type="npn" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={19.44} pcbY={22.07} connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="dip8" pcbX={22.15} pcbY={34.82} connections={{
        pin5: "net.N1",
        pin6: "net.N2",
        pin4: "net.N3",
        pin1: "net.N4",
        pin8: "net.N5",
        pin3: "net.N9",
        pin2: "net.N9",
        pin7: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={31.53} pcbY={-30.05} connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }} inductance="10uH" />
    <capacitor name="capacitor-5" footprint="0402" pcbX={48.53} pcbY={33.50} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={-9.89} pcbY={8.21} connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }} inductance="10uH" />
    <chip name="chip-3" footprint="dip8" pcbX={-11.48} pcbY={34.93} connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin5: "net.N3",
        pin6: "net.N4",
        pin7: "net.N11",
        pin8: "net.N12",
        pin4: "net.N12",
        pin3: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-3" footprint="0603" pcbX={48.82} pcbY={-21.99} connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }} inductance="10uH" />
    <diode name="diode-1" footprint="SOD-123" pcbX={42.10} pcbY={18.38} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} />
  </board>
)
