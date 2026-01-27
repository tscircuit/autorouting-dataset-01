/** Randomly generated circuit 260. */
export default () => (
  <board width="64.00mm" height="80.00mm">
    <inductor name="inductor-1" footprint="0603" pcbX={27.85} pcbY={-39.33} connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }} inductance="10uH" />
    <chip name="chip-1" footprint="dip8" pcbX={-11.95} pcbY={-31.07} connections={{
        pin8: "net.N1",
        pin5: "net.N2",
        pin2: "net.N3",
        pin3: "net.N5",
        pin4: "net.N7",
        pin6: "net.N8",
        pin7: "net.N9",
        pin1: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={30.35} pcbY={-9.40} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={0.57} pcbY={14.91} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} capacitance="0.1uF" />
    <inductor name="inductor-2" footprint="0402" pcbX={3.38} pcbY={-8.23} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={15.24} pcbY={20.70} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} capacitance="0.1uF" />
    <inductor name="inductor-3" footprint="0402" pcbX={-23.58} pcbY={-15.42} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} inductance="10uH" />
    <capacitor name="capacitor-4" footprint="0603" pcbX={-17.90} pcbY={24.55} connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
