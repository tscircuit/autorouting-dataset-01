/** Randomly generated circuit 135. */
export default () => (
  <board width="80.00mm" height="20.00mm">
    <resistor name="resistor-1" footprint="0402" pcbX={-19.05} pcbY={-8.74} connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={25.19} pcbY={2.22} connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }} inductance="10uH" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-26.89} pcbY={-8.48} connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N4",
      }} type="npn" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-11.94} pcbY={2.30} connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }} />
    <chip name="chip-1" footprint="dip8" pcbX={-3.45} pcbY={-5.60} connections={{
        pin8: "net.N1",
        pin3: "net.N2",
        pin6: "net.N2",
        pin4: "net.N2",
        pin5: "net.N4",
        pin7: "net.N4",
        pin2: "net.N6",
        pin1: "net.N7",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={13.67} pcbY={-5.37} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0603" pcbX={33.62} pcbY={7.23} connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={31.55} pcbY={-1.15} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={11.64} pcbY={6.02} connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={21.91} pcbY={-8.27} connections={{
        pin3: "net.N3",
        pin2: "net.N6",
        pin1: "net.N8",
      }} type="npn" />
  </board>
)
