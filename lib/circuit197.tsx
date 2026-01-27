/** Randomly generated circuit 197. */
export default () => (
  <board width="20.00mm" height="13.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-6.0}
      pcbY={2.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
  </board>
)
