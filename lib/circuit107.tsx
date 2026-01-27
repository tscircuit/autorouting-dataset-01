/** Randomly generated circuit 107. */
export default () => (
  <board width="14.00mm" height="22.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-2.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={7.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-2.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={2.0}
      pcbY={-3.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
  </board>
)
