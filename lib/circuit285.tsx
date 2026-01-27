/** Randomly generated circuit 285. */
export default () => (
  <board width="56.00mm" height="70.00mm">
    <chip name="chip-1" footprint="soic16" pcbX={-19.19} pcbY={-27.36} connections={{
        pin6: "net.N2",
        pin12: "net.N2",
        pin14: "net.N3",
        pin13: "net.N3",
        pin9: "net.N4",
        pin15: "net.N4",
        pin4: "net.N5",
        pin8: "net.N5",
        pin3: "net.N5",
        pin7: "net.N6",
        pin1: "net.N8",
        pin2: "net.N8",
        pin16: "net.N9",
        pin11: "net.N9",
        pin5: "net.N9",
        pin10: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-11.14} pcbY={5.74} connections={{
        pin2: "net.N1",
        pin3: "net.N4",
        pin1: "net.N7",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.24} pcbY={15.62} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={14.80} pcbY={-9.87} connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={11.09} pcbY={5.04} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={14.13} pcbY={-1.61} connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={8.08} pcbY={-34.24} connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }} />
  </board>
)
