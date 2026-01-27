/** Randomly generated circuit 198. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={1.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
  </board>
)
