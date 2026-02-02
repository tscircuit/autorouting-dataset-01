/** Randomly generated circuit 153. */
export default () => (
  <board width="10.00mm" height="10.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={0.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={2.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-2.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
    />
  </board>
)
