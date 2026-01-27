/** Randomly generated circuit 130. */
export default () => (
  <board width="20.00mm" height="50.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={1.06} pcbY={-0.14} connections={{
        pin1: "net.N1",
        pin7: "net.N2",
        pin5: "net.N4",
        pin6: "net.N4",
        pin3: "net.N5",
        pin8: "net.N6",
        pin4: "net.N7",
        pin2: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="pinrow6" pcbX={4.20} pcbY={17.61} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin4: "net.N3",
        pin5: "net.N5",
        pin3: "net.N7",
        pin6: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={6.23} pcbY={-16.40} connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-3.29} pcbY={15.89} connections={{
        pin2: "net.N6",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-7.39} pcbY={-5.45} connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N6",
      }} type="npn" />
  </board>
)
