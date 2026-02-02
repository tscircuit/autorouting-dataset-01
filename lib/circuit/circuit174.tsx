/** Randomly generated circuit 174. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={4.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={4.0}
      pcbY={-1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={0.0}
      pcbY={3.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={-4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      type="pnp"
    />
  </board>
)
