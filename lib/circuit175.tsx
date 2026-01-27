/** Randomly generated circuit 175. */
export default () => (
  <board width="22.00mm" height="14.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-6.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={6.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
  </board>
)
