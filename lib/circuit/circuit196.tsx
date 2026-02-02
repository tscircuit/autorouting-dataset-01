/** Randomly generated circuit 196. */
export default () => (
  <board width="15.00mm" height="15.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-1.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={2.5}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-4.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={2.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin1: "net.N4",
        pin2: "net.N4",
      }}
      type="npn"
    />
  </board>
)
