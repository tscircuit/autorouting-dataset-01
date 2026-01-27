/** Randomly generated circuit 206. */
export default () => (
  <board width="130.00mm" height="52.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={29.07} pcbY={-3.49} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.83} pcbY={21.50} connections={{
        pin3: "net.N7",
        pin1: "net.N10",
        pin2: "net.N13",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0603" pcbX={64.12} pcbY={-20.09} connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-28.43} pcbY={-18.71} connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={9.55} pcbY={-11.94} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-2" footprint="0402" pcbX={49.52} pcbY={-9.25} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={21.47} pcbY={10.98} connections={{
        pin6: "net.N1",
        pin1: "net.N3",
        pin4: "net.N3",
        pin2: "net.N7",
        pin3: "net.N12",
        pin5: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-47.98} pcbY={-0.98} connections={{
        pin2: "net.N5",
        pin1: "net.N8",
        pin3: "net.N13",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-50.59} pcbY={-12.05} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
        pin3: "net.N8",
      }} type="npn" />
    <diode name="diode-3" footprint="SOD-123" pcbX={39.58} pcbY={23.56} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-11.29} pcbY={-20.36} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-5.24} pcbY={6.54} connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={63.01} pcbY={-5.82} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} resistance="1k" />
  </board>
)
