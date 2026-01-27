/** Randomly generated circuit 190. */
export default () => (
  <board width="100.00mm" height="100.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-42.72} pcbY={-37.77} connections={{
        pin2: "net.N10",
        pin1: "net.N10",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={-13.44} pcbY={-29.26} connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }} resistance="1k" />
    <chip name="chip-1" footprint="dip8" pcbX={12.19} pcbY={-4.33} connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin8: "net.N3",
        pin7: "net.N7",
        pin4: "net.N7",
        pin5: "net.N8",
        pin1: "net.N11",
        pin6: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={-12.06} pcbY={-13.74} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }} resistance="1k" />
    <chip name="chip-2" footprint="soic8" pcbX={13.91} pcbY={-20.61} connections={{
        pin1: "net.N2",
        pin8: "net.N2",
        pin3: "net.N5",
        pin4: "net.N9",
        pin6: "net.N10",
        pin7: "net.N11",
        pin5: "net.N11",
        pin2: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-37.31} pcbY={13.89} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N12",
      }} type="npn" />
    <diode name="diode-2" footprint="SOD-123" pcbX={12.70} pcbY={21.73} connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }} />
    <chip name="chip-3" footprint="soic8" pcbX={-43.38} pcbY={38.53} connections={{
        pin2: "net.N2",
        pin4: "net.N3",
        pin6: "net.N6",
        pin8: "net.N8",
        pin5: "net.N8",
        pin3: "net.N9",
        pin1: "net.N9",
        pin7: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-14.52} pcbY={20.80} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N10",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-39.75} pcbY={-23.76} connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }} capacitance="0.1uF" />
  </board>
)
