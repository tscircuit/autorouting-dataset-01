/** Randomly generated circuit 186. */
export default () => (
  <board width="12.00mm" height="18.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={2.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-2.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-3.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
      }}
      type="pnp"
    />
  </board>
)
