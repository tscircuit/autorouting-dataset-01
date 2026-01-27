/** Randomly generated circuit 291. */
export default () => (
  <board width="60.00mm" height="80.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={17.64} pcbY={-31.49} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N8",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={5.42} pcbY={-20.61} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N10",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-3.66} pcbY={14.28} connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-25.01} pcbY={17.84} connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0603" pcbX={21.43} pcbY={34.12} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} inductance="10uH" />
    <diode name="diode-2" footprint="SOD-123" pcbX={9.72} pcbY={33.42} connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-7.54} pcbY={-4.15} connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }} />
    <chip name="chip-1" footprint="soic8" pcbX={9.27} pcbY={-31.83} connections={{
        pin7: "net.N2",
        pin6: "net.N2",
        pin3: "net.N2",
        pin4: "net.N3",
        pin8: "net.N3",
        pin2: "net.N4",
        pin5: "net.N6",
        pin1: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="pinrow6" pcbX={-17.05} pcbY={-35.33} connections={{
        pin2: "net.N3",
        pin1: "net.N3",
        pin5: "net.N5",
        pin3: "net.N7",
        pin6: "net.N8",
        pin4: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-0.88} pcbY={-37.89} connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }} />
  </board>
)
