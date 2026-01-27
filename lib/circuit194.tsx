/** Randomly generated circuit 194. */
export default () => (
  <board width="11.00mm" height="16.00mm">
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-1.5}
      pcbY={-3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-1.5}
      pcbY={3.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
  </board>
)
