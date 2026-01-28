/** Randomly generated circuit 147. */
export default () => (
  <board width="13.00mm" height="13.00mm">
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={2.5}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-3.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={-3.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N4",
      }}
      type="jfet"
    />
  </board>
)
