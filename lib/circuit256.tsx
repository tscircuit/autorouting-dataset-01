/** Randomly generated circuit 256. */
export default () => (
  <board width="30.00mm" height="10.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={5.40} pcbY={4.26} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-6.93} pcbY={-0.67} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={0.55} pcbY={2.28} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={11.92} pcbY={2.58} connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic16" pcbX={2.04} pcbY={-2.84} connections={{
        pin4: "net.N1",
        pin9: "net.N1",
        pin3: "net.N2",
        pin13: "net.N2",
        pin16: "net.N2",
        pin2: "net.N3",
        pin10: "net.N4",
        pin14: "net.N4",
        pin15: "net.N5",
        pin11: "net.N5",
        pin7: "net.N5",
        pin8: "net.N5",
        pin6: "net.N6",
        pin1: "net.N6",
        pin12: "net.N6",
        pin5: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
