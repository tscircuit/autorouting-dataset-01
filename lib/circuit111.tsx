/** Randomly generated circuit 111. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
    />
  </board>
)
