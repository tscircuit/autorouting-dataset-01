/** Randomly generated circuit 115. */
export default () => (
  <board width="16.00mm" height="11.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={4.0}
      pcbY={-0.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N3",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      type="mosfet"
    />
  </board>
)
