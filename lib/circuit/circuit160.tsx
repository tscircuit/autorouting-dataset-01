/** Randomly generated circuit 160. */
export default () => (
  <board width="12.00mm" height="12.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-1.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      type="pnp"
    />
  </board>
)
