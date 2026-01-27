/** Randomly generated circuit 132. */
export default () => (
  <board width="56.00mm" height="70.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-9.72} pcbY={2.73} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-6.19} pcbY={-9.73} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="soic8" pcbX={5.16} pcbY={-7.21} connections={{
        pin7: "net.N1",
        pin4: "net.N4",
        pin5: "net.N5",
        pin8: "net.N5",
        pin3: "net.N6",
        pin1: "net.N8",
        pin2: "net.N8",
        pin6: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={8.59} pcbY={25.19} connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }} />
    <chip name="chip-2" footprint="pinrow6" pcbX={22.44} pcbY={13.45} connections={{
        pin6: "net.N1",
        pin3: "net.N2",
        pin4: "net.N2",
        pin5: "net.N3",
        pin2: "net.N3",
        pin1: "net.N5",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={21.99} pcbY={-20.36} connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }} resistance="1k" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-5.62} pcbY={-34.26} connections={{
        pin1: "net.N2",
        pin3: "net.N6",
        pin2: "net.N6",
      }} type="npn" />
  </board>
)
