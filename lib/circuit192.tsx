/** Randomly generated circuit 192. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={0.00} pcbY={0.00} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-3.00} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }} capacitance="0.1uF" />
  </board>
)
