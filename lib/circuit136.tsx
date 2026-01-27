/** Randomly generated circuit 136. */
export default () => (
  <board width="11.00mm" height="16.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-1.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-1.0}
      pcbY={3.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
    />
  </board>
)
