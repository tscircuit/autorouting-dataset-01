/** Randomly generated circuit 272. */
export default () => (
  <board width="48.00mm" height="64.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={18.62} pcbY={22.47} connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N8",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-15.13} pcbY={23.23} connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={16.79} pcbY={-13.20} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
        pin6: "net.N2",
        pin4: "net.N3",
        pin5: "net.N4",
        pin8: "net.N5",
        pin7: "net.N5",
        pin3: "net.N6",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-1" footprint="0603" pcbX={-5.48} pcbY={4.29} connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }} resistance="1k" />
    <diode name="diode-2" footprint="SOD-123" pcbX={-5.98} pcbY={18.13} connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }} />
    <diode name="diode-3" footprint="SOD-123" pcbX={-1.51} pcbY={-27.79} connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }} />
    <resistor name="resistor-2" footprint="0402" pcbX={9.92} pcbY={15.44} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={22.91} pcbY={29.49} connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }} inductance="10uH" />
  </board>
)
