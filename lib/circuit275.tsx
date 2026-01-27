/** Randomly generated circuit 275. */
export default () => (
  <board width="16.00mm" height="32.00mm">
    <chip name="chip-1" footprint="dip8" pcbX={-2.69} pcbY={1.77} connections={{
        pin7: "net.N1",
        pin4: "net.N2",
        pin6: "net.N4",
        pin5: "net.N5",
        pin8: "net.N6",
        pin3: "net.N8",
        pin2: "net.N8",
        pin1: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={0.38} pcbY={-12.93} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-7.05} pcbY={-15.29} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} inductance="10uH" />
    <resistor name="resistor-2" footprint="0603" pcbX={-5.01} pcbY={-7.29} connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }} resistance="1k" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-1.52} pcbY={13.97} connections={{
        pin3: "net.N4",
        pin2: "net.N6",
        pin4: "net.N7",
        pin1: "net.N7",
        pin6: "net.N8",
        pin5: "net.N10",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={3.32} pcbY={-6.82} connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }} />
    <chip name="chip-3" footprint="dip8" pcbX={0.00} pcbY={0.00} connections={{
        pin8: "net.N1",
        pin1: "net.N1",
        pin3: "net.N2",
        pin4: "net.N3",
        pin2: "net.N9",
        pin7: "net.N9",
        pin6: "net.N10",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-4.19} pcbY={-11.72} connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
  </board>
)
