/** Randomly generated circuit 160. */
export default () => (
  <board width="24.00mm" height="12.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={9.70} pcbY={-3.17} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-4.28} pcbY={3.62} connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N5",
      }} type="npn" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-9.10} pcbY={-4.66} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N5",
      }} type="npn" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={-5.88} pcbY={0.35} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N3",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-9.99} pcbY={1.35} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={3.28} pcbY={3.59} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
  </board>
)
